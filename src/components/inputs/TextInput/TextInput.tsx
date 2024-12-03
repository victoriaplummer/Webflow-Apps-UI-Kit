import React, { useState, useEffect } from 'react';
import { TextInputProps } from './TextInput.types';
import { getTextInputStyles } from './TextInput.styles';

export const TextInput: React.FC<TextInputProps> = ({
  value,
  defaultValue = '',
  placeholder,
  label,
  helperText,
  size = 'medium',
  type = 'text',
  disabled = false,
  error = false,
  required = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  maxLength,
  onChange,
  onBlur,
  onFocus,
  name,
  className,
  style,
}) => {
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const styles = getTextInputStyles({
    size,
    disabled,
    error,
    fullWidth,
    icon,
    iconPosition,
  });

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    setCurrentValue(newValue);
    onChange?.(event);
  };

  const handleFocus = () => {
    setIsFocused(() => true);
    onFocus?.();
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  return (
    <div style={{ ...styles.container, ...style }} className={className}>
      {label && (
        <label style={styles.label}>
          {label}
          {required && ' *'}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && <span style={styles.icon}>{icon}</span>}
        <input
          type={type}
          value={currentValue}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            ...styles.input,
            ...(isFocused && styles.inputFocused),
            ...(disabled && styles.inputDisabled),
            ...(error && styles.inputError),
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {helperText && (
          <span style={error ? styles.helperTextError : styles.helperText}>{helperText}</span>
        )}
        {maxLength && (
          <span style={styles.characterCount}>
            {currentValue.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};
