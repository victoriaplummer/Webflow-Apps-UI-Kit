# Box Component

The Box component is a basic layout primitive that can be used to create containers with customizable styles and layout properties.

## Usage

```tsx
tsx
import { Box } from '../primitives/Box'
// Basic usage
<Box padding={20} margin={10}>
Content goes here
</Box>
// With custom styles
<Box
backgroundColor="#f5f5f5"
borderRadius="8px"
boxShadow="0 2px 4px rgba(0,0,0,0.1)"
padding={16}
>
Styled content
</Box>
```

## Props

The Box component accepts the following props:

- `children`: React nodes to be rendered inside the box
- `className`: Optional CSS class name
- `backgroundColor`: Background color of the box
- `border`: CSS border property
- `borderRadius`: Border radius of the box
- `boxShadow`: Box shadow CSS property
- `display`: CSS display property
- `position`: CSS position property
- `overflow`: CSS overflow property
- `zIndex`: CSS z-index property
- `width`: Width of the box
- `height`: Height of the box
- `padding`: Padding around the content
- `margin`: Margin around the box
