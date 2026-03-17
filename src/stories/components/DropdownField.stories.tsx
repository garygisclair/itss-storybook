import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { DropdownField } from '../../components/DropdownField/DropdownField'

const meta: Meta = {
  title: 'Components/Form Fields/Dropdown Field',
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

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
]

export const Default: Story = {
  name: 'Dropdown Field',
  render: () => (
    <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Large — single select */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large — single select</div>
        <DropdownField title="Enabled" size="large" tooltip optional options={options} />
        <DropdownField title="With value" size="large" defaultValue="apple" options={options} />
        <DropdownField title="With color dot" size="large" defaultValue="cherry" colorDot options={options} />
        <DropdownField title="Error" size="large" state="error" options={options} helpText="Please select a valid option." showHelpText />
        <DropdownField title="Disabled" size="large" state="disabled" defaultValue="banana" options={options} />
        <DropdownField title="Read only" size="large" state="readonly" defaultValue="cherry" options={options} />
      </div>

      {/* Large — multi select (chip) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large — multi select (chip)</div>
        <DropdownField title="Multi-select (empty)" size="large" multiSelect options={options} />
        <DropdownField title="Multi-select (with chips)" size="large" multiSelect defaultValues={['apple', 'cherry']} options={options} />
        <DropdownField title="Multi-select disabled" size="large" multiSelect state="disabled" defaultValues={['banana']} options={options} />
      </div>

      {/* Small (default) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Small (default)</div>
        <DropdownField title="Enabled" size="small" tooltip optional options={options} />
        <DropdownField title="With value" size="small" defaultValue="apple" options={options} />
        <DropdownField title="Error" size="small" state="error" options={options} helpText="Please select a valid option." showHelpText />
        <DropdownField title="Disabled" size="small" state="disabled" options={options} />
      </div>
    </div>
  ),
}
