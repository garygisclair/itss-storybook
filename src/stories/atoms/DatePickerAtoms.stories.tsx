import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { DatePickerDateButton } from '../../components/DatePickerDateButton/DatePickerDateButton'
import { DatePickerDayLabel } from '../../components/DatePickerDayLabel/DatePickerDayLabel'
import { DatePickerYearMonthButton } from '../../components/DatePickerYearMonthButton/DatePickerYearMonthButton'
import { DatePickerDropdownButton } from '../../components/DatePickerDropdownButton/DatePickerDropdownButton'
import { DatePickerHeader } from '../../components/DatePickerHeader/DatePickerHeader'
import { DatePickerFooter } from '../../components/DatePickerFooter/DatePickerFooter'
import { DatePickerRangeSelector } from '../../components/DatePickerRangeSelector/DatePickerRangeSelector'

const meta: Meta = {
  title: 'Atoms/Date Picker Atoms',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const DPDateButton: Story = {
  name: 'DP Date Button',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="preview-section">
        <p className="preview-section__title">Types</p>
        <div className="preview-row">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={15} type="default" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={15} type="today" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>today</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={15} type="selected" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>selected</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={28} type="pre-next" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>pre-next</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={null} type="null" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>null</span>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <p className="preview-section__title">Range selection</p>
        <div className="preview-row" style={{ gap: 0 }}>
          <DatePickerDateButton day={10} type="selected" rangePosition="start" />
          <DatePickerDateButton day={11} type="default" rangePosition="middle" />
          <DatePickerDateButton day={12} type="default" rangePosition="middle" />
          <DatePickerDateButton day={13} type="default" rangePosition="middle" />
          <DatePickerDateButton day={14} type="selected" rangePosition="end" />
        </div>
      </div>

      <div className="preview-section">
        <p className="preview-section__title">States</p>
        <div className="preview-row">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={5} state="enabled" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>enabled</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <DatePickerDateButton day={5} state="disabled" />
            <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>disabled</span>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const DPDayLabel: Story = {
  name: 'DP Day Label',
  render: () => (
    <div className="preview-row">
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
        <DatePickerDayLabel key={day} label={day} />
      ))}
    </div>
  ),
}

export const DPYearMonthButton: Story = {
  name: 'DP Year/Month Button',
  render: () => (
    <div className="preview-row">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <DatePickerYearMonthButton label="2023" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <DatePickerYearMonthButton label="2024" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>default</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <DatePickerYearMonthButton label="2025" selected />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>selected</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <DatePickerYearMonthButton label="2026" disabled />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>disabled</span>
      </div>
    </div>
  ),
}

export const DPDropdownButton: Story = {
  name: 'DP Dropdown Button',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <DatePickerDropdownButton label="September 2025" open={false} />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>closed</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <DatePickerDropdownButton label="September 2025" open />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>open</span>
      </div>
    </div>
  ),
}

export const DPHeader: Story = {
  name: 'DP Header',
  render: () => (
    <div style={{ width: 311 }}>
      <DatePickerHeader label="September 2025" />
    </div>
  ),
}

export const DPFooter: Story = {
  name: 'DP Footer',
  render: () => (
    <div style={{ width: 375, padding: 16, background: 'var(--bg-primary)', borderRadius: 8 }}>
      <DatePickerFooter />
    </div>
  ),
}

export const DPRangeSelector: Story = {
  name: 'DP Range Selector',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[141, 241, 336].map((w) => (
        <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <DatePickerRangeSelector width={w} />
          <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>{w}px</span>
        </div>
      ))}
    </div>
  ),
}
