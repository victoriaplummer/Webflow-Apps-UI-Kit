# Text Component

A flexible typography component that provides consistent text styling across your application.

## Installation

```tsx
<Text>Default body text</Text>
```

### Heading Variants

```tsx
tsx
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="h3">Heading 3</Text>
<Text variant="h4">Heading 4</Text>
<Text variant="h5">Heading 5</Text>
<Text variant="h6">Heading 6</Text>
```

### Body Text Variants

```tsx
<Text variant="body1">Body 1</Text>
<Text variant="body2">Body 2</Text>
<Text variant="caption">Caption</Text>
```

### Text Alignment

```tsx
<Text align="left">Left aligned text</Text>
<Text align="center">Center aligned text</Text>
<Text align="right">Right aligned text</Text>
<Text align="justify">Justify aligned text</Text>
```

### Custom Styling

```tsx
<Text color="primary" weight={700} as="span">
  Custom styled text
</Text>
```

## Props

### `variant`

Type: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'`  
Default: `'body1'`

Controls the text style variant.

### `color`

Type: `string`  
Default: `'inherit'`

Sets the text color.

### `align`

Type: `'left' | 'center' | 'right' | 'justify'`  
Default: `'left'`

Controls text alignment.

### `weight`

Type: `number | string`  
Default: Varies by variant

Sets the font weight.

### `as`

Type: `keyof JSX.IntrinsicElements`  
Default: Based on variant (`p` for body, appropriate heading tag for headings)

Determines the rendered HTML element.

### `className`

Type: `string`  
Optional

Adds custom CSS classes.

## Examples

### Responsive Text

```tsx
<Text variant="h1" as="h2">
  This renders as h2 with h1 styling
</Text>
```

### Custom Colors

```tsx
<Text color="#FF0000">Red text</Text>
<Text color="rgb(0, 255, 0)">Green text</Text>
Ask
Copy
Apply
```

### Semantic HTML with Different Styling

```tsx
<Text variant="h3" as="h1">
  SEO-friendly h1 with h3 styling
</Text>
```

## Accessibility

- Uses semantic HTML elements by default
- Maintains proper heading hierarchy
- Supports custom elements via `as` prop
- Preserves text contrast ratios
