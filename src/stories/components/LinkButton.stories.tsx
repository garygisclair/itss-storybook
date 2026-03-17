import type { Meta, StoryObj } from '@storybook/react-vite'
import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Icon } from '../../components/Icon/Icon'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Buttons/Link Button',
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
    level: { control: 'select', options: ['strong', 'subtle-primary', 'subtle-secondary', 'disabled', 'inverse', 'subtle-inverse'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
  },
  args: {
    level: 'strong',
    size: 'large',
  },
  render: (args: any) => <LinkButton {...args} />,
  parameters: { layout: 'centered' },
}

/* ── Showcase ────────────────────────────────────────────────── */

const lightLevels = ['strong', 'subtle-primary', 'subtle-secondary', 'disabled'] as const
const inverseLevels = ['inverse', 'subtle-inverse'] as const
const sizes = ['large', 'medium', 'small'] as const

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Light levels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontWeight: 600, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
          Light levels
        </div>
        {lightLevels.map((level) => (
          <div key={level} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: '#666', fontFamily: 'Inter, sans-serif' }}>{level}</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {sizes.map((sz) => (
                <LinkButton key={sz} level={level} size={sz}>Link text</LinkButton>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Inverse levels */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          background: 'var(--bg-strong, #191919)',
          padding: 24,
          borderRadius: 8,
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 14, fontFamily: 'Inter, sans-serif', color: '#fff' }}>
          Inverse levels
        </div>
        {inverseLevels.map((level) => (
          <div key={level} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 12, color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{level}</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {sizes.map((sz) => (
                <LinkButton key={sz} level={level} size={sz}>Link text</LinkButton>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* With icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontWeight: 600, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
          With icons
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <LinkButton level="strong" size="medium" leadingIcon={<Icon name="chevron-left" size={16} />}>
            Leading icon
          </LinkButton>
          <LinkButton level="strong" size="medium" trailingIcon={<Icon name="chevron-right" size={16} />}>
            Trailing icon
          </LinkButton>
          <LinkButton
            level="strong"
            size="medium"
            leadingIcon={<Icon name="chevron-left" size={16} />}
            trailingIcon={<Icon name="chevron-right" size={16} />}
          >
            Both icons
          </LinkButton>
          <LinkButton level="subtle-primary" size="medium" trailingIcon={<Icon name="chevron-right" size={16} />}>
            Subtle with trailing
          </LinkButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
