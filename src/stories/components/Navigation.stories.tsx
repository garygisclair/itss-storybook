import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { HorizontalTabGroup } from '../../components/HorizontalTabGroup/HorizontalTabGroup'
import { VerticalTabGroup } from '../../components/VerticalTabGroup/VerticalTabGroup'
import { Tab } from '../../components/Tab/Tab'
import { VerticalTab } from '../../components/VerticalTab/VerticalTab'
import { SegmentedButtons } from '../../components/SegmentedButtons/SegmentedButtons'
import { SegmentedButton } from '../../components/SegmentedButton/SegmentedButton'
import { Pagination } from '../../components/Pagination/Pagination'
import { Icon } from '../../components/Icon/Icon'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Navigation',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/* ── Shared styles ─────────────────────────────────────────────── */

const sectionLabel: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 13,
  fontFamily: 'Inter, sans-serif',
  marginBottom: 8,
}

const row: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  flexWrap: 'wrap',
}

const TABS = [
  { label: 'Overview' },
  { label: 'Activity' },
  { label: 'Settings' },
  { label: 'Disabled', disabled: true },
  { label: 'Reports' },
]

/* ── Horizontal Tab Group ──────────────────────────────────────── */

function HorizontalTabGroupDemo() {
  const [idx1, setIdx1] = useState(0)
  const [idx2, setIdx2] = useState(0)
  const [idx3, setIdx3] = useState(0)
  const [idx4, setIdx4] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={sectionLabel}>Medium</div>
        <HorizontalTabGroup tabs={TABS} selectedIndex={idx1} size="medium" onTabChange={setIdx1} />
      </div>
      <div>
        <div style={sectionLabel}>Medium + divider</div>
        <HorizontalTabGroup tabs={TABS} selectedIndex={idx2} size="medium" divider onTabChange={setIdx2} />
      </div>
      <div>
        <div style={sectionLabel}>Large</div>
        <HorizontalTabGroup tabs={TABS} selectedIndex={idx3} size="large" onTabChange={setIdx3} />
      </div>
      <div>
        <div style={sectionLabel}>Large + divider</div>
        <HorizontalTabGroup tabs={TABS} selectedIndex={idx4} size="large" divider onTabChange={setIdx4} />
      </div>
    </div>
  )
}

export const HorizontalTabGroupStory: Story = {
  name: 'Horizontal Tab Group',
  render: () => <HorizontalTabGroupDemo />,
  parameters: { controls: { disable: true } },
}

/* ── Vertical Tab Group ────────────────────────────────────────── */

function VerticalTabGroupDemo() {
  const [idx1, setIdx1] = useState(0)
  const [idx2, setIdx2] = useState(0)

  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <div>
        <div style={sectionLabel}>Without divider</div>
        <VerticalTabGroup tabs={TABS} selectedIndex={idx1} onTabChange={setIdx1} />
      </div>
      <div>
        <div style={sectionLabel}>With divider</div>
        <VerticalTabGroup tabs={TABS} selectedIndex={idx2} divider onTabChange={setIdx2} />
      </div>
    </div>
  )
}

export const VerticalTabGroupStory: Story = {
  name: 'Vertical Tab Group',
  render: () => <VerticalTabGroupDemo />,
  parameters: { controls: { disable: true } },
}

/* ── Tab (static) ──────────────────────────────────────────────── */

