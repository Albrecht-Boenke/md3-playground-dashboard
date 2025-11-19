'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Box, Paper, TextField, InputAdornment, Card, CardContent, CardHeader, Chip, IconButton, Typography, Divider, Button } from '@packages/ui';
import {
  Search as SearchIcon,
  Code as CodeIcon,
  Preview as PreviewIcon,
  ViewModule as ComponentsIcon,
  Visibility as ShowIcon,
  CopyAll as CopyIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

import { Button as MD3Button, Typography as MD3Typography, TextField as MD3TextField, Chip as MD3Chip } from '@packages/ui';

import CodeEditor from '@/components/playground/CodeEditor';
import ComponentPreview from '@/components/playground/ComponentPreview';
import PropsEditor from '@/components/playground/PropsEditor';

interface ComponentMetadata {
  id: string;
  name: string;
  category: 'atom' | 'molecule' | 'organism';
  description: string;
  tags: string[];
}

interface ComponentShowcaseProps {
  metadata: ComponentMetadata;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ metadata, onSelect, isSelected }) => (
  <Card
    sx={{
      backgroundColor: isSelected ? 'action.selected' : 'background.paper',
      borderColor: isSelected ? 'primary.main' : 'divider',
      border: '1px solid',
      cursor: 'pointer',
      transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: 3,
      },
      height: '100%'
    }}
    onClick={() => onSelect(metadata.id)}
  >
    <CardHeader
      title={metadata.name}
      subheader={metadata.description}
      action={
        <Chip
          label={metadata.category}
          size="small"
          sx={{
            backgroundColor:
              metadata.category === 'atom' ? 'primary.main' :
              metadata.category === 'molecule' ? 'secondary.main' :
              'info.main',
            color: 'white'
          }}
        />
      }
    />
    <CardContent>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {metadata.tags.map((tag) => (
          <Chip key={tag} label={tag} variant="outlined" size="small" />
        ))}
      </Box>

      <Box sx={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Live Preview Component */}
        {metadata.id === 'button' // Spezifische Vorsicht für UI-Komponenten
          ? (
            <MD3Button variant="contained" color="primary">
              Beispiel {metadata.name}
            </MD3Button>
          ) : metadata.id === 'typography' ? (
            <MD3Typography variant="h6">Beispiel {metadata.name}</MD3Typography>
          ) : metadata.id === 'chip' ? (
            <MD3Chip label={`Beispiel ${metadata.name}`} size="medium" />
          ) : metadata.id === 'textfield' ? (
            <MD3TextField label={`Beispiel ${metadata.name}`} variant="outlined" />
          ) : (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height={80}
              width={80}
              border={1}
              borderColor="grey.300"
              borderRadius={1}
            >
              <ShowIcon sx={{ color: 'grey.600' }} />
            </Box>
          )
        }
      </Box>
    </CardContent>
  </Card>
);

function PlaygroundGalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [code, setCode] = useState('// Component code will appear here');
  const [props, setProps] = useState<Record<string, unknown>>({});
  const [viewMode, setViewMode] = useState<'code' | 'preview' | 'props'>('preview');

  // Sample component data - Diese Daten kommen später aus dem constants/components.ts
  const components: ComponentMetadata[] = [
    {
      id: 'button',
      name: 'Button',
      category: 'atom',
      description: 'Material Design 3 Button mit verschiedenen Varianten und Größen',
      tags: ['navigation', 'action', 'form']
    },
    {
      id: 'typography',
      name: 'Typography',
      category: 'atom',
      description: 'Text- und Typographie-Komponente für konsistentes Styling',
      tags: ['text', 'content', 'layout']
    },
    {
      id: 'chip',
      name: 'Chip',
      category: 'atom',
      description: 'Zeigt Eingaben, Attribute oder Aktionen in kompakter Form',
      tags: ['selection', 'tag', 'filter']
    },
    {
      id: 'textfield',
      name: 'TextField',
      category: 'atom',
      description: 'Text-Eingabefeld mit verschiedenen Varianten',
      tags: ['form', 'input', 'text']
    },
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleComponentSelect = useCallback((componentId: string) => {
    setSelectedComponent(componentId === selectedComponent ? null : componentId);

    // Beispiel-Code für die verschiedenen Komponenten (Phase 4.2)
    switch (componentId) {
      case 'button':
        setCode(`import { Button } from '@packages/ui';

<Button
  variant="contained"
  color="primary"
  size="medium"
  onClick={() => console.log('Clicked!')}
  sx={{ borderRadius: 2, fontWeight: 500, transition: 'all 150ms' }}
>
  Beispiel Button
</Button>;`);
        setProps({
          variant: 'contained',
          color: 'primary',
          size: 'medium',
          onClick: () => console.log('Button clicked'),
        });
        break;
      case 'typography':
        setCode(`import { Typography } from '@packages/ui';

<Typography variant="h6" component="div" gutterBottom>
  Beispiel H6 Typography
</Typography>;`);
        setProps({
          variant: 'h6',
          component: 'div',
          gutterBottom: true,
        });
        break;
      default:
        setCode(`// Component: ${componentId}
// Code wird generiert...`);
        setProps({});
    }
  }, [selectedComponent]);

  const handlePropsChange = (newProps: Record<string, unknown>) => {
    setProps(newProps);
    // Code-Update basierend auf den Props
    // In der echten Implementation wäre das dynamischer
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }} >
      {/* Header mit Suchfunktion */}
      <Paper elevation={0} sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', backgroundColor: 'background.default' }} >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={2}>
            <ComponentsIcon color="primary" sx={{ fontSize: 32 }} />
            <Typography variant="h5" component="h1" >
              MD3 Component Playground
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              size="small"
              placeholder="Komponenten durchsuchen..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
              }}
              sx={{ width: '250px' }}
            />

            <Chip
              label={`${filteredComponents.length} Komponenten`}
              color="primary"
              size="small"
            />
          </Box>
        </Box>

        <Box display="flex" gap={2} alignItems="center">
          {['all', 'atom', 'molecule', 'organism'].map((category) => (
            <Chip
              key={category}
              label={category === 'all' ? 'Alle' : category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' as const : undefined}
              variant={selectedCategory === category ? 'filled' : 'outlined'}
            />
          ))}

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <Box display="flex" gap={1}>
            {
              [
                { mode: 'preview', icon: <PreviewIcon />, label: 'Vorschau' },
                { mode: 'code', icon: <CodeIcon />, label: 'Code' },
                { mode: 'props', icon: <ShowIcon />, label: 'Props' }
              ].map((item) => (
                <Button
                  key={item.mode}
                  variant={viewMode === item.mode ? 'contained' : 'outlined'}
                  sx={{
                    minWidth: 'auto',
                    borderRadius: '4px',
                  }}
                  onClick={() => setViewMode(item.mode as 'code' | 'preview' | 'props')}
                >
                  {item.icon}
                  <Box component="span" ml={0.5} >{item.label}</Box>
                </Button>
              ))
            }
          </Box>
        </Box>
      </Paper>

      <Box display="flex" height="calc(100vh - 200px)" overflow="hidden" >
        {/* Component Gallery */}
        <Box sx={{ width: { xs: '100%', md: '25%', lg: '20%' }, borderRight: '1px solid', borderColor: 'divider' }}>
          <Box
            sx={{
              height: '100%',
              overflow: 'auto',
              borderRight: '1px solid',
              borderColor: 'divider',
              p: 2
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {filteredComponents.map((component) => (
                  <ComponentShowcase
                    key={component.id}
                    metadata={component}
                    onSelect={handleComponentSelect}
                    isSelected={selectedComponent === component.id}
                  />
              ))}
            </Box>

            {filteredComponents.length === 0 && (
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={6}>
                <SearchIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" align="center" >
                  Keine Komponenten gefunden
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" >
                  Versuche andere Suchbegriffe oder Filter
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Live Preview/Editor */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
          {selectedComponent ? (
            <>
              {viewMode === 'code' && (
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" >TypeScript Code</Typography>
                    <Box display="flex" gap={1}>
                      <IconButton size="small" title="Code kopieren"><CopyIcon /></IconButton>
                      <IconButton size="small" title="Code exportieren"><DownloadIcon /></IconButton>
                    </Box>
                  </Box>

                  <CodeEditor
                    code={code}
                    onChange={handleCodeChange}
                    language="tsx"
                    height="calc(100% - 40px)"
                  />
                </Box>
              )}

              {viewMode === 'preview' && (
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }} >
                  <Typography variant="h6" >Live Preview</Typography>

                  <Box sx={{ flex: 1, backgroundColor: 'background.paper', borderRadius: 1, p: 3, border: '1px solid', borderColor: 'divider' }} >
                    <ComponentPreview
                      componentName={selectedComponent}
                      originalCode={code}
                      props={props}
                    />
                  </Box>
                </Box>
              )}

              {viewMode === 'props' && (
                <Box sx={{ flex: 1 }} >
                  <Typography variant="h6" mb={1} >Props Editor</Typography>

                  <PropsEditor
                    componentName={selectedComponent}
                    propsSchema={{
                      variant: {
                        type: 'select',
                        label: 'Variant',
                        options: [
                          { value: 'contained', label: 'Contained' },
                          { value: 'outlined', label: 'Outlined' },
                          { value: 'text', label: 'Text' }
                        ],
                        defaultValue: selectedComponent === 'button' ? 'contained' : 'outlined'
                      },
                      size: {
                        type: 'select',
                        label: 'Size',
                        options: [
                          { value: 'small', label: 'Small' },
                          { value: 'medium', label: 'Medium' },
                          { value: 'large', label: 'Large' }
                        ],
                        defaultValue: 'medium'
                      },
                      color: {
                        type: 'select',
                        label: 'Color',
                        options: [
                          { value: 'primary', label: 'Primary' },
                          { value: 'secondary', label: 'Secondary' },
                          { value: 'error', label: 'Error' },
                          { value: 'warning', label: 'Warning' },
                          { value: 'info', label: 'Info' },
                          { value: 'success', label: 'Success' }
                        ],
                        defaultValue: 'primary'
                      },
                      disabled: {
                        type: 'boolean',
                        label: 'Disabled'
                      },
                      fullWidth: {
                        type: 'boolean',
                        label: 'Full Width'
                      },
                      showIcon: {
                        type: 'boolean',
                        label: 'Show Icon'
                      }
                    }}
                    currentValues={props}
                    onPropsChange={handlePropsChange}
                  />
                </Box>
              )}
            </>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <ComponentsIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 3 }} />
              <Typography variant="h4" sx={{ fontSize: '2rem', mb: 1 }} gutterBottom color="text.secondary">
                MD3 Playground
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center" maxWidth={400}>
                Wähle eine Komponente aus der Galerie, um sie live zu bearbeiten und anzupassen.
                Nutze den Monaco-Editor für TypeScript und den Props-Editor für Modifikationen.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default PlaygroundGalleryPage;