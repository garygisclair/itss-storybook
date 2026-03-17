import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconButton } from '../../components/IconButton/IconButton'
import { Icon } from '../../components/Icon/Icon'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Buttons/Icon Button',
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
    style: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'borderless'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    style: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
  },
  render: (args: any) => (
    <IconButton
      {...args}
      icon={<Icon name="edit" size={16} />}
      aria-label="Edit"
    />
  ),
  parameters: { layout: 'centered' },
}

/* ── Showcase ────────────────────────────────────────────────── */

const styles = ['primary', 'secondary', 'tertiary', 'borderless'] as const
const sizes = ['large', 'medium', 'small'] as const

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {styles.map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontWeight: 600, fontSize: 14, textTransform: 'capitalize', fontFamily: 'Inter, sans-serif' }}>
            {s}
          </div>

          {/* Default */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: '#666', fontFamily: 'Inter, sans-serif' }}>Default</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {sizes.map((sz) => (
                <IconButton key={sz} style={s} size={sz} icon={<Icon name="edit" size={16} />} aria-label="Edit" />
              ))}
            </div>
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: '#666', fontFamily: 'Inter, sans-serif' }}>Disabled</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {sizes.map((sz) => (
                <IconButton key={sz} style={s} size={sz} icon={<Icon name="edit" size={16} />} aria-label="Edit" disabled />
              ))}
            </div>
          </div>

          {/* Loading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: '#666', fontFamily: 'Inter, sans-serif' }}>Loading</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {sizes.map((sz) => (
                <IconButton key={sz} style={s} size={sz} icon={<Icon name="edit" size={16} />} aria-label="Edit" loading />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
