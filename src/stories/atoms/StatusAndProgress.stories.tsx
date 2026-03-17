import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { Signal } from '../../components/Signal/Signal'
import { Status } from '../../components/Status/Status'
import type { StatusVariant } from '../../components/Status/Status'
import { ProgressDonut } from '../../components/ProgressDonut/ProgressDonut'

const meta: Meta = {
  title: 'Atoms/Status & Progress',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const SignalStory: Story = {
  name: 'Signal',
  render: () => (
    <div className="preview-row">
      {['New', 'Hot', 'Beta', 'Sale', 'Limited', 'Tag'].map((label) => (
        <Signal key={label} label={label} />
      ))}
    </div>
  ),
}

const statusVariants: StatusVariant[] = ['pending', 'canceled', 'draft', 'rejected', 'submitted']

export const StatusStory: Story = {
  name: 'Status',
  render: () => (
    <div className="preview-row">
      {statusVariants.map((v) => (
        <div key={v} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Status status={v} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{v}</span>
        </div>
      ))}
    </div>
  ),
}

export const ProgressDonutStory: Story = {
  name: 'Progress Donut',
  render: () => (
    <div className="preview-row">
      {[0, 25, 50, 75, 100].map((value) => (
        <div key={value} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ProgressDonut progress={value} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{value}%</span>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <ProgressDonut progress={75} size={48} />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>48px</span>
      </div>
    </div>
  ),
}
