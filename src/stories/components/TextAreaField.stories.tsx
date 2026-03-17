import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { TextAreaField } from '../../components/TextAreaField/TextAreaField'

const meta: Meta = {
  title: 'Components/Form Fields/Text Area Field',
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
    resizable: { control: 'boolean' },
    showHelpText: { control: 'boolean' },
    helpText: { control: 'text' },
    showCount: { control: 'boolean' },
    maxLength: { control: 'number' },
  },
  args: {
    title: 'Field Title',
    placeholder: 'Text',
    size: 'large',
    state: 'default',
    tooltip: false,
    optional: false,
    resizable: true,
    showHelpText: false,
    helpText: 'Helper text',
    showCount: false,
    maxLength: 200,
  },
  render: (args: any) => (
    <div style={{ maxWidth: 400 }}>
      <TextAreaField {...args} />
    </div>
  ),
  parameters: { layout: 'padded' },
}

export const Default: Story = {
  name: 'Text Area Field',
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      {/* Large column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large</div>
        <TextAreaField title="Enabled" placeholder="Text" size="large" tooltip optional />
        <TextAreaField title="With value (resizable)" defaultValue="User input value" size="large" />
        <TextAreaField title="No resize handle" placeholder="Text" size="large" resizable={false} />
        <TextAreaField title="Error" placeholder="Text" state="error" size="large" helpText="This field has an error." showHelpText showCount maxLength={100} />
        <TextAreaField title="Disabled" placeholder="Text" state="disabled" size="large" />
        <TextAreaField title="Read only" defaultValue="Read only value" state="readonly" size="large" helpText="Read-only" showHelpText />
      </div>

      {/* Small column */}
      <div style={{ width: 343, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Small (default)</div>
        <TextAreaField title="Enabled" placeholder="Text" size="small" tooltip optional />
        <TextAreaField title="With value" defaultValue="User input value" size="small" />
        <TextAreaField title="Error" placeholder="Text" state="error" size="small" helpText="This field has an error." showHelpText showCount maxLength={100} />
        <TextAreaField title="Disabled" placeholder="Text" state="disabled" size="small" />
      </div>
    </div>
  ),
}
