import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { Avatar } from '../../components/Avatar/Avatar'
import { Badge } from '../../components/Badge/Badge'
import { Chip } from '../../components/Chip/Chip'
import { Spinner } from '../../components/Spinner/Spinner'

const meta: Meta = {
  title: 'Atoms/Identity',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const AvatarStory: Story = {
  name: 'Avatar',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <p className="preview-section__title">Normal</p>
        <div className="preview-row">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="no-photo" size="normal" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>No photo</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="initials" size="normal" initials="NN" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Initials</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="photo" size="normal" src="https://i.pravatar.cc/80" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Photo</span>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <p className="preview-section__title">Small</p>
        <div className="preview-row">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="no-photo" size="small" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>No photo</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="initials" size="small" initials="NN" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Initials</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Avatar type="photo" size="small" src="https://i.pravatar.cc/80" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Photo</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const BadgeStory: Story = {
  name: 'Badge',
  render: () => (
    <div className="preview-row">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge count={9} size="single" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Single</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge count={42} size="double" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Double</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Badge count="99+" size="max" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Max</span>
      </div>
    </div>
  ),
}

export const ChipStory: Story = {
  name: 'Chip',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <p className="preview-section__title">Avatar type</p>
        <div className="preview-row">
          <Chip type="avatar" label="Photo + removable" avatarSrc="https://i.pravatar.cc/80" removable />
          <Chip type="avatar" label="Photo + not removable" avatarSrc="https://i.pravatar.cc/80" removable={false} />
          <Chip type="avatar" label="Initials" avatarInitials="AB" removable />
        </div>
      </div>

      <div className="preview-section">
        <p className="preview-section__title">Default type</p>
        <div className="preview-row">
          <Chip type="default" label="Default" removable />
          <Chip type="default" label="With icon" showIcon removable />
          <Chip type="default" label="Not removable" removable={false} />
        </div>
      </div>
    </div>
  ),
}

export const SpinnerStory: Story = {
  name: 'Spinner',
  render: () => (
    <div className="preview-row">
      {([16, 20, 24] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Spinner size={size} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
}
