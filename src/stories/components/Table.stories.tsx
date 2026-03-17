import type { Meta, StoryObj } from '@storybook/react-vite'
import { TableCell } from '../../components/TableCell/TableCell'
import { TableSortButton } from '../../components/TableSortButton/TableSortButton'
import { TableColumn } from '../../components/TableColumn/TableColumn'
import { TableCellProgressDonut } from '../../components/TableCellProgressDonut/TableCellProgressDonut'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Table',
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

const subsectionLabel: React.CSSProperties = {
  fontWeight: 500,
  fontSize: 11,
  fontFamily: 'Inter, sans-serif',
  color: '#888',
  marginBottom: 4,
}

const cellCol: React.CSSProperties = {
  width: 200,
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid var(--border-subtle)',
  borderRadius: 4,
  overflow: 'hidden',
}

/* ── Table Cell ────────────────────────────────────────────────── */

export const TableCellStory: Story = {
  name: 'Table Cell',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Header */}
      <div>
        <div style={sectionLabel}>Header</div>
        <div style={cellCol}>
          <TableCell type="header" label="Header label" />
          <TableCell type="header" label="Sort default" sortState="default" />
          <TableCell type="header" label="Sort up" sortState="up" />
          <TableCell type="header" label="Sort down" sortState="down" />
          <TableCell type="header" label="Disabled" disabled />
        </div>
      </div>

      {/* Text */}
      <div>
        <div style={sectionLabel}>Text</div>
        <div style={cellCol}>
          <TableCell type="text" label="Text label" subtitle="Subtitle" />
          <TableCell type="text" label="No subtitle" />
          <TableCell type="text" label="Selected" subtitle="Subtitle" selected />
          <TableCell type="text" label="Error" subtitle="Subtitle" error />
          <TableCell type="text" label="Disabled" subtitle="Subtitle" disabled />
        </div>
      </div>

      {/* Avatar-text */}
      <div>
        <div style={sectionLabel}>Avatar-text</div>
        <div style={cellCol}>
          <TableCell type="avatar-text" label="Alice Johnson" subtitle="Designer" />
          <TableCell type="avatar-text" label="Bob Smith" subtitle="Engineer" avatarInitials="BS" />
          <TableCell type="avatar-text" label="Disabled" subtitle="Role" disabled />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {/* Element-text */}
        <div>
          <div style={sectionLabel}>Element-text</div>
          <div style={cellCol}>
            <TableCell type="element-text" label="Label" />
            <TableCell type="element-text" label="Selected" selected />
            <TableCell type="element-text" label="Disabled" disabled />
          </div>
        </div>

        {/* Dropdown */}
        <div>
          <div style={sectionLabel}>Dropdown</div>
          <div style={cellCol}>
            <TableCell type="dropdown" label="Label" />
            <TableCell type="dropdown" label="Selected" selected />
            <TableCell type="dropdown" label="Disabled" disabled />
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <div style={sectionLabel}>Checkbox</div>
          <div style={cellCol}>
            <TableCell type="checkbox" />
            <TableCell type="checkbox" checked />
            <TableCell type="checkbox" disabled />
          </div>
        </div>

        {/* Toggle */}
        <div>
          <div style={sectionLabel}>Toggle</div>
          <div style={cellCol}>
            <TableCell type="toggle" />
            <TableCell type="toggle" checked />
            <TableCell type="toggle" disabled />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {/* Actions-icons */}
        <div>
          <div style={sectionLabel}>Actions-icons</div>
          <div style={cellCol}>
            <TableCell type="actions-icons" />
            <TableCell type="actions-icons" selected />
            <TableCell type="actions-icons" disabled />
          </div>
        </div>

        {/* Actions-link-button */}
        <div>
          <div style={sectionLabel}>Actions-link-button</div>
          <div style={cellCol}>
            <TableCell type="actions-link-button" label="Label" />
            <TableCell type="actions-link-button" label="Selected" selected />
            <TableCell type="actions-link-button" label="Disabled" disabled />
          </div>
        </div>

        {/* Image */}
        <div>
          <div style={sectionLabel}>Image</div>
          <div style={cellCol}>
            <TableCell type="image" />
            <TableCell type="image" selected />
          </div>
        </div>

        {/* Chips */}
        <div>
          <div style={sectionLabel}>Chips</div>
          <div style={cellCol}>
            <TableCell type="chips" chips={['Chip 1', 'Chip 2']} />
            <TableCell type="chips" chips={['Chip 1', 'Chip 2']} selected />
          </div>
        </div>

        {/* Empty */}
        <div>
          <div style={sectionLabel}>Empty</div>
          <div style={cellCol}>
            <TableCell type="empty" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Table Sort Button ─────────────────────────────────────────── */

