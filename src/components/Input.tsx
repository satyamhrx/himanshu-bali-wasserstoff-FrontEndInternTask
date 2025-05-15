import React from 'react';

export type InputProps = {
  label?: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
};

const inputStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  } as React.CSSProperties,
  label: {
    marginBottom: '6px',
    fontWeight: 500,
    color: '#fff',
    fontSize: '0.95rem',
  } as React.CSSProperties,
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1.5px solid #A259FF',
    fontSize: '1rem',
    outline: 'none',
    background: '#1a1333',
    color: '#fff',
    transition: 'border 0.2s',
  } as React.CSSProperties,
  error: {
    color: '#ff4d4f',
    fontSize: '0.85rem',
    marginTop: '4px',
  } as React.CSSProperties,
  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  } as React.CSSProperties,
};

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  style = {},
}) => {
  return (
    <div style={inputStyles.wrapper}>
      {label && <label style={inputStyles.label}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          ...inputStyles.input,
          ...(disabled ? inputStyles.disabled : {}),
          ...style,
        }}
      />
      {error && <span style={inputStyles.error}>{error}</span>}
    </div>
  );
}; 