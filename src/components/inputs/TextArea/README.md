# TextArea Component

A multi-line text input component with support for auto-resizing, character limits, and various states.

## Usage

```tsx
import { TextArea } from '../inputs/TextArea'
// Basic usage
<TextArea
onChange={(value) => console.log('Input:', value)}
/>
// With label and helper text
<TextArea
label="Message"
helperText="Enter your message here"
placeholder="Type something..."
/>
// With character limit
<TextArea
maxLength={100}
helperText="Keep it brief"
/>
// With auto-resize
<TextArea
minRows={3}
maxRows={6}
/>
// With error state
<TextArea
error={true}
helperText="This field is required"
/>
// Disabled state
<TextArea
disabled={true}
value="Cannot edit this"
/>
// Custom resize behavior
<TextArea
resize="none"
rows={5}
/>
```

## Props

### Basic Props

- `value`: Controlled value
- `defaultValue`: Default value for uncontrolled usage
- `placeholder`: Placeholder text
- `onChange`: Callback when value changes
- `disabled`: Boolean to disable the textarea
- `error`: Boolean to show error state
- `helperText`: Helper text shown below the textarea
- `label`: Label text for the textarea
- `required`: Boolean to mark the field as required

### Layout Props

- `rows`: Number of visible text rows
- `minRows`: Minimum number of rows for auto-resize
- `maxRows`: Maximum number of rows for auto-resize
- `resize`: Resize behavior ('none' | 'both' | 'horizontal' | 'vertical')
- `width`: Width of the textarea
- `maxLength`: Maximum number of characters allowed

### Event Props

- `onBlur`: Callback when textarea loses focus
- `onFocus`: Callback when textarea gains focus

## Features

- Auto-resizing capability
- Character count display
- Custom resize behavior
- Error state handling
- Helper text display
- Required field indication
- Character limit enforcement
- Focus management
