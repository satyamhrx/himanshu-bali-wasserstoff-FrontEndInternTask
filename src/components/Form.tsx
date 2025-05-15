import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { AvatarUpload } from './AvatarUpload';
import "./AvatarUpload.css";

export type FormProps = {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  style?: React.CSSProperties;
};

export const Form: React.FC<FormProps> = ({ onSubmit, style = {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = 'Invalid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        onSubmit({ name, email, password });
        setSubmitting(false);
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ ...style }} autoComplete="off">
      <AvatarUpload value={avatar} onChange={setAvatar} />
      <Input
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
        error={errors.name}
        disabled={submitting}
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        error={errors.email}
        disabled={submitting}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"
        error={errors.password}
        disabled={submitting}
      />
      <Button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Get Your Ticket'}
      </Button>
    </form>
  );
}; 