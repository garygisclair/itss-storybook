import type { Meta, StoryObj } from '@storybook/react-vite'
import { MenuItem } from '../../components/MenuItem/MenuItem'
import { Menu } from '../../components/Menu/Menu'
import { MenuOptions } from '../../components/MenuOptions/MenuOptions'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { SelectAllBar } from '../../components/SelectAllBar/SelectAllBar'
import { ApplyOrClearSelectionBar } from '../../components/ApplyOrClearSelectionBar/ApplyOrClearSelectionBar'
import { ProgressStepper } from '../../components/ProgressStepper/ProgressStepper'
import { ProgressStep } from '../../components/ProgressStep/ProgressStep'
import { Divider } from '../../components/Divider/Divider'
import { Icon } from '../../components/Icon/Icon'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Menu & Lists',
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

const colBox: React.CSSProperties = {
  width: 240,
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
}

/* ── Menu Item ─────────────────────────────────────────────────── */

export const MenuItemStory: Story = {
  name: 'Menu Item',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {/* Default */}
      <div>
        <div style={subsectionLabel}>Default</div>
        <div style={colBox}>
          <MenuItem type="default" label="Option" />
          <MenuItem type="default" label="Option" subtitle="Subtitle text" />
          <MenuItem type="default" label="Option" leadingIcon={<Icon name="edit" size={16} />} />
          <MenuItem type="default" label="Option" signal="New" />
        </div>
      </div>

      {/* Single-select */}
      <div>
        <div style={subsectionLabel}>Single-select</div>
        <div style={colBox}>
          <MenuItem type="single-select" label="Unchecked" />
          <MenuItem type="single-select" label="Checked" checked />
          <MenuItem type="single-select" label="With icon" leadingIcon={<Icon name="edit" size={16} />} />
          <MenuItem type="single-select" label="Icon + checked" leadingIcon={<Icon name="edit" size={16} />} checked />
        </div>
      </div>

      {/* Multi-select */}
      <div>
        <div style={subsectionLabel}>Multi-select</div>
        <div style={colBox}>
          <MenuItem type="multi-select" label="Unchecked" />
          <MenuItem type="multi-select" label="Checked" checked />
          <MenuItem type="multi-select" label="With icon" leadingIcon={<Icon name="edit" size={16} />} />
        </div>
      </div>

      {/* Category + clearable */}
      <div>
        <div style={subsectionLabel}>Category + Clearable</div>
        <div style={colBox}>
          <MenuItem type="category" label="Category" />
          <MenuItem type="clearable" label="Clearable" />
        </div>
      </div>

      {/* Person */}
      <div>
        <div style={subsectionLabel}>Person</div>
        <div style={colBox}>
          <MenuItem type="person" name="Alice Johnson" jobTitle="Designer" />
          <MenuItem type="person" name="Bob Smith" jobTitle="Engineer" avatarInitials="BS" />
        </div>
      </div>

      {/* Section title */}
      <div>
        <div style={subsectionLabel}>Section title</div>
        <div style={colBox}>
          <MenuItem type="section-title" label="Section Title" />
          <MenuItem type="section-title" label="With Divider" divider />
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Menu ──────────────────────────────────────────────────────── */

export const MenuStory: Story = {
  name: 'Menu',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* Menu variants */}
      <div>
        <div style={sectionLabel}>Menu Variants</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {/* Basic */}
          <div>
            <div style={subsectionLabel}>Basic</div>
            <Menu
              items={[
                { type: 'default', label: 'Option 1' },
                { type: 'default', label: 'Option 2' },
                { type: 'default', label: 'Option 3' },
                { type: 'default', label: 'Option 4' },
                { type: 'default', label: 'Option 5' },
                { type: 'default', label: 'Option 6' },
              ]}
            />
          </div>

          {/* With search bar */}
          <div>
            <div style={subsectionLabel}>With search bar</div>
            <Menu
              searchBar
              items={[
                { type: 'default', label: 'Option 1' },
                { type: 'default', label: 'Option 2' },
                { type: 'default', label: 'Option 3' },
                { type: 'default', label: 'Option 4' },
              ]}
            />
          </div>

          {/* With title + back (single-select) */}
          <div>
            <div style={subsectionLabel}>Title + back (single-select)</div>
            <Menu
              titleBar
              title="Category"
              backButton
              items={[
                { type: 'single-select', label: 'Option A' },
                { type: 'single-select', label: 'Option B', checked: true },
                { type: 'single-select', label: 'Option C' },
              ]}
            />
          </div>

          {/* Complex */}
          <div>
            <div style={subsectionLabel}>Complex (all features)</div>
            <Menu
              titleBar
              title="Filters"
              backButton
              searchBar
              selectAllBar
              applyOrClearBar
              maxHeight={240}
              items={[
                { type: 'multi-select', label: 'Alpha', checked: true },
                { type: 'multi-select', label: 'Beta' },
                { type: 'multi-select', label: 'Gamma', checked: true },
                { type: 'multi-select', label: 'Delta' },
                { type: 'multi-select', label: 'Epsilon' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Sub-components */}
      <div>
        <div style={sectionLabel}>Menu Sub-components</div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {/* MenuOptions */}
          <div>
            <div style={subsectionLabel}>MenuOptions</div>
            <div style={{ width: 240 }}>
              <MenuOptions
                items={[
                  { type: 'default', label: 'Option 1' },
                  { type: 'default', label: 'Option 2', subtitle: 'Subtitle' },
                  { type: 'default', label: 'Option 3' },
                ]}
              />
            </div>
          </div>

          {/* SectionLabel */}
          <div>
            <div style={subsectionLabel}>SectionLabel</div>
            <div style={{ width: 240 }}>
              <SectionLabel label="Section Title" />
              <SectionLabel label="Another Section" />
            </div>
          </div>

          {/* SelectAllBar */}
          <div>
            <div style={subsectionLabel}>SelectAllBar</div>
            <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <SelectAllBar label="All options" />
              <SelectAllBar label="All options" indeterminate />
              <SelectAllBar label="All options" checked />
            </div>
          </div>

          {/* ApplyOrClearSelectionBar */}
          <div>
            <div style={subsectionLabel}>ApplyOrClearSelectionBar</div>
            <div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ApplyOrClearSelectionBar />
              <ApplyOrClearSelectionBar applyButton={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Progress Stepper ──────────────────────────────────────────── */

const stepperSteps5 = [
  { title: 'Step 1', subtitle: 'Details', state: 'complete' as const },
  { title: 'Step 2', subtitle: 'Details', state: 'complete' as const },
  { title: 'Step 3', subtitle: 'Details', state: 'latest' as const },
  { title: 'Step 4', subtitle: 'Details', state: 'incomplete' as const },
  { title: 'Step 5', subtitle: 'Details', state: 'incomplete' as const },
]

const stepperStepsBlocked = [
  { title: 'Step 1', subtitle: 'Details', state: 'complete' as const },
  { title: 'Step 2', subtitle: 'Details', state: 'complete' as const },
  { title: 'Step 3', subtitle: 'Details', state: 'blocked' as const },
  { title: 'Step 4', subtitle: 'Details', state: 'incomplete' as const },
  { title: 'Step 5', subtitle: 'Details', state: 'incomplete' as const },
]

export const ProgressStepperStory: Story = {
  name: 'Progress Stepper',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={sectionLabel}>Horizontal — 5 steps</div>
        <ProgressStepper steps={stepperSteps5} />
      </div>
      <div>
        <div style={sectionLabel}>Horizontal — with blocked step</div>
        <ProgressStepper steps={stepperStepsBlocked} />
      </div>
      <div>
        <div style={sectionLabel}>Vertical — 5 steps</div>
        <ProgressStepper steps={stepperSteps5} vertical />
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Progress Step ─────────────────────────────────────────────── */

const stepStates = ['complete', 'latest', 'incomplete', 'blocked'] as const

export const ProgressStepStory: Story = {
  name: 'Progress Step',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={sectionLabel}>Horizontal — all states</div>
        <div style={{ display: 'flex', gap: 0 }}>
          {stepStates.map((s, i) => (
            <ProgressStep
              key={s}
              state={s}
              layout={i === 0 ? 'start' : i === stepStates.length - 1 ? 'end' : 'center'}
              title={s}
            />
          ))}
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Horizontal — with subtitles</div>
        <div style={{ display: 'flex', gap: 0 }}>
          {stepStates.map((s, i) => (
            <ProgressStep
              key={s}
              state={s}
              layout={i === 0 ? 'start' : i === stepStates.length - 1 ? 'end' : 'center'}
              title={s}
              subtitle="Details"
            />
          ))}
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Vertical — all states</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {stepStates.map((s, i) => (
            <ProgressStep
              key={s}
              state={s}
              layout={i === 0 ? 'start' : i === stepStates.length - 1 ? 'end' : 'center'}
              vertical
              title={s}
              subtitle="Details"
            />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Divider ───────────────────────────────────────────────────── */

export const DividerStory: Story = {
  name: 'Divider',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Horizontal */}
      <div>
        <div style={sectionLabel}>Horizontal</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <div>
            <div style={subsectionLabel}>Full</div>
            <Divider type="horizontal" inset="full" />
          </div>
          <div>
            <div style={subsectionLabel}>16 inset</div>
            <Divider type="horizontal" inset="16" />
          </div>
          <div>
            <div style={subsectionLabel}>Free inset (48px)</div>
            <Divider type="horizontal" inset="free" freeInset={48} />
          </div>
        </div>
      </div>

      {/* Vertical */}
      <div>
        <div style={sectionLabel}>Vertical</div>
        <div style={{ display: 'flex', gap: 32, height: 80 }}>
          <div>
            <div style={subsectionLabel}>Full</div>
            <Divider type="vertical" inset="full" />
          </div>
          <div>
            <div style={subsectionLabel}>16 inset</div>
            <Divider type="vertical" inset="16" />
          </div>
          <div>
            <div style={subsectionLabel}>Free inset (16px)</div>
            <Divider type="vertical" inset="free" freeInset={16} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}
