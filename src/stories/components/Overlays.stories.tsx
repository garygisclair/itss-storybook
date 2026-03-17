import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageNotice } from '../../components/PageNotice/PageNotice'
import { SectionNotice } from '../../components/SectionNotice/SectionNotice'
import { AlertDialog } from '../../components/AlertDialog/AlertDialog'
import { Dialog } from '../../components/Dialog/Dialog'
import { Snackbar } from '../../components/Snackbar/Snackbar'
import { Toast } from '../../components/Toast/Toast'
import { Popover } from '../../components/Popover/Popover'
import { Accordion } from '../../components/Accordion/Accordion'
import { Tooltip } from '../../components/Tooltip/Tooltip'
import { Illustration } from '../../components/Illustration/Illustration'
import '../stories.css'

const meta: Meta = {
  title: 'Components/Overlays',
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

const scrimOverlay: React.CSSProperties = {
  background: 'rgba(0,0,0,0.32)',
  borderRadius: 12,
  padding: 32,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

/* ── Alerts ────────────────────────────────────────────────────── */

const pageNoticeTypes = ['attention', 'information', 'confirmation', 'general'] as const
const sectionNoticeTypes = ['attention', 'warning', 'confirmation', 'information', 'general'] as const
const alertDialogTypes = ['confirmation', 'warning', 'attention', 'general', 'destructive'] as const

type PageNoticeConfig = { actionable: boolean; dismissable: boolean; name: string }
const pageNoticeConfigs: PageNoticeConfig[] = [
  { actionable: true, dismissable: true, name: 'Action + Dismiss' },
  { actionable: true, dismissable: false, name: 'Action only' },
  { actionable: false, dismissable: true, name: 'Dismiss only' },
  { actionable: false, dismissable: false, name: 'Body only' },
]

export const Alerts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* PageNotice */}
      <div>
        <div style={sectionLabel}>Page Notice</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {pageNoticeConfigs.map((cfg) => (
            <div key={cfg.name}>
              <div style={subsectionLabel}>{cfg.name}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {pageNoticeTypes.map((t) => (
                  <PageNotice
                    key={t}
                    type={t}
                    title="Notice title"
                    body="Alert notice body content goes here."
                    actionable={cfg.actionable}
                    dismissable={cfg.dismissable}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SectionNotice — all types strong + subtle */}
      <div>
        <div style={sectionLabel}>Section Notice — All Types</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sectionNoticeTypes.map((t) => (
            <div key={t} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <SectionNotice type={t} level="strong" title={`${t} — strong`} body="Alert notice body content goes here." actionable dismissable />
              <SectionNotice type={t} level="subtle" title={`${t} — subtle`} body="Alert notice body content goes here." actionable dismissable />
            </div>
          ))}
        </div>
      </div>

      {/* SectionNotice — general variations */}
      <div>
        <div style={sectionLabel}>Section Notice — General Variations</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { actionable: true, dismissable: true, name: 'Action + Dismiss' },
            { actionable: true, dismissable: false, name: 'Action only' },
            { actionable: false, dismissable: true, name: 'Dismiss only' },
            { actionable: false, dismissable: false, name: 'Body only' },
          ].map((cfg) => (
            <div key={cfg.name}>
              <div style={subsectionLabel}>{cfg.name}</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <SectionNotice type="general" level="strong" title="Notice title" body="Alert notice body content goes here." actionable={cfg.actionable} dismissable={cfg.dismissable} />
                <SectionNotice type="general" level="subtle" title="Notice title" body="Alert notice body content goes here." actionable={cfg.actionable} dismissable={cfg.dismissable} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AlertDialog */}
      <div>
        <div style={sectionLabel}>Alert Dialog</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {alertDialogTypes.map((t) => (
            <div key={t} style={scrimOverlay}>
              <AlertDialog type={t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Dialog ────────────────────────────────────────────────────── */

export const DialogStory: Story = {
  name: 'Dialog',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={sectionLabel}>Small — default</div>
        <div style={scrimOverlay}>
          <Dialog size="small" title="Modal title">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dialog body content goes here.</p>
          </Dialog>
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Small — subtitle + back</div>
        <div style={scrimOverlay}>
          <Dialog size="small" title="Modal title" subtitle="Subtitle text" showBackBtn>
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dialog body content goes here.</p>
          </Dialog>
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Small — additional link, no cancel</div>
        <div style={scrimOverlay}>
          <Dialog size="small" title="Modal title" showCancel={false} additionalLinkLabel="Learn more">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dialog body content goes here.</p>
          </Dialog>
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Medium</div>
        <div style={scrimOverlay}>
          <Dialog size="medium" title="Modal title">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dialog body content goes here.</p>
          </Dialog>
        </div>
      </div>
      <div>
        <div style={sectionLabel}>Large</div>
        <div style={scrimOverlay}>
          <Dialog size="large" title="Modal title">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Dialog body content goes here.</p>
          </Dialog>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Snackbar ──────────────────────────────────────────────────── */

export const SnackbarStory: Story = {
  name: 'Snackbar',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Snackbar description="This is a description-only snackbar." />
      <Snackbar title="Title" description="This snackbar has a title." />
      <Snackbar description="This snackbar has an action." action="Undo" />
      <Snackbar title="Title" description="This snackbar has a title and action." action="Undo" />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Toast ─────────────────────────────────────────────────────── */

export const ToastStory: Story = {
  name: 'Toast',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Toast variant="success" title="Success" content="Your changes have been saved." />
      <Toast variant="warning" title="Warning" content="This action cannot be undone." />
      <Toast variant="error" title="Error" content="Something went wrong. Please try again." />
      <Toast variant="update" title="Update" content="A new version is available." />
      <Toast variant="success" title="With action" content="File uploaded successfully." action="View" />
      <Toast variant="error" title="Dismissable" content="Connection lost." dismissable />
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Popover ───────────────────────────────────────────────────── */

export const PopoverStory: Story = {
  name: 'Popover',
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Popover title="Popover Title">This popover has a title and is dismissable.</Popover>
      <Popover>This popover has no title but is dismissable.</Popover>
      <Popover dismissable={false}>This popover is not dismissable.</Popover>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Accordion ─────────────────────────────────────────────────── */

export const AccordionStory: Story = {
  name: 'Accordion',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <div>
        <div style={sectionLabel}>Closed</div>
        <Accordion title="Accordion title">
          <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Accordion content goes here.</p>
        </Accordion>
      </div>
      <div>
        <div style={sectionLabel}>Open (defaultOpen)</div>
        <Accordion title="Accordion title" defaultOpen>
          <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Accordion content goes here.</p>
        </Accordion>
      </div>
      <div>
        <div style={sectionLabel}>Stacked group</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Accordion title="Section 1" defaultOpen>
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Content for section 1.</p>
          </Accordion>
          <Accordion title="Section 2">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Content for section 2.</p>
          </Accordion>
          <Accordion title="Section 3">
            <p style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>Content for section 3.</p>
          </Accordion>
        </div>
      </div>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Tooltip ───────────────────────────────────────────────────── */

export const TooltipStory: Story = {
  name: 'Tooltip',
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 40, paddingBottom: 40 }}>
      <Tooltip content="Tooltip on top" placement="on-top">
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'underline', cursor: 'default' }}>on-top</span>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="on-bottom">
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'underline', cursor: 'default' }}>on-bottom</span>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="on-left">
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'underline', cursor: 'default' }}>on-left</span>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="on-right">
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'underline', cursor: 'default' }}>on-right</span>
      </Tooltip>
      <Tooltip content="Free tooltip" placement="free">
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, textDecoration: 'underline', cursor: 'default' }}>free</span>
      </Tooltip>
    </div>
  ),
  parameters: { controls: { disable: true } },
}

/* ── Bottom Sheets ─────────────────────────────────────────────── */

export const BottomSheets: Story = {
  name: 'Bottom Sheets',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: 32 }}>
      <Illustration type="coming-soon" size={120} />
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#888' }}>Bottom Sheets — coming soon</span>
    </div>
  ),
  parameters: { controls: { disable: true } },
}
