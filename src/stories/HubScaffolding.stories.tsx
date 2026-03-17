import type { Meta, StoryObj } from '@storybook/react-vite'
import { HubHeader } from '../components/HubHeader/HubHeader'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { SitebuilderNavigation } from '../components/SitebuilderNavigation/SitebuilderNavigation'
import { EmptyState } from '../components/EmptyState/EmptyState'
import './stories.css'

const meta: Meta = {
  title: 'Hub/Scaffolding',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
        <HubHeader
          avatarSrc="https://i.pravatar.cc/80"
          avatarProgress={50}
          notificationCount={1}
        />
        <SitebuilderNavigation
          siteName="Company"
          links={[
            { label: 'Home', active: true },
            { label: 'About' },
            { label: 'Events' },
            { label: 'Contact' },
          ]}
        />
      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Sidebar layout="interactive" />
        <div style={{ width: 64, flexShrink: 0 }} />
        <main className="hub-grid" style={{ flex: 1 }}>
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 0' }}>
            <EmptyState type="no-records" />
          </div>
        </main>
      </div>
    </div>
  ),
}
