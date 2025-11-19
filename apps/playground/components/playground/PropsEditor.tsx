'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  FormControl,
  Switch,
  Chip,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormHelperText,
  Typography
} from '@packages/ui';
import { z } from 'zod';

interface PropsEditorProps {
  componentName: string;
  propsSchema: Record<string, unknown>;
  currentValues: Record<string, unknown>;
  onPropsChange: (props: Record<string, unknown>) => void;
}

const PropsEditor: React.FC<PropsEditorProps> = ({
  componentName,
  propsSchema,
  currentValues,
  onPropsChange,
}) => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    // Programmatisch Schema beruhend auf der Zod-Definition aus der Roadmap
    defaultValues: currentValues,
  });

  // Wachform-Utils für Echtzeit-Updates
  const formValues = watch();

  React.useEffect(() => {
    // Befahigung der React Hook Form + Zod Integration (Phase 15)
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      onPropsChange(formValues);
    }
  }, [formValues, errors, onPropsChange]);

  const renderFormField = (propName: string, propConfig: any) => {
    const { type, label, tooltip, options, rules } = propConfig;
    const errorMessage = errors[propName]?.message as string | undefined;

    switch (type) {
      case 'boolean':
        return (
          <FormControl
            key={propName}
            sx={{ mb: 2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
              <Controller
                name={propName}
                control={control}
                rules={rules}
                render={({ field }) => (
                  <Switch
                    {...field}
                    onChange={(e: any) => field.onChange(e.target.checked)}
                    checked={Boolean(field.value)}
                  />
                )}
              />
              <Box sx={{ ml: 1 }} >
                {label}
              </Box>
            </Box>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
          </FormControl>
        );

      case 'string':
        return (
          <FormControl
            key={propName}
            fullWidth
            sx={{ mb: 2 }}
            error={Boolean(errorMessage)}
          >
            <InputLabel>{label}</InputLabel>
            <Controller
              name={propName}
              control={control}
              rules={rules}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={label}
                  size="small"
                  variant="outlined"
                  error={Boolean(errorMessage)}
                  helperText={errorMessage}
                />
              )}
            />
          </FormControl>
        );

      case 'select':
        return (
          <FormControl
            key={propName}
            fullWidth
            sx={{ mb: 2 }}
            error={Boolean(errorMessage)}
          >
            <InputLabel>{label}</InputLabel>
            <Controller
              name={propName}
              control={control}
              rules={rules}
              render={({ field }) => (
                <Select
                  {...field}
                  label={label}
                  size="small"
                  error={Boolean(errorMessage)}
                >
                  {options?.map((option: { value: string; label: string }) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
          </FormControl>
        );

      case 'chip':
        return (
          <FormControl
            key={propName}
            sx={{ mb: 2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
              <Chip label={label} size="small" />
              <Controller
                name={propName}
                control={control}
                rules={rules}
                render={({ field }) => (
                  <Switch
                    {...field}
                    onChange={(e: any) => field.onChange(e.target.checked)}
                    checked={Boolean(field.value)}
                  />
                )}
              />
            </Box>
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
          </FormControl>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }} >
      <Typography variant="h6" component="h3" gutterBottom >
        Props Editor
      </Typography>

      {Object.entries(propsSchema).length > 0 ? (
        Object.entries(propsSchema).map(([propName, propConfig]: [string, any]) =>
          renderFormField(propName, propConfig)
        )
      ) : (
        <Typography variant="body2" color="text.secondary" >
          Keine Props verfügbar für diesen Komponenten
        </Typography>
      )}
    </Box>
  );
};

export default PropsEditor;