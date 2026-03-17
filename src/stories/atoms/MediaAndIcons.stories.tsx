import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { Illustration } from '../../components/Illustration/Illustration'
import { EmptyState } from '../../components/EmptyState/EmptyState'
import { FileIcon, getFileIconNames } from '../../components/FileIcon/FileIcon'
import { SourceTypeLogo, getSourceTypeLogoNames } from '../../components/SourceTypeLogo/SourceTypeLogo'
import { ToolLogo, getToolLogoNames } from '../../components/ToolLogo/ToolLogo'

const meta: Meta = {
  title: 'Atoms/Media & Icons',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const IllustrationStory: Story = {
  name: 'Illustration',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['page', 'inbox'] as const).map((type) => (
        <div key={type} className="preview-section">
          <p className="preview-section__title">{type}</p>
          <div className="preview-row">
            {[80, 56, 40].map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Illustration type={type} size={size} />
                <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{size}px</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const EmptyStateStory: Story = {
  name: 'Empty State',
  render: () => (
    <div className="preview-row" style={{ gap: 32 }}>
      {(['upload-file', 'no-records', 'ufo-oops'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <EmptyState type={type} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{type}</span>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <EmptyState type="no-records" message="Custom message here" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>custom message</span>
      </div>
    </div>
  ),
}

export const FileIconStory: Story = {
  name: 'File Icon',
  render: () => {
    const names = getFileIconNames()
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {names.map((name) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div className="preview-row" style={{ gap: 12 }}>
              <FileIcon name={name} size={16} />
              <FileIcon name={name} size={24} />
              <FileIcon name={name} size={32} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{name}</span>
          </div>
        ))}
      </div>
    )
  },
}

export const SourceTypeLogoStory: Story = {
  name: 'Source Type Logo',
  render: () => {
    const names = getSourceTypeLogoNames()
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {names.map((name) => (
          <div key={name} style={{ width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <SourceTypeLogo name={name} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
          </div>
        ))}
      </div>
    )
  },
}

export const ToolLogoStory: Story = {
  name: 'Tool Logo',
  render: () => {
    const names = getToolLogoNames()
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {names.map((name) => (
          <div key={name} style={{ width: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <ToolLogo name={name} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
          </div>
        ))}
      </div>
    )
  },
}
