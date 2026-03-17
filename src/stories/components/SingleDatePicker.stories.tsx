import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { SingleDatePicker } from '../../components/SingleDatePicker/SingleDatePicker'

const meta: Meta = {
  title: 'Components/Form Fields/Single Date Picker',
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

export const Default: Story = {
  name: 'Single Date Picker',
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Day view (uncontrolled)</div>
        <SingleDatePicker />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>With selected date</div>
        <SingleDatePicker defaultValue={new Date(2025, 8, 3)} />
      </div>
    </div>
  ),
}
