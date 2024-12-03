# Switch Component

A toggle switch component that provides an alternative to checkboxes with support for different sizes and states.

## Usage

```tsx
import { Switch } from '../inputs/Switch'
// Basic usage
<Switch
onChange={(checked) => console.log('Switched:', checked)}
/>
// With label and helper text
<Switch
label="Enable notifications"
helperText="You'll receive updates when enabled"
/>
// Different sizes
<Switch size="small" />
<Switch size="medium" />
<Switch size="large" />
// With error state
<Switch
error={true}
helperText="This setting is required"
/>
// Disabled state
<Switch
disabled={true}
label="Unavailable option"
/>
// Controlled component
<Switch
checked={isEnabled}
onChange={setIsEnabled}
/>
```

## Props

### Basic Props

- `checked`: Controlled checked state
- `defaultChecked`: Default checked state for uncontrolled usage
- `onChange`: Callback when switch is toggled
- `disabled`: Boolean to disable the switch
- `error`: Boolean to show error state
- `helperText`: Helper text shown below the switch
- `label`: Label text for the switch
- `required`: Boolean to mark the field as required

### Layout Props

- `size`: Size of the switch ('small' | 'medium' | 'large')
- `width`: Width of the switch container
- `padding`: Padding around the switch
- `margin`: Margin around the switch

## Features

- Three size variants
- Smooth toggle animation
- Error state handling
- Helper text display
- Required field indication
- Custom width and layout
- Keyboard navigation
- Focus management
- ARIA attributes for accessibility

## Accessibility

- Uses proper ARIA role="switch"
- Keyboard navigable
- Clear focus indicators
- Screen reader friendly
- Proper labeling
