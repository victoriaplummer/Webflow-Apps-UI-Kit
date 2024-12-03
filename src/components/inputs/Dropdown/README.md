# Dropdown Component

A form input dropdown/select component with support for single selection, disabled options, and error states.

## Usage

```tsx
import { Dropdown } from '../inputs/Dropdown'
// Basic usage
const options = [
{ label: 'Option 1', value: '1' },
{ label: 'Option 2', value: '2' },
{ label: 'Option 3', value: '3', disabled: true },
]
<Dropdown
options={options}
onSelect={(value) => console.log('Selected:', value)}
/>
// With label and helper text
<Dropdown
label="Select an option"
options={options}
helperText="Choose from the list"
/>
// With error state
<Dropdown
options={options}
error={true}
helperText="Please select an option"
/>
// Disabled state
<Dropdown
options={options}
disabled={true}
/>
// Custom width and placeholder
<Dropdown
options={options}
width={300}
placeholder="Choose wisely..."
/>
```

## Props

### Basic Props

- `options`: Array of option objects with label and value
- `value`: Controlled value
- `defaultValue`: Default value for uncontrolled usage
- `placeholder`: Placeholder text when no option is selected
- `disabled`: Boolean to disable the dropdown
- `error`: Boolean to show error state
- `helperText`: Helper text shown below the dropdown
- `label`: Label text for the dropdown

### Option Props

- `label`: Display text for the option
- `value`: Value of the option
- `disabled`: Boolean to disable specific options

### Event Props

- `onSelect`: Callback when an option is selected
- `onBlur`: Callback when dropdown loses focus
- `onFocus`: Callback when dropdown gains focus

### Layout Props

- `width`: Width of the dropdown
- `maxHeight`: Maximum height of the options menu
- `padding`: Padding around the dropdown
- `margin`: Margin around the dropdown

## Features

- Single option selection
- Disabled options support
- Error state handling
- Helper text display
- Custom width and layout
- Keyboard navigation
- Click outside to close
- Focus management
