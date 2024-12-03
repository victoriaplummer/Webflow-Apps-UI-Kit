import { create } from '@storybook/theming/create';
import { defaultTheme } from '../src/components/theme';
import { colors } from '../src/components/foundations';

export default create({
  base: 'light',
  brandTitle: 'Webflow UI Kit',
  brandUrl: 'https://webflow.com',
  brandImage: '/logo.png',

  // UI
  appBg: defaultTheme.colors.background,
  appContentBg: defaultTheme.colors.background,
  appBorderColor: defaultTheme.colors.border,
  appBorderRadius: parseInt(defaultTheme.borderRadius.sm),

  // Typography
  fontBase: defaultTheme.typography.fontFamily,
  fontCode: 'ui-monospace, Menlo, Monaco, "Cascadia Code", "Source Code Pro", monospace',

  // Colors
  colorPrimary: defaultTheme.colors.primary,
  colorSecondary: defaultTheme.colors.secondary,

  // Text colors
  textColor: defaultTheme.colors.text,
  textInverseColor: defaultTheme.colors.text,
  textMutedColor: defaultTheme.colors.textSecondary,

  // Input colors
  inputBg: colors.background.input,
  inputBorder: defaultTheme.colors.border,
  inputTextColor: defaultTheme.colors.text,
  inputBorderRadius: parseInt(defaultTheme.borderRadius.sm),
});
