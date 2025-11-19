'use client';

import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography } from '@packages/ui';
// Note: Alert is a molecule that needs to be created, using styled Box for now
import { CircularProgress } from '@packages/ui';

interface ComponentPreviewProps {
  componentName: string;
  originalCode: string;
  props: Record<string, unknown>;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  componentName,
  originalCode,
  props,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element | null>(null);

  // Simulate component evaluation (in real implementation this would be more sophisticated)
  useEffect(() => {
    const evaluateComponent = () => {
      try {
        setLoading(true);
        setError(null);

        // Basic preview component for demonstration
        // In a real implementation, this would use a more sophisticated approach
        // to evaluate the custom code safely
        switch (componentName) {
          case 'Button':
            const { Button: MuiButton } = require('@packages/ui');
            setRenderedComponent(
              <MuiButton {...props}>{
                props?.children || (props.variant || 'Default Button')
              }</MuiButton>
            );
            break;
          case 'Typography':
            const { Typography: MuiTypography } = require('@packages/ui');
            setRenderedComponent(
              <MuiTypography {...props}>{props.children || 'Sample Text'}</MuiTypography>
            );
            break;
          default:
            setRenderedComponent(
              <Typography variant="h6" component="div" sx={{ textAlign: 'center', py: 4 }}>
                Component Preview: {componentName}
              </Typography>
            );
        }
        setLoading(false);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
        setLoading(false);
      }
    };

    if (componentName) {
      evaluateComponent();
    }
  }, [componentName, props]);

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderRadius: '8px',
        height: '100%',
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Box
        sx={{
          p: 2,
          minHeight: '200px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
          borderRadius: '8px',
        }}
      >
        {loading && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <CircularProgress size={40} thickness={3} />
          </Box>
        )}

        {error && (
          <Box
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'error.main',
              backgroundColor: 'error.light',
              borderRadius: '8px',
              color: 'error.contrastText',
              '& .MuiTypography-root': {
                wordBreak: 'break-word',
              },
            }}
          >
            <Typography variant="body2" component="div">
              Component Preview Error: {error}
            </Typography>
          </Box>
        )}

        {!loading && !error && renderedComponent && (
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              overflow: 'auto',
            }}
          >
            {renderedComponent}
          </Box>
        )}

        {!loading && !error && !renderedComponent && (
          <Typography variant="body2" color="text.secondary">
            Komponent vorhanden aber keine Voransicht verfügbar
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default ComponentPreview;