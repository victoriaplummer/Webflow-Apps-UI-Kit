import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { getCheckboxStyles } from './Checkbox.styles';

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  checked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  onChange,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const styles = getCheckboxStyles();

  const getCustomCheckboxStyle = (): React.CSSProperties => {
    return {
      ...styles.custom,
      ...(checked && styles.customChecked),
      ...(indeterminate && styles.customIndeterminate),
      ...(disabled && styles.customDisabled),
      ...(error && styles.customError),
      ...(isFocused && styles.customFocused),
      ...(isHovered && !disabled && styles.customHovered),
    };
  };

  return (
    <label 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={styles.input}
        {...(({ size, ...rest }) => rest)(props)}
      />
      <div style={getCustomCheckboxStyle()}>
        {checked && <span style={styles.checkmark} />}
        {indeterminate && <span style={styles.indeterminateMark} />}
      </div>
    </label>
  );
};
