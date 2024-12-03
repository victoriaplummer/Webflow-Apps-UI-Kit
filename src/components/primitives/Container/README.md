# Container

A layout component that provides consistent maximum width and padding for content.

## Usage

```tsx
tsx
import { Container } from '@/components/primitives/Container'

function MyComponent() {
  return (
    <Container>
      <h1>My Content</h1>
      <p>This content will be contained within standard margins.</p>
    </Container>
  )
}
```

## Props

| Prop      | Type             | Default  | Description                      |
| --------- | ---------------- | -------- | -------------------------------- |
| children  | ReactNode        | -        | The content to be contained      |
| maxWidth  | string \| number | '1200px' | Maximum width of the container   |
| padding   | string \| number | '1rem'   | Padding applied to the container |
| className | string           | -        | Additional CSS classes           |

## Examples

### Basic Container

```tsx
<Container>
  <p>Basic container with default max-width and padding</p>
</Container>
```

### Custom Width Container

```tsx
<Container maxWidth="800px">
  <p>Narrower container for focused content</p>
</Container>
```
