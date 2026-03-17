import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { InputField } from '../../components/InputField/InputField'
import { Icon } from '../../components/Icon/Icon'

const meta: Meta = {
  title: 'Components/Form Fields/Input Field',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const sectionLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--fg-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
}

export const Playground: Story = {
  name: 'Playground',
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['large', 'small'] },
    state: { control: 'select', options: ['default', 'error', 'disabled', 'readonly'] },
    tooltip: { control: 'boolean' },
    optional: { control: 'boolean' },
    showHelpText: { control: 'boolean' },
    helpText: { control: 'text' },
    showCount: { control: 'boolean' },
    maxLength: { control: 'number' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
  args: {
    title: 'Field Title',
    placeholder: 'Placeholder text',
    size: 'large',
    state: 'default',
    tooltip: false,
    optional: false,
    showHelpText: false,
    helpText: 'Helper text',
    showCount: false,
    maxLength: 100,
    prefix: '',
    suffix: '',
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400 }}>
      <InputField {...args} />
    </div>
  ),
  parameters: { layout: 'padded' },
}

export const Default: Story = {
  name: 'Input Field',
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      {/* Large column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large</div>
        <InputField title="Enabled" placeholder="Placeholder text" size="large" tooltip optional />
        <InputField title="With value" subtitle="Field subtitle can go here" placeholder="Placeholder text" defaultValue="User input value" size="large" />
        <InputField title="With icons" placeholder="Search…" size="large" leadingIcon={<Icon name="search" size={16} />} trailingIcon={<Icon name="arrow-right" size={16} />} />
        <InputField title="With prefix / suffix" placeholder="0.00" size="large" prefix="$" suffix="USD" />
        <InputField title="Error" placeholder="Placeholder text" state="error" size="large" helpText="This field has an error." showHelpText showCount maxLength={100} />
        <InputField title="Disabled" placeholder="Placeholder text" state="disabled" size="large" />
        <InputField title="Read only" defaultValue="Read only value" state="readonly" size="large" helpText="Read-only" showHelpText />
      </div>

      {/* Small column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Small (default)</div>
        <InputField title="Enabled" placeholder="Placeholder text" size="small" />
        <InputField title="With value" placeholder="Placeholder text" defaultValue="User input value" size="small" />
        <InputField title="Error" placeholder="Placeholder text" state="error" size="small" helpText="This field has an error." showHelpText showCount maxLength={100} />
        <InputField title="Disabled" placeholder="Placeholder text" state="disabled" size="small" />
      </div>
    </div>
  ),
}
