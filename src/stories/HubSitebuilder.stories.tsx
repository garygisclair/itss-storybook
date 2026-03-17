import type { Meta, StoryObj } from '@storybook/react-vite'
import { SitebuilderNavigation } from '../components/SitebuilderNavigation/SitebuilderNavigation'
import { SitebuilderNavigationLink } from '../components/SitebuilderNavigationLink/SitebuilderNavigationLink'
import './stories.css'

const meta: Meta = {
  title: 'Hub Page Builder/Components',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/* ── Sitebuilder Navigation ──────────────────────────────────── */

export const NavigationStory: Story = {
  name: 'Sitebuilder Navigation',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">Static</div>
        <SitebuilderNavigation
          siteName="My Site"
          links={[
            { label: 'Home', active: true },
            { label: 'About' },
            { label: 'Events' },
          ]}
        />
      </div>

    </div>
  ),
}

/* ── Sitebuilder Navigation Link ─────────────────────────────── */

export const NavigationLinkStory: Story = {
  name: 'Sitebuilder Navigation Link',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">States</div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div>
            <div className="preview-label">Default</div>
            <SitebuilderNavigationLink label="Home" />
          </div>
          <div>
            <div className="preview-label">Active</div>
            <SitebuilderNavigationLink label="Home" active />
          </div>
          <div>
            <div className="preview-label">With chevron</div>
            <SitebuilderNavigationLink label="Home" showChevron />
          </div>
          <div>
            <div className="preview-label">Active + chevron</div>
            <SitebuilderNavigationLink label="Home" active showChevron />
          </div>
        </div>
      </div>

    </div>
  ),
}

/* ── Sitebuilder Admin Buttons ───────────────────────────────── */