export const TableSortButtonStory: Story = {
  name: 'Table Sort Button',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Default</div>
        <TableSortButton state="default" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Up</div>
        <TableSortButton state="up" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Down</div>
        <TableSortButton state="down" />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Table Column ──────────────────────────────────────────────── */

const columnRows = [
  { label: 'Alice Johnson', subtitle: 'Designer' },
  { label: 'Bob Smith', subtitle: 'Engineer' },
  { label: 'Carol White', subtitle: 'Manager' },
  { label: 'David Lee', subtitle: 'Analyst' },
]

export const TableColumnStory: Story = {
  name: 'Table Column',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Density variants */}
      <div>
        <div style={sectionLabel}>Density variants (text type)</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {(['compact', 'cozy', 'relaxed'] as const).map((d) => (
            <div key={d}>
              <div style={subsectionLabel}>{d}</div>
              <TableColumn
                type="text"
                density={d}
                header="Name"
                sortState="default"
                rows={columnRows}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content types */}
      <div>
        <div style={sectionLabel}>Content types</div>
        <div style={{ display: 'flex', gap: 0, border: '1px solid var(--border-subtle)', borderRadius: 4, overflow: 'hidden' }}>
          <TableColumn
            type="checkbox"
            header=""
            rows={[
              { checked: true },
              { checked: false },
              { checked: true },
              { checked: false },
            ]}
          />
          <TableColumn
            type="text"
            header="Name"
            sortState="default"
            rows={columnRows}
          />
          <TableColumn
            type="avatar-text"
            header="Person"
            rows={[
              { label: 'Alice Johnson', subtitle: 'Designer' },
              { label: 'Bob Smith', subtitle: 'Engineer', avatarInitials: 'BS' },
              { label: 'Carol White', subtitle: 'Manager' },
              { label: 'David Lee', subtitle: 'Analyst' },
            ]}
          />
          <TableColumn
            type="element-text"
            header="Status"
            rows={[
              { label: 'Active' },
              { label: 'Pending' },
              { label: 'Active' },
              { label: 'Inactive' },
            ]}
          />
          <TableColumn
            type="dropdown"
            header="Role"
            rows={[
              { label: 'Designer' },
              { label: 'Engineer' },
              { label: 'Manager' },
              { label: 'Analyst' },
            ]}
          />
          <TableColumn
            type="toggle"
            header="Active"
            rows={[
              { checked: true },
              { checked: false },
              { checked: true },
              { checked: false },
            ]}
          />
          <TableColumn
            type="actions-link-button"
            header="Action"
            rows={[
              { label: 'Edit' },
              { label: 'Edit' },
              { label: 'Edit' },
              { label: 'Edit' },
            ]}
          />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Table Cell Progress Donut ─────────────────────────────────── */

export const TableCellProgressDonutStory: Story = {
  name: 'Table Cell Progress Donut',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Default (75%)</div>
        <TableCellProgressDonut progress={75} label="75%" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Selected (50%)</div>
        <TableCellProgressDonut progress={50} label="50%" selected />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={subsectionLabel}>Disabled (25%)</div>
        <TableCellProgressDonut progress={25} label="25%" disabled />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}
