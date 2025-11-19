// Component Registry
// Will be populated with 15 core components:
// 1. Button
// 2. TextField
// 3. Card
// 4. Chip
// 5. Alert
// 6. Dialog/Modal
// 7. Snackbar
// 8. Progress
// 9. Tabs
// 10. Menu/Dropdown
// 11. Checkbox
// 12. RadioGroup
// 13. Switch
// 14. Slider
// 15. Autocomplete

export interface ComponentMetadata {
  id: string;
  name: string;
  category: 'atom' | 'molecule' | 'organism';
  description: string;
  tags: string[];
}

export const components: ComponentMetadata[] = [];
// To be populated during implementation

