import type { Meta, StoryObj } from '@storybook/react-vite'
import { HubHeader } from '../components/HubHeader/HubHeader'
import { SidebarMenuItem } from '../components/SidebarMenuItem/SidebarMenuItem'
import { ToolLogo } from '../components/ToolLogo/ToolLogo'
import { NavBarAvatar } from '../components/NavBarAvatar/NavBarAvatar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { SitebuilderNavigation } from '../components/SitebuilderNavigation/SitebuilderNavigation'
import { EmptyState } from '../components/EmptyState/EmptyState'
import './stories.css'

const meta: Meta = {
  title: 'Hub/Components',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/* ── Header ──────────────────────────────────────────────────── */

export const Header: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">Mobile (375px)</div>
        <div style={{ width: 375, border: '1px solid var(--border-default)', borderRadius: 8, overflow: 'hidden' }}>
          <HubHeader avatarSrc="https://i.pravatar.cc/80" avatarProgress={50} notificationCount={1} />
        </div>
      </div>

      <div className="preview-section">
        <div className="preview-section__title">Tablet (768px)</div>
        <div style={{ width: 768, border: '1px solid var(--border-default)', borderRadius: 8, overflow: 'hidden' }}>
          <HubHeader avatarSrc="https://i.pravatar.cc/80" avatarProgress={50} notificationCount={1} />
        </div>
      </div>

      <div className="preview-section">
        <div className="preview-section__title">Desktop (1200px)</div>
        <div style={{ width: 1200, border: '1px solid var(--border-default)', borderRadius: 8, overflow: 'hidden' }}>
          <HubHeader avatarSrc="https://i.pravatar.cc/80" avatarProgress={50} notificationCount={1} />
        </div>
      </div>
    </div>
  ),
}

/* ── Sidebar Menu Items ──────────────────────────────────────── */

export const SidebarMenuItems: Story = {
  name: 'Sidebar Menu Items',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">Site type</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div className="preview-label">Desktop Collapsed</div>
            <SidebarMenuItem layout="collapsed" type="site" />
          </div>
          <div>
            <div className="preview-label">Desktop Expanded Default</div>
            <SidebarMenuItem layout="expanded" type="site" name="My Sites" />
          </div>
          <div>
            <div className="preview-label">Desktop Expanded Hover</div>
            <SidebarMenuItem layout="expanded" type="site" name="My Sites" forceHover />
          </div>
          <div>
            <div className="preview-label">Desktop Expanded With Chevron</div>
            <SidebarMenuItem layout="expanded" type="site" name="My Sites" showChevron />
          </div>
          <div>
            <div className="preview-label">Mobile Default</div>
            <SidebarMenuItem layout="mobile" type="site" name="My Sites" />
          </div>
        </div>
      </div>

      <div className="preview-section">
        <div className="preview-section__title">Tool type</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div className="preview-label">Desktop Expanded Default</div>
            <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} />
          </div>
          <div>
            <div className="preview-label">Desktop Expanded Hover</div>
            <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} forceHover />
          </div>
          <div>
            <div className="preview-label">Desktop Expanded With Chevron</div>
            <SidebarMenuItem layout="expanded" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} showChevron />
          </div>
          <div>
            <div className="preview-label">Mobile Default</div>
            <SidebarMenuItem layout="mobile" type="tool" name="Selling Manager" toolIcon={<ToolLogo name="jira" size={20} />} />
          </div>
        </div>
      </div>
    </div>
  ),
}

/* ── Nav Bar Avatar ──────────────────────────────────────────── */

const avatarSrc = 'https://i.pravatar.cc/80'

export const NavBarAvatarStory: Story = {
  name: 'Nav Bar Avatar',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">Complete (no ring)</div>
        <NavBarAvatar src={avatarSrc} alt="Example user" />
      </div>

      <div className="preview-section">
        <div className="preview-section__title">0% progress</div>
        <NavBarAvatar src={avatarSrc} alt="Example user" progress={0} />
      </div>

      <div className="preview-section">
        <div className="preview-section__title">50% progress</div>
        <NavBarAvatar src={avatarSrc} alt="Example user" progress={50} />
      </div>

      <div className="preview-section">
        <div className="preview-section__title">All states</div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <NavBarAvatar src={avatarSrc} alt="Example user" progress={0} />
          <NavBarAvatar src={avatarSrc} alt="Example user" progress={25} />
          <NavBarAvatar src={avatarSrc} alt="Example user" progress={50} />
          <NavBarAvatar src={avatarSrc} alt="Example user" progress={75} />
          <NavBarAvatar src={avatarSrc} alt="Example user" progress={100} />
          <NavBarAvatar src={avatarSrc} alt="Example user" />
        </div>
      </div>
    </div>
  ),
}

/* ── Sidebar ─────────────────────────────────────────────────── */

export const SidebarStory: Story = {
  name: 'Sidebar',
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div className="preview-section">
        <div className="preview-section__title">Expanded</div>
        <Sidebar layout="expanded" />
      </div>

      <div className="preview-section">
        <div className="preview-section__title">Collapsed</div>
        <Sidebar layout="collapsed" />
      </div>

      <div className="preview-section">
        <div className="preview-section__title">Interactive</div>
        <div style={{ position: 'relative', height: 600, width: 240 }}>
          <Sidebar layout="interactive" />
        </div>
      </div>
    </div>
  ),
}

/* ── Overview ────────────────────────────────────────────────── */

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, gap: 16, textAlign: 'center' }}>
      <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>Coming Soon</span>
      <span style={{ fontSize: 14, color: 'var(--fg-secondary)', lineHeight: '20px', maxWidth: 320 }}>Hub components overview is in progress.</span>
    </div>
  ),
}

/* ── Scaffolding ─────────────────────────────────────────────── */

