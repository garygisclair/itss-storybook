import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from '../../components/Radio/Radio'
import { Checkbox } from '../../components/Checkbox/Checkbox'
import { Switch } from '../../components/Switch/Switch'
import { SelectionItem } from '../../components/SelectionItem/SelectionItem'
import { Filter } from '../../components/Filter/Filter'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Selection',
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
  gap: 12,
  alignItems: 'center',
  flexWrap: 'wrap',
}

const sep = <span style={{ width: 1, height: 24, background: 'var(--border-subtle)' }} />

/* ── Selection Controls ────────────────────────────────────────── */

export const SelectionControls: Story = {
  name: 'Selection Controls',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Radio */}
      <div>
        <div style={sectionLabel}>Radio</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(['small', 'large'] as const).map((size) => (
            <div key={size}>
              <div style={{ ...sectionLabel, fontSize: 11, color: '#888' }}>{size}</div>
              <div style={row}>
                <Radio size={size} />
                <Radio size={size} pressed />
                <Radio size={size} focused />
                <Radio size={size} disabled />
                {sep}
                <Radio size={size} selected />
                <Radio size={size} selected pressed />
                <Radio size={size} selected focused />
                <Radio size={size} selected disabled />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkbox */}
      <div>
        <div style={sectionLabel}>Checkbox</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(['small', 'large'] as const).map((size) => (
            <div key={size}>
              <div style={{ ...sectionLabel, fontSize: 11, color: '#888' }}>{size}</div>
              <div style={row}>
                <Checkbox size={size} />
                <Checkbox size={size} pressed />
                <Checkbox size={size} focused />
                <Checkbox size={size} disabled />
                {sep}
                <Checkbox size={size} selected />
                <Checkbox size={size} selected pressed />
                <Checkbox size={size} selected focused />
                <Checkbox size={size} selected disabled />
                {sep}
                <Checkbox size={size} indeterminate />
                <Checkbox size={size} indeterminate pressed />
                <Checkbox size={size} indeterminate focused />
                <Checkbox size={size} indeterminate disabled />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Switch */}
      <div>
        <div style={sectionLabel}>Switch</div>
        <div style={row}>
          <Switch />
          <Switch pressed />
          <Switch focused />
          <Switch disabled />
          {sep}
          <Switch selected />
          <Switch selected pressed />
          <Switch selected focused />
          <Switch selected disabled />
        </div>
      </div>

      {/* SelectionItem — Radio */}
      <div>
        <div style={sectionLabel}>SelectionItem — Radio</div>
        <div style={row}>
          <SelectionItem type="radio" label="Unselected" />
          <SelectionItem type="radio" label="Selected" selected />
          <SelectionItem type="radio" label="Disabled" disabled />
          <SelectionItem type="radio" label="Selected + Disabled" selected disabled />
        </div>
      </div>

      {/* SelectionItem — Checkbox */}
      <div>
        <div style={sectionLabel}>SelectionItem — Checkbox</div>
        <div style={row}>
          <SelectionItem type="checkbox" label="Unselected" />
          <SelectionItem type="checkbox" label="Selected" selected />
          <SelectionItem type="checkbox" label="Indeterminate" indeterminate />
          <SelectionItem type="checkbox" label="Disabled" disabled />
        </div>
      </div>

      {/* SelectionItem — Switch */}
      <div>
        <div style={sectionLabel}>SelectionItem — Switch</div>
        <div style={row}>
          <SelectionItem type="switch" label="Off" />
          <SelectionItem type="switch" label="On" selected />
          <SelectionItem type="switch" label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}

/* ── Filter ────────────────────────────────────────────────────── */

export const FilterStory: Story = {
  name: 'Filter',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Single-select small */}
      <div>
        <div style={sectionLabel}>Single-select — small</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="single-select" size="small" label="Filter" />
          <Filter type="single-select" size="small" label="Filter" pressed />
          <Filter type="single-select" size="small" label="Filter" applied />
          <Filter type="single-select" size="small" label="Filter" applied pressed />
          <Filter type="single-select" size="small" label="Filter" disabled />
        </div>
      </div>

      {/* Single-select medium */}
      <div>
        <div style={sectionLabel}>Single-select — medium</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="single-select" size="medium" label="Filter" />
          <Filter type="single-select" size="medium" label="Filter" pressed />
          <Filter type="single-select" size="medium" label="Filter" applied />
          <Filter type="single-select" size="medium" label="Filter" applied pressed />
          <Filter type="single-select" size="medium" label="Filter" disabled />
        </div>
      </div>

      {/* Multi-select small */}
      <div>
        <div style={sectionLabel}>Multi-select — small</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="multi-select" size="small" label="Filter" />
          <Filter type="multi-select" size="small" label="Filter" open />
          <Filter type="multi-select" size="small" label="Filter" pressed />
          <Filter type="multi-select" size="small" label="Filter" applied count={2} />
          <Filter type="multi-select" size="small" label="Filter" applied open count={2} />
          <Filter type="multi-select" size="small" label="Filter" disabled />
        </div>
      </div>

      {/* Multi-select medium */}
      <div>
        <div style={sectionLabel}>Multi-select — medium</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="multi-select" size="medium" label="Filter" />
          <Filter type="multi-select" size="medium" label="Filter" open />
          <Filter type="multi-select" size="medium" label="Filter" pressed />
          <Filter type="multi-select" size="medium" label="Filter" applied count={3} />
          <Filter type="multi-select" size="medium" label="Filter" applied open count={3} />
          <Filter type="multi-select" size="medium" label="Filter" disabled />
        </div>
      </div>

      {/* Button small */}
      <div>
        <div style={sectionLabel}>Button — small</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="button" size="small" label="Filter" />
          <Filter type="button" size="small" label="Filter" pressed />
          <Filter type="button" size="small" label="Filter" applied count={2} />
          <Filter type="button" size="small" label="Filter" applied pressed count={2} />
          <Filter type="button" size="small" label="Filter" disabled />
        </div>
      </div>

      {/* Button medium */}
      <div>
        <div style={sectionLabel}>Button — medium</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Filter type="button" size="medium" label="Filter" />
          <Filter type="button" size="medium" label="Filter" pressed />
          <Filter type="button" size="medium" label="Filter" applied count={4} />
          <Filter type="button" size="medium" label="Filter" applied pressed count={4} />
          <Filter type="button" size="medium" label="Filter" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
}