export const TabStory: Story = {
  name: 'Tab',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={sectionLabel}>Medium tab bar</div>
        <div style={row}>
          <Tab label="Overview" selected size="medium" />
          <Tab label="Activity" size="medium" />
          <Tab label="Settings" size="medium" />
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Large tab bar</div>
        <div style={row}>
          <Tab label="Overview" selected size="large" />
          <Tab label="Activity" size="large" />
          <Tab label="Settings" size="large" />
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Individual states</div>
        <div style={row}>
          <Tab label="Selected" selected />
          <Tab label="Unselected" />
          <Tab label="Disabled Selected" selected disabled />
          <Tab label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Vertical Tab (static) ─────────────────────────────────────── */

export const VerticalTabStory: Story = {
  name: 'Vertical Tab',
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <div>
        <div style={sectionLabel}>Column with border</div>
        <div style={{ borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
          <VerticalTab label="Selected" selected />
          <VerticalTab label="Unselected" />
          <VerticalTab label="Disabled" disabled />
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Individual states</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <VerticalTab label="Selected" selected />
          <VerticalTab label="Unselected" />
          <VerticalTab label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Segmented Buttons ─────────────────────────────────────────── */

function SegmentedButtonsDemo() {
  const [idx1, setIdx1] = useState(0)
  const [idx2, setIdx2] = useState(0)
  const [idx3, setIdx3] = useState(0)
  const [idx4, setIdx4] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={sectionLabel}>Large — 2 items</div>
        <SegmentedButtons
          size="large"
          items={[{ label: 'Option A' }, { label: 'Option B' }]}
          selectedIndex={idx1}
          onSelect={setIdx1}
        />
      </div>
      <div>
        <div style={sectionLabel}>Large — 3 items</div>
        <SegmentedButtons
          size="large"
          items={[{ label: 'Day' }, { label: 'Week' }, { label: 'Month' }]}
          selectedIndex={idx2}
          onSelect={setIdx2}
        />
      </div>
      <div>
        <div style={sectionLabel}>Small — 2 items</div>
        <SegmentedButtons
          size="small"
          items={[{ label: 'Option A' }, { label: 'Option B' }]}
          selectedIndex={idx3}
          onSelect={setIdx3}
        />
      </div>
      <div>
        <div style={sectionLabel}>Large — with icons</div>
        <SegmentedButtons
          size="large"
          items={[
            { label: 'List', icon: <Icon name="list" size={16} /> },
            { label: 'Grid', icon: <Icon name="grid" size={16} /> },
          ]}
          selectedIndex={idx4}
          onSelect={setIdx4}
        />
      </div>
    </div>
  )
}

export const SegmentedButtonsStory: Story = {
  name: 'Segmented Buttons',
  render: () => <SegmentedButtonsDemo />,
  parameters: { controls: { disable: true } },
}

/* ── Segmented Button ──────────────────────────────────────────── */

function SegmentedButtonDemo() {
  const [labelIdx, setLabelIdx] = useState(0)
  const [iconIdx, setIconIdx] = useState(0)

  const labelItems = ['Day', 'Week', 'Month', 'Year']
  const iconItems = [
    { label: 'List', icon: <Icon name="list" size={16} /> },
    { label: 'Grid', icon: <Icon name="grid" size={16} /> },
    { label: 'Card', icon: <Icon name="card" size={16} /> },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={sectionLabel}>Label only (interactive)</div>
        <div style={row}>
          {labelItems.map((item, i) => (
            <SegmentedButton key={item} label={item} selected={i === labelIdx} onClick={() => setLabelIdx(i)} />
          ))}
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Icon + label (interactive)</div>
        <div style={row}>
          {iconItems.map((item, i) => (
            <SegmentedButton key={item.label} label={item.label} icon={item.icon} selected={i === iconIdx} onClick={() => setIconIdx(i)} />
          ))}
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Individual states</div>
        <div style={row}>
          <SegmentedButton label="Selected" selected />
          <SegmentedButton label="Unselected" />
          <SegmentedButton label="Disabled" disabled />
          <SegmentedButton label="Selected + Disabled" selected disabled />
        </div>
      </div>
    </div>
  )
}

export const SegmentedButtonStory: Story = {
  name: 'Segmented Button',
  render: () => <SegmentedButtonDemo />,
  parameters: { controls: { disable: true } },
}

/* ── Pagination ────────────────────────────────────────────────── */

function PaginationDemo() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(44)
  const [page3, setPage3] = useState(3)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={sectionLabel}>4 pages (no overflow)</div>
        <Pagination totalPages={4} currentPage={page1} onPageChange={setPage1} />
      </div>
      <div>
        <div style={sectionLabel}>80 pages, starting at page 44 (both overflows)</div>
        <Pagination totalPages={80} currentPage={page2} onPageChange={setPage2} />
      </div>
      <div>
        <div style={sectionLabel}>20 pages, starting at page 3 (trailing overflow)</div>
        <Pagination totalPages={20} currentPage={page3} onPageChange={setPage3} />
      </div>
    </div>
  )
}

export const PaginationStory: Story = {
  name: 'Pagination',
  render: () => <PaginationDemo />,
  parameters: { controls: { disable: true } },
}
