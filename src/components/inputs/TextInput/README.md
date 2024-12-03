# TextInput Component

A flexible text input component that supports various states and configurations.

## Features

- Multiple sizes (small, medium, large)
- Various input types (text, password, email, etc.)
- Error states
- Helper text
- Icons
- Disabled state
- Required field indication
- Character limit
- Full width option

## Usage

```tsx
import { TextInput } from './TextInput';
// Basic usage
<TextInput
label="Username"
placeholder="Enter username"
/>
// With validation
<TextInput
label="Email"
type="email"
required
error={!isValidEmail}
helperText="Please enter a valid email"
/>
// With icon
<TextInput
label="Search"
icon="🔍"
placeholder="Search..."
/>
```
