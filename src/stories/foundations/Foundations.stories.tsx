import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import {
  EbayLogo,
  EbayMonoLogo,
  HubLogo,
  HubLogoDark,
  HubLogoStacked,
  HubFavicon,
  HubGPTLogo,
  HubGPTFavicon,
  PeopleXLogo,
} from '../../components/Logo/Logo'
import { Icon, getAvailableSizes, ScalableIcon, getScalableIconNames } from '../../components/Icon/Icon'
import { StateLayer } from '../../components/StateLayer/StateLayer'
import type { StateLayerState, StateLayerType } from '../../components/StateLayer/StateLayer'

/* ─── Elevation data ─── */

const surfaces = [
  { label: 'bg-primary (Light)', bg: 'var(--bg-primary)', dark: false },
  { label: 'bg-secondary (Light)', bg: 'var(--bg-secondary)', dark: false },
  { label: 'bg-primary (Dark)', bg: '#000000', dark: true },
  { label: 'bg-secondary (Dark)', bg: '#191919', dark: true },
]

const elevations = [
  {
    name: 'Subtle',
    description: 'Used for cards and raised surfaces. Includes a 1px border for definition.',
    style: {
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
      border: '1px solid var(--border-subtle)',
    },
  },
  {
    name: 'Strong',
    description: 'Used for dropdowns, popovers, and modal overlays.',
    style: {
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.16)',
    },
  },
]

/* ─── Grid and Layout data ─── */

const breakpoints = [
  { name: 'Mobile', range: '0 – 599px', columns: 4, margin: '16px', gutter: '16px' },
  { name: 'Tablet', range: '600 – 1023px', columns: 8, margin: '24px', gutter: '24px' },
  { name: 'Desktop', range: '1024px +', columns: 12, margin: '32px', gutter: '24px' },
]

const gridDemos = [
  { columns: 4, label: '4-column (Mobile)' },
  { columns: 8, label: '8-column (Tablet)' },
  { columns: 12, label: '12-column (Desktop)' },
]

const cssClasses = `/* Grid utility classes */
.itss-grid { display: grid; gap: 24px; }
.itss-grid--4  { grid-template-columns: repeat(4, 1fr); }
.itss-grid--8  { grid-template-columns: repeat(8, 1fr); }
.itss-grid--12 { grid-template-columns: repeat(12, 1fr); }

/* Responsive overrides */
@media (max-width: 599px)  { .itss-grid--responsive { grid-template-columns: repeat(4, 1fr); gap: 16px; } }
@media (min-width: 600px) and (max-width: 1023px) { .itss-grid--responsive { grid-template-columns: repeat(8, 1fr); gap: 24px; } }
@media (min-width: 1024px) { .itss-grid--responsive { grid-template-columns: repeat(12, 1fr); gap: 24px; } }`

/* ─── Typography data ─── */

interface TypeStyle {
  name: string
  size: string
  weight: number
  lineHeight: string
  tracking: string
  sample?: string
}

interface TypeGroup {
  title: string
  styles: TypeStyle[]
}

