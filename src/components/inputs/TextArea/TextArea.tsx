import React, { useState, useRef, useEffect } from 'react';
import { TextAreaProps } from './TextArea.types';
import { getTextAreaStyles } from './TextArea.styles';

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  value,
  defaultValue = '',
  placeholder,
  rows = 3,
  minRows,
  maxRows,
  maxLength,
  resize = 'vertical',
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  error = false,
  helperText,
  label,
  required = false,
  width,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const styles = getTextAreaStyles({ ...props, resize });

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }

    setCurrentValue(newValue);
    onChange?.(event);

    if (minRows || maxRows) {
      adjustHeight();
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = textarea.scrollHeight;
    const minHeight = minRows ? minRows * 20 : 0; // Assuming 20px per row
    const maxHeight = maxRows ? maxRows * 20 : Infinity;

    textarea.style.height = `${Math.min(Math.max(newHeight, minHeight), maxHeight)}px`;
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  return (
    <div className={className} style={styles.container}>
      {label && (
        <label style={styles.label}>
          {label}
          {required && ' *'}
        </label>
      )}
      <textarea
        ref={textareaRef}
        value={currentValue}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          ...styles.textarea,
          ...(isFocused && styles.textareaFocused),
          ...(disabled && styles.textareaDisabled),
          ...(error && styles.textareaError),
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {helperText && (
          <span
            style={{
              ...styles.helperText,
              ...(error && styles.helperTextError),
            }}
          >
            {helperText}
          </span>
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
