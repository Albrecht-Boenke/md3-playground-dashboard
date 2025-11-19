// MUI WRAPPER - ZENTRALISIERE ALLE MUI-IMPORTS
// Das BEFOLGT die Import Governance Regel aus AI_PROJECT_CONTEXT.md

// Basis Material-UI Components
export {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
  TextField as MuiTextField,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  Divider as MuiDivider,
  Chip as MuiChip,
  Avatar as MuiAvatar,
  AvatarGroup as MuiAvatarGroup,
  Badge as MuiBadge,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemText as MuiListItemText,
  ListItemIcon as MuiListItemIcon,
  // Layout Components
  Box,
  Container,
  Grid,
  Stack,
  Paper,
  // Navigation
  Tabs as MuiTabs,
  Tab as MuiTab,
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
  // Feedback
  Alert as MuiAlert,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  Snackbar as MuiSnackbar,
  // Data Display
  Table as MuiTable,
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableContainer as MuiTableContainer,
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
  TablePagination as MuiTablePagination,
  // Form Components
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
  FormHelperText as MuiFormHelperText,
  InputLabel as MuiInputLabel,
  OutlinedInput as MuiOutlinedInput,
  FilledInput as MuiFilledInput,
  InputAdornment as MuiInputAdornment,
  Switch as MuiSwitch,
  Checkbox as MuiCheckbox,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel as MuiFormControlLabel,
  Select as MuiSelect,
  // Progress & Loading
  LinearProgress as MuiLinearProgress,
  CircularProgress,
  Skeleton as MuiSkeleton,
  // Slider
  Slider as MuiSlider,
  // Surfaces
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Drawer as MuiDrawer,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  // Utilities
  Tooltip as MuiTooltip,
  Popover as MuiPopover,
  Modal as MuiModal,
  Backdrop as MuiBackdrop,
  Fade as MuiFade,
  Grow as MuiGrow,
  Slide as MuiSlide,
  Zoom as MuiZoom,
  Collapse as MuiCollapse,
  // Icons
  Icon as MuiIcon,
  SvgIcon as MuiSvgIcon,
  // Theme und Styling
  createTheme,
  ThemeProvider,
  styled,
  makeStyles,
  withStyles,
  // CSS Baseline - für Box-Sizing Reset
  CssBaseline,
  // Utils und CSS Utilities
  darken,
  lighten,
  // fade, // DEPRECATED: Use alpha instead
  alpha,
  emphasize,
  useMediaQuery,
  // Deprecated - aber für Kompatibilität
  createStyles,
} from '@mui/material'

// Next.js App Router Integration
export {
  AppRouterCacheProvider
} from '@mui/material-nextjs/v15-appRouter'

export type {
  // Button Components
  ButtonProps as MuiButtonProps,
  IconButtonProps as MuiIconButtonProps,
  // Typography Components
  TypographyProps as MuiTypographyProps,
  // Form Components
  TextFieldProps as MuiTextFieldProps,
  // Card Components
  CardProps as MuiCardProps,
  CardHeaderProps as MuiCardHeaderProps,
  CardContentProps as MuiCardContentProps,
  CardActionsProps as MuiCardActionsProps,
  // Layout Components
  DividerProps as MuiDividerProps,
  ChipProps as MuiChipProps,
  AvatarProps as MuiAvatarProps,
  AvatarGroupProps as MuiAvatarGroupProps,
  BadgeProps as MuiBadgeProps,
  // Menu Components
  MenuProps as MuiMenuProps,
  MenuItemProps as MuiMenuItemProps,
  // List Components
  ListProps as MuiListProps,
  ListItemProps as MuiListItemProps,
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemTextProps as MuiListItemTextProps,
  ListItemIconProps as MuiListItemIconProps,
  // Navigation Components
  TabsProps as MuiTabsProps,
  TabProps as MuiTabProps,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  LinkProps as MuiLinkProps,
  // Feedback Components
  AlertProps as MuiAlertProps,
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentProps as MuiDialogContentProps,
  DialogActionsProps as MuiDialogActionsProps,
  SnackbarProps as MuiSnackbarProps,
  // Data Display Components
  TableProps as MuiTableProps,
  TableBodyProps as MuiTableBodyProps,
  TableCellProps as MuiTableCellProps,
  TableContainerProps as MuiTableContainerProps,
  TableHeadProps as MuiTableHeadProps,
  TableRowProps as MuiTableRowProps,
  TablePaginationProps as MuiTablePaginationProps,
  // Form Components
  FormControlProps as MuiFormControlProps,
  FormLabelProps as MuiFormLabelProps,
  FormHelperTextProps as MuiFormHelperTextProps,
  InputLabelProps as MuiInputLabelProps,
  OutlinedInputProps as MuiOutlinedInputProps,
  FilledInputProps as MuiFilledInputProps,
  InputAdornmentProps as MuiInputAdornmentProps,
  SwitchProps as MuiSwitchProps,
  CheckboxProps as MuiCheckboxProps,
  RadioProps as MuiRadioProps,
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabelProps as MuiFormControlLabelProps,
  SelectProps as MuiSelectProps,
  // Slider Component
  SliderProps as MuiSliderProps,
  // Progress Components
  LinearProgressProps as MuiLinearProgressProps,
  CircularProgressProps as MuiCircularProgressProps,
  SkeletonProps as MuiSkeletonProps,
  // Surfaces Components
  AppBarProps as MuiAppBarProps,
  ToolbarProps as MuiToolbarProps,
  DrawerProps as MuiDrawerProps,
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetailsProps as MuiAccordionDetailsProps,
  // Utitlity Components
  BoxProps,
  ContainerProps,
  GridProps,
  StackProps,
  PaperProps,
  TooltipProps as MuiTooltipProps,
  PopoverProps as MuiPopoverProps,
  ModalProps as MuiModalProps,
  BackdropProps as MuiBackdropProps,
  // Transitions
  FadeProps as MuiFadeProps,
  GrowProps as MuiGrowProps,
  SlideProps as MuiSlideProps,
  ZoomProps as MuiZoomProps,
  CollapseProps as MuiCollapseProps,
  // Icon Components
  IconProps as MuiIconProps,
  SvgIconProps as MuiSvgIconProps,
  // Theme and Typography
  ThemeOptions,
  StyledComponentProps,
} from '@mui/material'

// Hoisted imports to prevent conflicts
export { Divider as HrProps } from '@mui/material'