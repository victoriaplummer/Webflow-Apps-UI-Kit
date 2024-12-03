import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, ComponentType } from 'react';

import { Breadcrumb } from '../../components/navigation/Breadcrumb';
import { TextInput } from '../../components/inputs/TextInput';
import { User, Mail, Phone } from 'react-feather';
import { Container } from '../../components/primitives/Container';
import { colors } from '../../components/foundations/colors';

const meta: Meta = {
  title: 'Examples/Settings Page',
  component: Container,
  subcomponents: {
    Breadcrumb: Breadcrumb as ComponentType<unknown>,
    TextInput: TextInput as ComponentType<unknown>,
  },
  parameters: {
    layout: 'padded',
    docs: {
      disable: false,
      components: {
        Breadcrumb,
        TextInput,
      },
    },
    previewTabs: {
      canvas: { hidden: false },
      docs: { hidden: false },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SettingsPage: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
    });

    const breadcrumbItems = [
      { id: '1', label: 'Dashboard', href: '/' },
      { id: '2', label: 'Settings', href: '/settings' },
      { id: '3', label: 'Profile', href: '/settings/profile' },
    ];

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <Container maxWidth="2xl" background={colors.background.background1}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Breadcrumb items={breadcrumbItems} separator="/" size="small" />

          <div>
            <h1>Profile Settings</h1>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <TextInput
                label="Full Name"
                value={formData.name}
                onChange={handleChange('name')}
                icon={<User size={16} />}
                fullWidth
              />

              <TextInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                icon={<Mail size={16} />}
                fullWidth
              />

              <TextInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                icon={<Phone size={16} />}
                fullWidth
              />
            </div>
          </div>
        </div>
      </Container>
    );
  },
};
