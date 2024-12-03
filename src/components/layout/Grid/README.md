# Grid Component

A flexible Grid layout component built with CSS Grid.

## Usage

```tsx
import { Grid } from '@webflow/ui-kit';
// Basic usage
<Grid columns={3} gap="1rem">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</Grid>
// Advanced usage
<Grid
columns="repeat(auto-fit, minmax(200px, 1fr))"
gap="2rem"
alignItems="center"
>
<div>Responsive Item 1</div>
<div>Responsive Item 2</div>
</Grid>
```

## Props

| Prop         | Type                                               | Default | Description                                             |
| ------------ | -------------------------------------------------- | ------- | ------------------------------------------------------- |
| columns      | number \| string                                   | 12      | Number of columns or custom grid-template-columns value |
| rows         | string                                             | -       | Grid template rows value                                |
| gap          | string \| number                                   | -       | Grid gap value                                          |
| rowGap       | string \| number                                   | -       | Grid row gap value                                      |
| columnGap    | string \| number                                   | -       | Grid column gap value                                   |
| areas        | string                                             | -       | Grid template areas value                               |
| autoFlow     | 'row' \| 'column' \| 'row dense' \| 'column dense' | -       | Grid auto flow value                                    |
| alignItems   | 'start' \| 'end' \| 'center' \| 'stretch'          | -       | Align grid items                                        |
| justifyItems | 'start' \| 'end' \| 'center' \| 'stretch'          | -       | Justify grid items                                      |
