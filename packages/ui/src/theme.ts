import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3366FF',
      light: '#6B9AFF',
      dark: '#003DA5',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF9696',
      dark: '#C4303D',
    },
    success: { main: '#1DB854' },
    warning: { main: '#FFB81C' },
    error: { main: '#FF5252' },
    info: { main: '#2196F3' },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 400 },
    h2: { fontSize: '2.5rem', fontWeight: 400 },
    h3: { fontSize: '2rem', fontWeight: 500 },
    h4: { fontSize: '1.75rem', fontWeight: 500 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
  },
  shape: {
    borderRadius: 12, // MD3 Medium
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

