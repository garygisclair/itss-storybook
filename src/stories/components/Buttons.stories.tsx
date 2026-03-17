import type { Meta, StoryObj } from '@storybook/react-vite'
import { CtaButton } from '../../components/Button/CtaButton'
import '../stories.css'

const meta = {
  title: 'Components/Buttons/CTA Button',
  component: CtaButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'borderless'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Button size',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state — shows spinner overlay',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CtaButton>

export default meta
type Story = StoryObj<typeof meta>

/* ── Playground ──────────────────────────────────────────────── */

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button title',
    disabled: false,
    loading: false,
  },
}

/* ── Showcase ────────────────────────────────────────────────── */

const variants = ['primary', 'secondary', 'tertiary', 'borderless'] as const
const sizes = ['large', 'medium', 'small'] as const

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(4, 1fr)', gap: 16, alignItems: 'center' }}>
        <div />
        {variants.map((v) => (
          <div key={v} style={{ fontWeight: 600, fontSize: 13, textTransform: 'capitalize', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            {v}
          </div>
        ))}
      </div>

      {/* Rows per size */}
      {sizes.map((s) => (
        <div key={s} style={{ display: 'grid', gridTemplateColumns: '100px repeat(4, 1fr)', gap: 16, alignItems: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: 13, textTransform: 'capitalize', fontFamily: 'Inter, sans-serif' }}>
            {s}
          </div>
          {variants.map((v) => (
            <div key={v} style={{ display: 'flex', justifyContent: 'center' }}>
              <CtaButton variant={v} size={s} label="Button title" />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

/* ── Loading ─────────────────────────────────────────────────── */

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      {variants.map((v) => (
        <CtaButton key={v} variant={v} size="large" label="Button title" loading />
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}

/* ── Disabled ────────────────────────────────────────────────── */

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      {variants.map((v) => (
        <CtaButton key={v} variant={v} size="large" label="Button title" disabled />
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    controls: { disable: true },
  },
}
