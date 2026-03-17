import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { LookupField } from '../../components/LookupField/LookupField'

const meta: Meta = {
  title: 'Components/Form Fields/Lookup Field',
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

const suggestions = [
  { type: 'default' as const, label: 'Alice Johnson' },
  { type: 'default' as const, label: 'Bob Smith' },
  { type: 'default' as const, label: 'Carol White' },
  { type: 'default' as const, label: 'David Brown' },
]

const sampleChips = [
  { id: '1', label: 'Alice Johnson' },
  { id: '2', label: 'Bob Smith' },
]

export const Default: Story = {
  name: 'Lookup Field',
  render: () => (
    <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Large */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large</div>
        <LookupField title="Inactive" placeholder="Text" size="large" tooltip optional />
        <LookupField title="With chips" size="large" chips={sampleChips} />
        <LookupField title="Error" placeholder="Text" state="error" size="large" helpText="No results found." showHelpText />
        <LookupField title="Error with chips" state="error" size="large" chips={sampleChips} helpText="No results found." showHelpText />
        <LookupField title="Disabled" placeholder="Text" state="disabled" size="large" />
        <LookupField title="Read only with chips" state="readonly" size="large" chips={sampleChips} />
      </div>

      {/* Default */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Default</div>
        <LookupField title="Inactive" placeholder="Text" size="default" tooltip optional />
        <LookupField title="With chips" size="default" chips={sampleChips} />
        <LookupField title="Error" placeholder="Text" state="error" size="default" helpText="No results found." showHelpText />
        <LookupField title="Disabled" placeholder="Text" state="disabled" size="default" />
      </div>

      {/* With suggestions menu */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>With suggestions menu</div>
        <LookupField title="Type to search" placeholder="Search..." size="large" suggestions={suggestions} />
      </div>
    </div>
  ),
}
