import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactButton } from '../../components/ContactButton/ContactButton'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Buttons/Contact Button',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/* ── Showcase ────────────────────────────────────────────────── */

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: 48 }}>
      <ContactButton name="Email" email="designer@ebay.com" />
      <ContactButton name="Manager" email="manager@ebay.com" />
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