const typeGroups: TypeGroup[] = [
  {
    title: 'Display',
    styles: [
      { name: 'Display Large', size: '48px', weight: 700, lineHeight: '56px', tracking: '-0.02em' },
      { name: 'Display Medium', size: '36px', weight: 700, lineHeight: '44px', tracking: '-0.02em' },
      { name: 'Display Small', size: '28px', weight: 700, lineHeight: '36px', tracking: '-0.01em' },
    ],
  },
  {
    title: 'Title',
    styles: [
      { name: 'Title Large', size: '24px', weight: 700, lineHeight: '32px', tracking: '-0.01em' },
      { name: 'Title Medium', size: '20px', weight: 700, lineHeight: '28px', tracking: '0' },
      { name: 'Title Small', size: '16px', weight: 700, lineHeight: '24px', tracking: '0' },
    ],
  },
  {
    title: 'Subtitle',
    styles: [
      { name: 'Subtitle Large', size: '16px', weight: 600, lineHeight: '24px', tracking: '0' },
      { name: 'Subtitle Medium', size: '14px', weight: 600, lineHeight: '20px', tracking: '0' },
      { name: 'Subtitle Small', size: '12px', weight: 600, lineHeight: '16px', tracking: '0.02em' },
    ],
  },
  {
    title: 'Body',
    styles: [
      { name: 'Body Large', size: '16px', weight: 400, lineHeight: '24px', tracking: '0' },
      { name: 'Body Medium', size: '14px', weight: 400, lineHeight: '20px', tracking: '0' },
      { name: 'Body Small', size: '12px', weight: 400, lineHeight: '16px', tracking: '0' },
    ],
  },
  {
    title: 'Caption',
    styles: [
      { name: 'Caption', size: '11px', weight: 400, lineHeight: '16px', tracking: '0.02em' },
    ],
  },
  {
    title: 'Signal',
    styles: [
      { name: 'Signal Large', size: '14px', weight: 700, lineHeight: '20px', tracking: '0.04em', sample: 'SIGNAL TEXT' },
      { name: 'Signal Medium', size: '12px', weight: 700, lineHeight: '16px', tracking: '0.04em', sample: 'SIGNAL TEXT' },
      { name: 'Signal Small', size: '11px', weight: 700, lineHeight: '16px', tracking: '0.06em', sample: 'SIGNAL TEXT' },
    ],
  },
  {
    title: 'Link',
    styles: [
      { name: 'Link Large', size: '16px', weight: 400, lineHeight: '24px', tracking: '0' },
      { name: 'Link Medium', size: '14px', weight: 400, lineHeight: '20px', tracking: '0' },
      { name: 'Link Small', size: '12px', weight: 400, lineHeight: '16px', tracking: '0' },
    ],
  },
]

function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 999,
        backgroundColor: 'var(--bg-on-primary)',
        border: '1px solid var(--border-subtle)',
        fontSize: 10,
        fontFamily: 'monospace',
        color: 'var(--fg-secondary)',
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: 0,
      }}
    >
      {label}
    </span>
  )
}

/* ─── Spacing data ─── */

const baseUnit = 4

const spacingScale = [
  { name: '0', value: 0 },
  { name: '1', value: 4 },
  { name: '2', value: 8 },
  { name: '3', value: 12 },
  { name: '4', value: 16 },
  { name: '5', value: 20 },
  { name: '6', value: 24 },
  { name: '8', value: 32 },
  { name: '10', value: 40 },
  { name: '12', value: 48 },
  { name: '16', value: 64 },
]

interface TokenGroup {
  title: string
  prefix: string
  tokens: { name: string; value: number }[]
}

const tokenGroups: TokenGroup[] = [
  {
    title: 'Padding',
    prefix: 'padding',
    tokens: [
      { name: 'none', value: 0 },
      { name: 'xs', value: 4 },
      { name: 'sm', value: 8 },
      { name: 'md', value: 16 },
      { name: 'lg', value: 24 },
      { name: 'xl', value: 32 },
      { name: '2xl', value: 48 },
    ],
  },
  {
    title: 'Margin',
    prefix: 'margin',
    tokens: [
      { name: 'none', value: 0 },
      { name: 'xs', value: 4 },
      { name: 'sm', value: 8 },
      { name: 'md', value: 16 },
      { name: 'lg', value: 24 },
      { name: 'xl', value: 32 },
      { name: '2xl', value: 48 },
    ],
  },
  {
    title: 'Gap',
    prefix: 'gap',
    tokens: [
      { name: 'none', value: 0 },
      { name: 'xs', value: 4 },
      { name: 'sm', value: 8 },
      { name: 'md', value: 12 },
      { name: 'lg', value: 16 },
      { name: 'xl', value: 24 },
      { name: '2xl', value: 32 },
    ],
  },
]

/* ─── Logos data ─── */

const allLogos = [
  { name: 'EbayLogo', Component: EbayLogo },
  { name: 'HubLogo', Component: HubLogo },
  { name: 'HubLogoDark', Component: HubLogoDark },
  { name: 'HubLogoStacked', Component: HubLogoStacked },
  { name: 'HubFavicon', Component: HubFavicon },
  { name: 'HubGPTLogo', Component: HubGPTLogo },
  { name: 'HubGPTFavicon', Component: HubGPTFavicon },
  { name: 'PeopleXLogo', Component: PeopleXLogo },
]

