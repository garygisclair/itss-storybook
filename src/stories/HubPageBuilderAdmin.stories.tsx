import type { Meta, StoryObj } from '@storybook/react-vite'
import { SitebuilderAdminButtons } from '../components/SitebuilderAdminButtons/SitebuilderAdminButtons'
import { SitebuilderAdminAdditionalButtons } from '../components/SitebuilderAdminAdditionalButtons/SitebuilderAdminAdditionalButtons'
import './stories.css'

const meta: Meta = {
  title: 'Hub Page Builder/Admin',
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj

export const AdminButtonsStory: Story = {
  name: 'Sitebuilder Admin Buttons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <div className="preview-section__title">Feed Setup</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminButtons primaryLabel="Feed Setup" primaryIcon="edit" />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Calendar Setup</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminButtons primaryLabel="Calendar Setup" primaryIcon="edit" />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Edit Page</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminButtons primaryLabel="Edit Page" primaryIcon="edit" />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Custom secondary</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminButtons primaryLabel="Edit Page" primaryIcon="edit" secondaryLabel="View Site" />
        </div>
      </div>
    </div>
  ),
}

export const AdminAdditionalButtonsStory: Story = {
  name: 'Sitebuilder Admin Additional Buttons',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <div className="preview-section__title">Default</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminAdditionalButtons variant="default" />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Followers</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminAdditionalButtons variant="followers" followerCount={300} />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Member</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminAdditionalButtons variant="member" followerCount={300} />
        </div>
      </div>
      <div className="preview-section">
        <div className="preview-section__title">Member Admin</div>
        <div style={{ padding: 24, borderRadius: 12, background: 'var(--bg-accent-subtle)' }}>
          <SitebuilderAdminAdditionalButtons variant="memberAdmin" followerCount={300} />
        </div>
      </div>
    </div>
  ),
}
