# Radio Component

A form input radio group component with support for horizontal/vertical layouts, disabled options, and error states.

## Usage

```tsx
import { Radio } from '../inputs/Radio'
// Basic usage
const options = [
{ label: 'Option 1', value: '1' },
{ label: 'Option 2', value: '2' },
{ label: 'Option 3', value: '3', disabled: true },
]
<Radio
options={options}
onChange={(value) => console.log('Selected:', value)}
/>
// With label and helper text
<Radio
label="Select an option"
options={options}
helperText="Choose one option"
required
/>
// Horizontal layout
<Radio
options={options}
direction="horizontal"
/>
// With error state
<Radio
options={options}
error={true}
helperText="Please select an option"
/>
// Disabled state
<Radio
options={options}
disabled={true}
/>
// Controlled component
<Radio
options={options}
value={selectedValue}
onChange={setSelectedValue}
/>
```

## Props

### Basic Props

- `options`: Array of option objects with label and value
- `value`: Controlled value
- `defaultValue`: Default value for uncontrolled usage
- `onChange`: Callback when selection changes
- `disabled`: Boolean to disable all options
- `error`: Boolean to show error state
- `helperText`: Helper text shown below the radio group
- `label`: Label text for the radio group
- `required`: Boolean to mark the field as required

### Option Props

- `label`: Display text for the option
- `value`: Value of the option
- `disabled`: Boolean to disable specific options

### Layout Props

- `direction`: Layout direction ('horizontal' | 'vertical')
- `width`: Width of the radio group
- `padding`: Padding around the radio group
- `margin`: Margin around the radio group

## Features

- Single option selection
- Horizontal and vertical layouts
- Disabled options support
- Error state handling
- Helper text display
- Required field indication
- Custom width and layout
- Keyboard navigation
- Focus management
