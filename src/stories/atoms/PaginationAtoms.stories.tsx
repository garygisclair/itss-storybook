import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { PaginationDots } from '../../components/PaginationDots/PaginationDots'
import { PaginationDot } from '../../components/PaginationDot/PaginationDot'
import { PaginationPageOverflow } from '../../components/PaginationPageOverflow/PaginationPageOverflow'
import { PaginationPageTab } from '../../components/PaginationPageTab/PaginationPageTab'

const meta: Meta = {
  title: 'Atoms/Pagination Atoms',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

/* --- Helper components for interactive stories --- */

function InteractiveDotsGroup() {
  const [selected, setSelected] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <PaginationDots count={6} selectedIndex={selected} onSelect={setSelected} />
      <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Interactive (selected: {selected})</span>
    </div>
  )
}

function InteractiveDotRow() {
  const [selected, setSelected] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div className="preview-row" style={{ gap: 8 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <PaginationDot key={i} selected={i === selected} onClick={() => setSelected(i)} />
        ))}
      </div>
      <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Interactive (selected: {selected})</span>
    </div>
  )
}

function InteractiveTabRow() {
  const [active, setActive] = useState(1)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div className="preview-row" style={{ gap: 0 }}>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationPageTab key={page} page={page} active={page === active} onClick={() => setActive(page)} />
        ))}
      </div>
      <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Interactive (active: {active})</span>
    </div>
  )
}

/* --- Stories --- */

export const PaginationDotsStory: Story = {
  name: 'Pagination Dots',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <PaginationDots count={6} selectedIndex={0} />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>Static (index 0)</span>
      </div>
      <InteractiveDotsGroup />
    </div>
  ),
}

export const PaginationDotStory: Story = {
  name: 'Pagination Dot',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <p className="preview-section__title">States</p>
        <div className="preview-row" style={{ gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <PaginationDot selected={false} />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>unselected</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <PaginationDot selected />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>selected</span>
          </div>
        </div>
      </div>
      <InteractiveDotRow />
    </div>
  ),
}

export const PaginationPageOverflowStory: Story = {
  name: 'Pagination Page Overflow',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <p className="preview-section__title">Default</p>
        <PaginationPageOverflow />
      </div>

      <div className="preview-section">
        <p className="preview-section__title">In context</p>
        <div className="preview-row" style={{ gap: 0 }}>
          <PaginationPageTab page={1} active />
          <PaginationPageTab page={2} />
          <PaginationPageOverflow />
          <PaginationPageTab page={8} />
          <PaginationPageTab page={9} />
        </div>
      </div>
    </div>
  ),
}

export const PaginationPageTabStory: Story = {
  name: 'Pagination Page Tab',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <p className="preview-section__title">Active state</p>
        <div className="preview-row" style={{ gap: 0 }}>
          {[1, 2, 3, 4, 5].map((page) => (
            <PaginationPageTab key={page} page={page} active={page === 3} />
          ))}
        </div>
      </div>
      <InteractiveTabRow />
    </div>
  ),
}