const darkLogos = [
  { name: 'EbayMonoLogo', Component: EbayMonoLogo },
  { name: 'HubLogoDark', Component: HubLogoDark },
  { name: 'HubFavicon', Component: HubFavicon },
  { name: 'HubGPTLogo', Component: HubGPTLogo },
  { name: 'HubGPTFavicon', Component: HubGPTFavicon },
]

/* ─── Icons data ─── */

const ICON_CATEGORIES = [
  { title: 'Navigation', icons: ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right', 'categories', 'close', 'external-link', 'home', 'menu', 'notification', 'overflow-vertical', 'overflow-horizontal', 'search', 'settings'] },
  { title: 'Actions', icons: ['add', 'attach', 'bookmark', 'bookmark-fill', 'clear', 'compose', 'copy', 'delete', 'duplicate', 'drag-drop', 'download', 'edit', 'filter', 'hide', 'like', 'like-filled', 'link', 'lock', 'lock-fill', 'mail', 'maximize', 'minimize', 'mute', 'pause', 'pin', 'pin-fill', 'play', 'remove', 'refresh', 'return', 'send', 'share', 'show', 'show-fill', 'sort', 'sort-down', 'sort-up', 'star', 'star-filled', 'sync', 'thumb-up', 'thumb-up-fill', 'thumb-down', 'thumb-down-fill', 'tick', 'responsive', 'unlock', 'upload'] },
  { title: 'Objects', icons: ['ai', 'ai-fill', 'book', 'book-closed', 'box', 'building', 'briefcase', 'calendar', 'chat', 'chat-bubble', 'clipboard', 'clock', 'code', 'code-block', 'codepen', 'code-sandbox', 'comment', 'coffee', 'dashboard', 'database', 'dollar', 'feather', 'file', 'flag', 'folder', 'graph', 'gift', 'globe', 'hand-heart', 'handshake-heart', 'hash', 'headphones', 'image', 'list-view', 'location', 'masonry-view', 'mic', 'page', 'phone', 'qr-code', 'org-chart', 'prompt', 'profile', 'smile-face', 'video', 'rocket', 'world', 'web-search'] },
  { title: 'Status', icons: ['attention', 'attention-filled', 'attention-fill', 'confirmation', 'confirmation-fill', 'help', 'information', 'information-fill', 'negative', 'negative-fill', 'progress-current', 'progress-upcoming', 'warning', 'warning-fill'] },
  { title: 'Social', icons: ['facebook', 'twitter', 'linkedin', 'instagram', 'slack'] },
  { title: 'Specific', icons: ['robot', 'robot-fill', 'profile-code', 'chatgpt'] },
  { title: 'Hub', icons: ['hub-truck', 'hub-arrow-right-circle', 'hub-org-sites', 'hub-handshake', 'hub-briefcase', 'hub-legal', 'hub-workplace', 'hub-bookspace', 'hub-yjmmd'] },
]

/* ─── State Layer data ─── */

const stateLayerTypes: { type: StateLayerType; label: string; bg: string }[] = [
  { type: 'default', label: 'Default', bg: 'var(--bg-secondary)' },
  { type: 'heavy', label: 'Heavy', bg: 'var(--bg-secondary)' },
  { type: 'on-fill', label: 'On Fill', bg: 'var(--bg-accent)' },
]

const stateLayerStates: StateLayerState[] = ['enabled', 'hover', 'pressed', 'selected', 'focused']

/* ─── Meta ─── */

const meta: Meta = {
  title: 'Foundations/Visual System',
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj

export const Elevation: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>Elevation</h2>
      {elevations.map(elev => (
        <div key={elev.name} className="preview-section">
          <h3 className="preview-section__title">{elev.name}</h3>
          <p style={{ fontSize: 13, color: 'var(--fg-secondary)', margin: '0 0 16px' }}>{elev.description}</p>
          <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
            {surfaces.filter(s => !s.dark).map(surface => (
              <div key={surface.label} style={{ backgroundColor: surface.bg, borderRadius: 12, padding: 24, width: 240 }}>
                <div className="preview-label" style={{ marginBottom: 12 }}>{surface.label}</div>
                <div style={{ width: '100%', height: 80, borderRadius: 8, backgroundColor: 'var(--bg-primary)', ...elev.style }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {surfaces.filter(s => s.dark).map(surface => (
              <div key={surface.label} data-dark="true" style={{ backgroundColor: surface.bg, borderRadius: 12, padding: 24, width: 240 }}>
                <div className="preview-label" style={{ marginBottom: 12 }}>{surface.label}</div>
                <div style={{ width: '100%', height: 80, borderRadius: 8, backgroundColor: '#282828', ...elev.style }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const GridAndLayout: Story = {
  name: 'Grid and Layout',
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>Grid and Layout</h2>
      <div className="preview-section">
        <h3 className="preview-section__title">Breakpoints</h3>
        <table style={{ width: '100%', maxWidth: 640, borderCollapse: 'collapse', fontSize: 13, color: 'var(--fg-primary)' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-medium)' }}>
              {['Breakpoint', 'Range', 'Columns', 'Margin', 'Gutter'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-secondary)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {breakpoints.map(bp => (
              <tr key={bp.name} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <td style={{ padding: '8px 12px', fontWeight: 600 }}>{bp.name}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 12 }}>{bp.range}</td>
                <td style={{ padding: '8px 12px' }}>{bp.columns}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 12 }}>{bp.margin}</td>
                <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: 12 }}>{bp.gutter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="preview-section">
        <h3 className="preview-section__title">Grid Demos</h3>
        {gridDemos.map(demo => (
          <div key={demo.columns} style={{ marginBottom: 24 }}>
            <div className="preview-label">{demo.label}</div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${demo.columns}, 1fr)`, gap: 8 }}>
              {Array.from({ length: demo.columns }, (_, i) => (
                <div key={i} style={{ height: 40, borderRadius: 4, backgroundColor: 'var(--bg-accent-subtle)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: 'var(--fg-information)' }}>{i + 1}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="preview-section">
        <h3 className="preview-section__title">CSS Classes</h3>
        <pre style={{ backgroundColor: 'var(--bg-on-primary)', border: '1px solid var(--border-subtle)', borderRadius: 8, padding: 16, fontSize: 12, fontFamily: 'monospace', color: 'var(--fg-primary)', overflow: 'auto', lineHeight: 1.5 }}>{cssClasses}</pre>
      </div>
    </div>
  ),
}

export const Typography: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px', color: 'var(--fg-primary)' }}>Typography</h2>
      <div className="preview-section" style={{ marginBottom: 32 }}>
        <p style={{ fontSize: 14, color: 'var(--fg-secondary)', margin: '0 0 4px' }}>
          Font family: <strong style={{ color: 'var(--fg-primary)' }}>Inter</strong> (substituting Market Sans)
        </p>
      </div>
      {typeGroups.map(group => (
        <div key={group.title} className="preview-section">
          <h3 className="preview-section__title">{group.title}</h3>
          {group.styles.map(style => {
            const isLink = group.title === 'Link'
            return (
              <div key={style.name} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: style.size, fontWeight: style.weight, lineHeight: style.lineHeight, letterSpacing: style.tracking, color: 'var(--fg-primary)', textDecoration: isLink ? 'underline' : undefined, textUnderlineOffset: isLink ? '2px' : undefined, marginBottom: 8 }}>
                  {style.sample || style.name}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  <Pill label={style.name} />
                  <Pill label={style.size} />
                  <Pill label={`wt ${style.weight}`} />
                  <Pill label={`lh ${style.lineHeight}`} />
                  <Pill label={`ls ${style.tracking}`} />
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>Spacing</h2>
      <div className="preview-section">
        <h3 className="preview-section__title">4px Base Grid</h3>
        <p style={{ fontSize: 13, color: 'var(--fg-secondary)', margin: '0 0 16px' }}>All spacing values are multiples of the {baseUnit}px base unit.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {spacingScale.map(step => (
            <div key={step.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 80, fontSize: 12, fontFamily: 'monospace', color: 'var(--fg-secondary)', textAlign: 'right' }}>{step.name} ({step.value}px)</div>
              <div style={{ width: Math.max(step.value, 2), height: 16, borderRadius: 2, backgroundColor: 'var(--bg-accent)' }} />
            </div>
          ))}
        </div>
      </div>
      {tokenGroups.map(group => (
        <div key={group.title} className="preview-section">
          <h3 className="preview-section__title">{group.title}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {group.tokens.map(token => (
              <div key={token.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 120, fontSize: 12, fontFamily: 'monospace', color: 'var(--fg-primary)', textAlign: 'right' }}>--{group.prefix}-{token.name}</div>
                <div style={{ width: 48, fontSize: 11, fontFamily: 'monospace', color: 'var(--fg-secondary)', textAlign: 'right' }}>{token.value}px</div>
                <div style={{ width: Math.max(token.value, 2), height: 16, borderRadius: 2, backgroundColor: 'var(--bg-accent-subtle)', border: '1px solid var(--border-accent)' }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Logos: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>Logos</h2>
      <div className="preview-section">
        <h3 className="preview-section__title">All Logos (Light)</h3>
        <div className="preview-row">
          {allLogos.map(logo => (
            <div key={logo.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 16, borderRadius: 8, border: '1px solid var(--border-subtle)', minWidth: 120 }}>
              <div style={{ height: 48, display: 'flex', alignItems: 'center' }}><logo.Component height={40} /></div>
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--fg-secondary)' }}>{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="preview-section">
        <h3 className="preview-section__title">Mono / Dark Logos</h3>
        <div data-dark="true" style={{ backgroundColor: '#000000', borderRadius: 12, padding: 24 }}>
          <div className="preview-row">
            {darkLogos.map(logo => (
              <div key={logo.name + '-dark'} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 16, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', minWidth: 120 }}>
                <div style={{ height: 48, display: 'flex', alignItems: 'center' }}><logo.Component height={40} /></div>
                <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#8f8f8f' }}>{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Icons: Story = {
  render: () => {
    const scalableNames = getScalableIconNames()
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>Icons</h2>
        {ICON_CATEGORIES.map(cat => (
          <div key={cat.title} className="preview-section">
            <h3 className="preview-section__title">{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cat.icons.map(name => {
                const sizes = getAvailableSizes(name)
                const displaySize = sizes.includes(24) ? 24 : sizes[sizes.length - 1] || 16
                return (
                  <div key={name} style={{ width: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '8px 4px', borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                    <div style={{ height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={name} size={displaySize} /></div>
                    <div style={{ fontSize: 9, fontFamily: 'monospace', color: 'var(--fg-secondary)', textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.2 }}>{name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        {scalableNames.length > 0 && (
          <div className="preview-section">
            <h3 className="preview-section__title">Scalable Icons</h3>
            <p style={{ fontSize: 13, color: 'var(--fg-secondary)', margin: '0 0 16px' }}>Designed for larger display (48x48).</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {scalableNames.map(name => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: 12, borderRadius: 8, border: '1px solid var(--border-subtle)' }}>
                  <ScalableIcon name={name} size={48} />
                  <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-secondary)', textAlign: 'center' }}>{name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  },
}

export const StateLayerStory: Story = {
  name: 'State Layer',
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>State Layer</h2>
      {stateLayerTypes.map(t => (
        <div key={t.type} className="preview-section">
          <h3 className="preview-section__title">{t.label}</h3>
          <div className="preview-row">
            {stateLayerStates.map(state => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ position: 'relative', overflow: 'hidden', width: 120, height: 40, borderRadius: 999, backgroundColor: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <StateLayer state={state} type={t.type} />
                  <span style={{ position: 'relative', zIndex: 1, fontSize: 12, fontWeight: 600, color: t.type === 'on-fill' ? 'var(--fg-on-accent)' : 'var(--fg-primary)' }}>{state}</span>
                </div>
                <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-secondary)' }}>{state}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}
