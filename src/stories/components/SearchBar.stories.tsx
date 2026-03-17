import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { SearchBar } from '../../components/SearchBar/SearchBar'

const meta: Meta = {
  title: 'Components/Form Fields/Search Bar',
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
    size: { control: 'select', options: ['large', 'small'] },
    placeholder: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    size: 'large',
    placeholder: 'Search',
    fullWidth: false,
  },
  render: (args: any) => <SearchBar {...args} />,
  parameters: { layout: 'padded' },
}

export const Default: Story = {
  name: 'Search Bar',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Large */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Large</div>
        <SearchBar size="large" placeholder="Search" />
        <SearchBar size="large" placeholder="Search" defaultValue="Input Text" />
      </div>

      {/* Small */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Small</div>
        <SearchBar size="small" placeholder="Search" />
        <SearchBar size="small" placeholder="Search" defaultValue="Input Text" />
      </div>

      {/* Full width */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={sectionLabel}>Full width</div>
        <SearchBar size="large" placeholder="Search anything..." fullWidth />
      </div>
    </div>
  ),
}
