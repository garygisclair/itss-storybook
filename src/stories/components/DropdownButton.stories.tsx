import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropdownButton } from '../../components/DropdownButton/DropdownButton'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Buttons/Dropdown Button',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/* ── Playground ─────────────────────────────────────────────── */

export const Playground: Story = {
  name: 'Playground',
  argTypes: {
    size: { control: 'select', options: ['large', 'small'] },
    border: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'text' },
    secondaryText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'large',
    border: true,
    label: 'Label',
    value: '',
    secondaryText: '',
    disabled: false,
  },
  render: (args: any) => <DropdownButton {...args} />,
  parameters: { layout: 'centered' },
}

/* ── Showcase ────────────────────────────────────────────────── */

const rowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}

const sectionLabelStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 13,
  fontFamily: 'Inter, sans-serif',
  marginBottom: 8,
}

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Large — bordered */}
      <div>
        <div style={sectionLabelStyle}>Large — bordered</div>
        <div style={rowStyle}>
          <DropdownButton size="large" border label="Label" />
          <DropdownButton size="large" border label="Label" value="January" />
          <DropdownButton size="large" border label="Label" secondaryText="3 left" />
          <DropdownButton size="large" border label="Label" disabled />
        </div>
      </div>

      {/* Small — bordered */}
      <div>
        <div style={sectionLabelStyle}>Small — bordered</div>
        <div style={rowStyle}>
          <DropdownButton size="small" border label="Label" />
          <DropdownButton size="small" border label="Label" value="2024" />
          <DropdownButton size="small" border label="Label" disabled />
        </div>
      </div>

      {/* Large — borderless */}
      <div>
        <div style={sectionLabelStyle}>Large — borderless</div>
        <div style={rowStyle}>
          <DropdownButton size="large" border={false} label="Label" />
          <DropdownButton size="large" border={false} label="Label" value="January" />
          <DropdownButton size="large" border={false} label="Label" disabled />
        </div>
      </div>

      {/* Small — borderless */}
      <div>
        <div style={sectionLabelStyle}>Small — borderless</div>
        <div style={rowStyle}>
          <DropdownButton size="small" border={false} label="Label" />
          <DropdownButton size="small" border={false} label="Label" value="2024" />
          <DropdownButton size="small" border={false} label="Label" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
