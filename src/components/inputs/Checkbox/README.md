# Checkbox Component

A customizable checkbox input component with support for labels, error states, and helper text.

## Usage

```tsx
import { Checkbox } from '../inputs/Checkbox'
// Basic usage
<Checkbox
label="Accept terms"
onChange={(checked) => console.log('Checked:', checked)}
/>
// With error and helper text
<Checkbox
label="Subscribe to newsletter"
error={true}
helperText="Please accept the terms"
/>
// Disabled state
<Checkbox
label="Disabled option"
disabled
/>
// Controlled component
<Checkbox
label="Controlled checkbox"
checked={isChecked}
onChange={setIsChecked}
/>
// Required field
<Checkbox
label="Required field"
required
helperText="This field is required"
/>
```

## Props

- `checked`: Boolean for checked state
- `onChange`: Callback function when checkbox state changes
- `label`: Text label for the checkbox
- `disabled`: Boolean to disable the checkbox
- `error`: Boolean to show error state
- `helperText`: Helper text shown below the checkbox
- `required`: Boolean to mark the field as required
- `name`: Input name attribute
- `className`: Optional CSS class name
- `indeterminate`: Boolean for indeterminate state
