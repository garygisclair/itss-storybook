import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { DateField } from '../../components/DateField/DateField'

const meta: Meta = {
  title: 'Components/Form Fields/Date Field',
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
    size: { control: 'select', options: ['large', 'small'] },
    state: { control: 'select', options: ['default', 'error', 'disabled', 'readonly'] },
    tooltip: { control: 'boolean' },
    optional: { control: 'boolean' },
    showHelpText: { control: 'boolean' },
    helpText: { control: 'text' },
  },
  args: {
    title: 'Date',
    size: 'large',
    state: 'default',
    tooltip: false,
    optional: false,
    showHelpText: false,
    helpText: 'Select a date',
  },
  render: (args: any) => (
    <div style={{ maxWidth: 343 }}>
      <DateField {...args} />
    </div>
  ),
  parameters: { layout: 'padded' },
}

export const Default: Story = {
  name: 'Date Field',
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      {/* Large column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large</div>
        <DateField title="Inactive" size="large" tooltip optional />
        <DateField title="With value" size="large" defaultValue={new Date(2025, 8, 3)} tooltip optional />
        <DateField title="Error" size="large" state="error" helpText="Please enter a valid date." showHelpText tooltip optional />
        <DateField title="Error + value" size="large" state="error" defaultValue={new Date(2025, 8, 3)} helpText="Date is outside allowed range." showHelpText tooltip optional />
        <DateField title="Disabled" size="large" state="disabled" tooltip optional />
        <DateField title="Read only" size="large" state="readonly" defaultValue={new Date(2025, 8, 3)} tooltip optional />
      </div>

      {/* Small column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Small (default)</div>
        <DateField title="Inactive" size="small" tooltip optional />
        <DateField title="With value" size="small" defaultValue={new Date(2025, 8, 3)} tooltip optional />
        <DateField title="Error" size="small" state="error" helpText="Please enter a valid date." showHelpText tooltip optional />
        <DateField title="Error + value" size="small" state="error" defaultValue={new Date(2025, 8, 3)} helpText="Date is outside allowed range." showHelpText tooltip optional />
        <DateField title="Disabled" size="small" state="disabled" tooltip optional />
        <DateField title="Read only" size="small" state="readonly" defaultValue={new Date(2025, 8, 3)} tooltip optional />
      </div>
    </div>
  ),
}
