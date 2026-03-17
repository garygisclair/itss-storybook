import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { IconButton } from '../../components/IconButton/IconButton'
import { Icon } from '../../components/Icon/Icon'

/* ─── System Color Tokens ─── */

type SwatchMode = 'border' | 'state-light' | 'state-fill'

interface Swatch {
  token: string
  value: string
  darkValue?: string
  mode?: SwatchMode
}

interface Group {
  title: string
  swatches: Swatch[]
}

const groups: Group[] = [
  {
    title: 'Background — Surface',
    swatches: [
      { token: '--bg-primary', value: '#ffffff', darkValue: '#000000' },
      { token: '--bg-primary-bright', value: '#ffffff', darkValue: '#282828' },
      { token: '--bg-secondary', value: '#f7f7f7', darkValue: '#191919' },
      { token: '--bg-secondary-bright', value: '#f7f7f7', darkValue: '#363636' },
      { token: '--bg-on-primary', value: '#f7f7f7', darkValue: '#191919' },
      { token: '--bg-on-secondary', value: '#ffffff', darkValue: '#191919' },
      { token: '--bg-tertiary', value: 'rgba(0,0,0,0.10)', darkValue: 'rgba(255,255,255,0.16)' },
      { token: '--bg-elevated', value: '#ffffff', darkValue: '#282828' },
      { token: '--bg-on-elevated', value: '#f7f7f7', darkValue: '#282828' },
      { token: '--bg-menu', value: '#ffffff', darkValue: '#191919' },
    ],
  },
  {
    title: 'Background — Structural',
    swatches: [
      { token: '--bg-disabled', value: '#c7c7c7', darkValue: '#707070' },
      { token: '--bg-inverse', value: '#363636', darkValue: '#e5e5e5' },
      { token: '--bg-strong', value: '#191919', darkValue: '#f7f7f7' },
    ],
  },
  {
    title: 'Background — Accent & Status',
    swatches: [
      { token: '--bg-accent', value: '#0968f6', darkValue: '#4d93fc' },
      { token: '--bg-accent-subtle', value: '#d4e5fe', darkValue: '#002a69' },
      { token: '--bg-destructive', value: '#d50b0b', darkValue: '#ff5c5c' },
      { token: '--bg-status-attention-subtle', value: '#ffdede', darkValue: '#570303' },
      { token: '--bg-status-success-subtle', value: '#e0fae0', darkValue: '#1b561a' },
      { token: '--bg-status-warning-subtle', value: '#fff8d5', darkValue: '#855f00' },
    ],
  },
  {
    title: 'Foreground — Text',
    swatches: [
      { token: '--fg-primary', value: '#191919', darkValue: '#f7f7f7' },
      { token: '--fg-secondary', value: '#707070', darkValue: '#8f8f8f' },
      { token: '--fg-disabled', value: '#c7c7c7', darkValue: '#707070' },
    ],
  },
  {
    title: 'Foreground — On-surface',
    swatches: [
      { token: '--fg-on-disabled', value: '#ffffff', darkValue: '#191919' },
      { token: '--fg-on-inverse', value: '#ffffff', darkValue: '#191919' },
      { token: '--fg-on-strong', value: '#ffffff', darkValue: '#191919' },
      { token: '--fg-on-accent', value: '#ffffff', darkValue: '#191919' },
      { token: '--fg-on-destructive', value: '#ffffff', darkValue: '#191919' },
    ],
  },
  {
    title: 'Foreground — Semantic & Status',
    swatches: [
      { token: '--fg-information', value: '#0968f6', darkValue: '#84b4fb' },
      { token: '--fg-destructive', value: '#d50b0b' },
      { token: '--fg-status-attention', value: '#d50b0b', darkValue: '#ffa0a0' },
      { token: '--fg-status-success', value: '#288034', darkValue: '#a6f0a5' },
      { token: '--fg-status-warning', value: '#ffa800', darkValue: '#ffe58a' },
    ],
  },
  {
    title: 'Border',
    swatches: [
      { token: '--border-subtle', value: '#e5e5e5', darkValue: '#363636', mode: 'border' as const },
      { token: '--border-medium', value: '#8f8f8f', darkValue: '#707070', mode: 'border' as const },
      { token: '--border-strong', value: '#191919', darkValue: '#ffffff', mode: 'border' as const },
      { token: '--border-accent', value: '#0968f6', darkValue: '#4d93fc', mode: 'border' as const },
      { token: '--border-disabled', value: '#c7c7c7', darkValue: '#363636', mode: 'border' as const },
      { token: '--border-on-disabled', value: '#ffffff', darkValue: '#191919', mode: 'border' as const },
    ],
  },
  {
    title: 'State — Default',
    swatches: [
      { token: '--state-hover', value: 'rgba(0,0,0,0.04)', darkValue: 'rgba(255,255,255,0.12)', mode: 'state-light' as const },
      { token: '--state-pressed', value: 'rgba(0,0,0,0.08)', darkValue: 'rgba(255,255,255,0.16)', mode: 'state-light' as const },
      { token: '--state-selected', value: 'rgba(0,0,0,0.12)', darkValue: 'rgba(255,255,255,0.20)', mode: 'state-light' as const },
      { token: '--state-focused', value: 'rgba(0,0,0,0.04)', mode: 'state-light' as const },
    ],
  },
  {
    title: 'State — Heavy',
    swatches: [
      { token: '--state-hover-heavy', value: 'rgba(0,0,0,0.08)', mode: 'state-light' as const },
      { token: '--state-pressed-heavy', value: 'rgba(0,0,0,0.12)', mode: 'state-light' as const },
      { token: '--state-selected-heavy', value: 'rgba(0,0,0,0.16)', mode: 'state-light' as const },
    ],
  },
  {
    title: 'State — On Fill',
    swatches: [
      { token: '--state-hover-on-fill', value: 'rgba(255,255,255,0.08)', mode: 'state-fill' as const },
      { token: '--state-pressed-on-fill', value: 'rgba(255,255,255,0.12)', mode: 'state-fill' as const },
      { token: '--state-selected-on-fill', value: 'rgba(255,255,255,0.16)', mode: 'state-fill' as const },
    ],
  },
  {
    title: 'Scrim',
    swatches: [
      { token: '--scrim-overlay', value: 'rgba(0,0,0,0.32)', darkValue: 'rgba(0,0,0,0.64)' },
      { token: '--scrim-image', value: 'rgba(0,0,0,0.16)' },
    ],
  },
]

const LIGHT_BORDER_VALUES = ['#ffffff', '#f7f7f7']

function SwatchItem({ token, value, mode }: { token: string; value: string; mode?: SwatchMode }) {
  const needsBorder = !mode && LIGHT_BORDER_VALUES.includes(value.toLowerCase())

  const swatchStyle: React.CSSProperties =
    mode === 'border'
      ? {
          width: 96,
          height: 56,
          borderRadius: 8,
          backgroundColor: 'var(--bg-primary)',
          boxShadow: `inset 0 0 0 3px var(${token})`,
        }
      : mode === 'state-light'
        ? {
            width: 96,
            height: 56,
            borderRadius: 8,
            backgroundColor: 'var(--bg-disabled)',
            position: 'relative',
            overflow: 'hidden',
          }
        : mode === 'state-fill'
          ? {
              width: 96,
              height: 56,
              borderRadius: 8,
              backgroundColor: 'var(--bg-accent)',
              position: 'relative',
              overflow: 'hidden',
            }
          : {
              width: 96,
              height: 56,
              borderRadius: 8,
              backgroundColor: `var(${token})`,
              border: needsBorder ? '1px solid var(--border-subtle)' : undefined,
            }

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', width: 96 }}>
      <div style={swatchStyle}>
        {(mode === 'state-light' || mode === 'state-fill') && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: `var(${token})`,
            }}
          />
        )}
      </div>
      <div style={{ marginTop: 6, fontSize: 11, fontFamily: 'monospace', color: 'var(--fg-primary)', lineHeight: 1.3 }}>
        {token}
      </div>
      <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-secondary)' }}>
        {value}
      </div>
    </div>
  )
}

function ColorGroup({ group }: { group: Group }) {
  const hasDark = group.swatches.some(s => s.darkValue)

  return (
    <div className="preview-section">
      <h3 className="preview-section__title">{group.title}</h3>

      {/* Light */}
      <div className="preview-label">Light</div>
      <div className="preview-row" style={{ marginBottom: hasDark ? 16 : 0 }}>
        {group.swatches.map(s => (
          <SwatchItem key={s.token} token={s.token} value={s.value} mode={s.mode} />
        ))}
      </div>

      {/* Dark */}
      {hasDark && (
        <>
          <div className="preview-label">Dark</div>
          <div
            data-dark="true"
            style={{
              backgroundColor: '#000000',
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div className="preview-row">
              {group.swatches
                .filter(s => s.darkValue)
                .map(s => (
                  <SwatchItem key={s.token + '-dark'} token={s.token} value={s.darkValue!} mode={s.mode} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/* ─── HubGPT Color Tokens ─── */

const hubGPTTokens = [
  { token: '--hubgpt-primary-accent', label: 'Primary Accent', value: '#00996C', darkValue: '#60D2B0' },
  { token: '--hubgpt-secondary-accent', label: 'Secondary Accent', value: '#C7F5E7', darkValue: '#174539' },
  {
    token: '--hubgpt-active-highlight',
    label: 'Active Highlight',
    value: 'rgba(199,245,231,0.75)',
    darkValue: 'rgba(23,69,57,0.75)',
    displayValue: '#C7F5E7, 75% opacity',
    displayDarkValue: '#174539, 75% opacity',
  },
  { token: '--hubgpt-primary-link', label: 'Primary Link', value: '#0F805E', darkValue: '#60D2B0' },
  { token: '--hubgpt-primary-link-hover', label: 'Primary Link Hover', value: '#0E7656', darkValue: '#73D7B9' },
]

function HubGPTSwatchItem({ token, value, displayValue }: { token: string; value: string; displayValue?: string }) {
  const needsBorder = LIGHT_BORDER_VALUES.includes(value.toLowerCase())

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', width: 96 }}>
      <div
        style={{
          width: 96,
          height: 56,
          borderRadius: 8,
          backgroundColor: value,
          border: needsBorder ? '1px solid var(--border-subtle)' : undefined,
        }}
      />
      <div style={{ marginTop: 6, fontSize: 11, fontFamily: 'monospace', color: 'var(--fg-primary)', lineHeight: 1.3 }}>
        {token}
      </div>
      <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-secondary)' }}>
        {displayValue || value}
      </div>
    </div>
  )
}

/* ─── Brand Colors ─── */

const BRAND_COLORS = [
  { name: 'pink', shades: [{ step: '100', hex: '#FEF6FA' }, { step: '200', hex: '#FCDCEC' }, { step: '300', hex: '#F79CC8' }, { step: '400', hex: '#F155A0' }, { step: '500', hex: '#DE458E' }, { step: '600', hex: '#A51359' }, { step: '700', hex: '#4B112D' }, { step: '800', hex: '#360606' }] },
  { name: 'red', shades: [{ step: '100', hex: '#FFF5F5' }, { step: '200', hex: '#FFDEDE' }, { step: '300', hex: '#FFA0A0' }, { step: '400', hex: '#FF5C5C' }, { step: '500', hex: '#F02D2D' }, { step: '600', hex: '#D50B0B' }, { step: '700', hex: '#570303' }, { step: '800', hex: '#2A0303' }] },
  { name: 'coral', shades: [{ step: '100', hex: '#FFF7F5' }, { step: '200', hex: '#FFE1D7' }, { step: '300', hex: '#FFA78A' }, { step: '400', hex: '#FF6A38' }, { step: '500', hex: '#F3511B' }, { step: '600', hex: '#D03706' }, { step: '700', hex: '#5E1D08' }, { step: '800', hex: '#2F0E04' }] },
  { name: 'orange', shades: [{ step: '100', hex: '#FFFAF5' }, { step: '200', hex: '#FFEAD3' }, { step: '300', hex: '#FFC382' }, { step: '400', hex: '#FF8806' }, { step: '500', hex: '#EC7303' }, { step: '600', hex: '#C15100' }, { step: '700', hex: '#562501' }, { step: '800', hex: '#2F1604' }] },
  { name: 'marigold', shades: [{ step: '100', hex: '#FFFBF5' }, { step: '200', hex: '#FFF0D3' }, { step: '300', hex: '#FFD480' }, { step: '400', hex: '#FFA800' }, { step: '500', hex: '#E99A02' }, { step: '600', hex: '#A36302' }, { step: '700', hex: '#562F01' }, { step: '800', hex: '#2F1B04' }] },
  { name: 'yellow', shades: [{ step: '100', hex: '#FFFCF5' }, { step: '200', hex: '#FFF8D5' }, { step: '300', hex: '#FFE58A' }, { step: '400', hex: '#FFBD14' }, { step: '500', hex: '#EEBB04' }, { step: '600', hex: '#A36302' }, { step: '700', hex: '#553B06' }, { step: '800', hex: '#312102' }] },
  { name: 'dijon', shades: [{ step: '100', hex: '#FFFDF5' }, { step: '200', hex: '#FCF9DE' }, { step: '300', hex: '#FAEF8A' }, { step: '400', hex: '#F6E016' }, { step: '500', hex: '#E8D20C' }, { step: '600', hex: '#766F28' }, { step: '700', hex: '#524500' }, { step: '800', hex: '#2E2400' }] },
  { name: 'avocado', shades: [{ step: '100', hex: '#FDFEF6' }, { step: '200', hex: '#F8FCDE' }, { step: '300', hex: '#E9F5A0' }, { step: '400', hex: '#E3F13C' }, { step: '500', hex: '#C1D737' }, { step: '600', hex: '#68770D' }, { step: '700', hex: '#4E4E0C' }, { step: '800', hex: '#282306' }] },
  { name: 'green', shades: [{ step: '100', hex: '#FBFEF6' }, { step: '200', hex: '#F0FCE1' }, { step: '300', hex: '#D5F6AA' }, { step: '400', hex: '#AAED56' }, { step: '500', hex: '#92C821' }, { step: '600', hex: '#507D17' }, { step: '700', hex: '#345110' }, { step: '800', hex: '#1C2D06' }] },
  { name: 'kiwi', shades: [{ step: '100', hex: '#F6FEF6' }, { step: '200', hex: '#E0FAE0' }, { step: '300', hex: '#A6F0A5' }, { step: '400', hex: '#4CE160' }, { step: '500', hex: '#3CC14E' }, { step: '600', hex: '#288034' }, { step: '700', hex: '#1B561A' }, { step: '800', hex: '#0C310D' }] },
  { name: 'jade', shades: [{ step: '100', hex: '#F7FDFB' }, { step: '200', hex: '#D8F8EE' }, { step: '300', hex: '#8FEACE' }, { step: '400', hex: '#1ED49E' }, { step: '500', hex: '#17C28F' }, { step: '600', hex: '#0F805E' }, { step: '700', hex: '#055743' }, { step: '800', hex: '#002B20' }] },
  { name: 'teal', shades: [{ step: '100', hex: '#F7FDFD' }, { step: '200', hex: '#D7F4F6' }, { step: '300', hex: '#8EDFE5' }, { step: '400', hex: '#44CCD5' }, { step: '500', hex: '#1BBFCA' }, { step: '600', hex: '#006F93' }, { step: '700', hex: '#07465A' }, { step: '800', hex: '#04252F' }] },
  { name: 'indigo', shades: [{ step: '100', hex: '#F5FBFF' }, { step: '200', hex: '#D3EFFE' }, { step: '300', hex: '#80D0FD' }, { step: '400', hex: '#0AA7FF' }, { step: '500', hex: '#0099F0' }, { step: '600', hex: '#0364AB' }, { step: '700', hex: '#003C66' }, { step: '800', hex: '#01193D' }] },
  { name: 'blue', shades: [{ step: '100', hex: '#F5F9FF' }, { step: '200', hex: '#D4E5FE' }, { step: '300', hex: '#84B4FB' }, { step: '400', hex: '#4D93FC' }, { step: '500', hex: '#0968F6' }, { step: '600', hex: '#0049B8' }, { step: '700', hex: '#002A69' }, { step: '800', hex: '#19133A' }] },
  { name: 'violet', shades: [{ step: '100', hex: '#F6F5FE' }, { step: '200', hex: '#E2DDFD' }, { step: '300', hex: '#AD9EFA' }, { step: '400', hex: '#836BFF' }, { step: '500', hex: '#583AEE' }, { step: '600', hex: '#3B1FC6' }, { step: '700', hex: '#271A68' }, { step: '800', hex: '#20092B' }] },
  { name: 'lilac', shades: [{ step: '100', hex: '#FAF5FE' }, { step: '200', hex: '#EFDDFD' }, { step: '300', hex: '#CC9EF0' }, { step: '400', hex: '#B56BF0' }, { step: '500', hex: '#8935CB' }, { step: '600', hex: '#631F99' }, { step: '700', hex: '#3E135F' }, { step: '800', hex: '#2F041E' }] },
  { name: 'neutral', shades: [{ step: '100', hex: '#FFFFFF' }, { step: '200', hex: '#F7F7F7' }, { step: '300', hex: '#E5E5E5' }, { step: '400', hex: '#C7C7C7' }, { step: '500', hex: '#8F8F8F' }, { step: '600', hex: '#707070' }, { step: '700', hex: '#363636' }, { step: '800', hex: '#191919' }, { step: '900', hex: '#000000' }] },
]

const LIGHT_BORDER_HEXES = new Set([
  '#FFFFFF', '#F7F7F7', '#FEF6FA', '#FFF5F5', '#FFF7F5', '#FFFAF5',
  '#FFFBF5', '#FFFCF5', '#FFFDF5', '#FDFEF6', '#FBFEF6', '#F6FEF6',
  '#F7FDFB', '#F7FDFD', '#F5FBFF', '#F5F9FF', '#F6F5FE', '#FAF5FE',
])

/* ─── Meta ─── */

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
}

export default meta

type Story = StoryObj

/* ─── Color in Context helpers ─── */

const ctxLabel: React.CSSProperties = {
  fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px',
  color: 'var(--fg-primary)',
}
const ctxCaption: React.CSSProperties = {
  fontSize: 12, color: 'var(--fg-secondary)', lineHeight: '16px',
}
const ctxBody: React.CSSProperties = {
  fontSize: 16, color: 'var(--fg-secondary)', lineHeight: '24px',
}

function IconRow({ style, bgOverride }: { style: 'borderless' | 'secondary'; bgOverride?: string }) {
  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['default', 'disabled', 'loading'] as const).map(state => (
        <div key={state} style={bgOverride ? { background: bgOverride, borderRadius: '50%' } : undefined}>
          <IconButton
            icon={<Icon name="edit" size={16} />}
            aria-label="edit"
            style={style}
            disabled={state === 'disabled'}
            loading={state === 'loading'}
          />
        </div>
      ))}
    </div>
  )
}

function MenuBgCard() {
  return (
    <div style={{
      background: 'var(--bg-menu)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      boxShadow: '0px 4px 12px rgba(0,0,0,0.07)',
      padding: '16px 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>menu-bg</span>
      <ul style={{ margin: 0, paddingLeft: 24 }}>
        <li style={ctxBody}><strong>border:</strong> border-subtle 1px</li>
        <li style={ctxBody}><strong>elevation:</strong> subtle</li>
      </ul>
    </div>
  )
}

/* ─── Stories ─── */

export const Colors: Story = {
  render: () => (
    <div>
      {groups.map(g => (
        <ColorGroup key={g.title} group={g} />
      ))}

      {/* ── Background — Color in Context ── */}
      <div className="preview-section">
        <p className="preview-section__title">Background — Color in Context</p>

        {/* primary-bg row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>primary-bg</span>
                <ul style={{ margin: 0, paddingLeft: 24 }}><li style={ctxBody}>page background</li></ul>
              </div>
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>secondary-bg</span>
                  <span style={ctxBody}>for sections on primary-bg</span>
                </div>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on primary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    <IconRow style="borderless" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>secondary</span>
                    <IconRow style="secondary" />
                  </div>
                </div>
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on secondary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>transparent</span>
                    <span style={ctxCaption}>uses overlay fills for hover/pressed states</span>
                  </div>
                  <IconRow style="borderless" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>primary-bright</span>
                    <span style={ctxCaption}>uses static fills for hover/pressed states</span>
                  </div>
                  <IconRow style="borderless" bgOverride="var(--bg-primary-bright)" />
                  <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px', color: 'var(--fg-primary)' }}>primary-bright</span>
                    <span style={{ ...ctxCaption, maxWidth: 240 }}>For sections on secondary-bg. If main page background is primary-bg, use sparingly.</span>
                  </div>
                </div>
                <MenuBgCard />
              </div>
            </div>
          ))}
        </div>

        {/* secondary-bg row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 16 }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>secondary-bg</span>
                <ul style={{ margin: 0, paddingLeft: 24 }}>
                  <li style={ctxBody}>page background</li>
                  <li style={ctxBody}>(usually for pages with tables)</li>
                </ul>
              </div>
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '28px', color: 'var(--fg-primary)' }}>primary-bright</span>
                  <span style={ctxBody}>for sections on secondary-bg</span>
                </div>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on secondary-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    <IconRow style="borderless" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>primary-bright</span>
                    <IconRow style="borderless" bgOverride="var(--bg-primary-bright)" />
                  </div>
                </div>
                <div style={{ background: 'var(--bg-primary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on primary-bright</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    <IconRow style="borderless" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={ctxLabel}>secondary-bright</span>
                  </div>
                  <IconRow style="borderless" bgOverride="var(--bg-secondary-bright)" />
                  <div style={{ background: 'var(--bg-secondary-bright)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
                    <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '24px', color: 'var(--fg-primary)' }}>secondary-bright</span>
                    <span style={{ ...ctxCaption, maxWidth: 240 }}>For sections on secondary-container. If main page background is secondary-bg, use sparingly.</span>
                  </div>
                </div>
                <MenuBgCard />
              </div>
            </div>
          ))}
        </div>

        {/* elevated-bg row */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginTop: 16 }}>
          {([false, true] as const).map(dark => (
            <div
              key={dark ? 'dark' : 'light'}
              data-dark={dark ? 'true' : undefined}
              style={{ flex: 1, minWidth: 0, borderRadius: 24, background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ padding: '24px 40px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '40px', color: 'var(--fg-primary)' }}>elevated-bg</span>
                <ul style={{ margin: 0, paddingLeft: 24 }}>
                  <li style={ctxBody}>modal / panel / popover background</li>
                </ul>
              </div>
              <div style={{ padding: '12px 40px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span style={ctxBody}>Icon Buttons on elevated-bg</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>transparent</span>
                    <IconRow style="borderless" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={ctxLabel}>secondary-bright</span>
                    <IconRow style="borderless" bgOverride="var(--bg-secondary-bright)" />
                  </div>
                </div>
                <MenuBgCard />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const HubGPTColors: Story = {
  name: 'HubGPT Colors',
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>
        HubGPT Color Tokens
      </h2>

      <div className="preview-section">
        <div className="preview-label">Light</div>
        <div className="preview-row" style={{ marginBottom: 16 }}>
          {hubGPTTokens.map(t => (
            <HubGPTSwatchItem key={t.token} token={t.token} value={t.value} displayValue={t.displayValue} />
          ))}
        </div>

        <div className="preview-label">Dark</div>
        <div
          data-dark="true"
          style={{ backgroundColor: '#000000', borderRadius: 12, padding: 16 }}
        >
          <div className="preview-row">
            {hubGPTTokens.map(t => (
              <HubGPTSwatchItem
                key={t.token + '-dark'}
                token={t.token}
                value={t.darkValue}
                displayValue={t.displayDarkValue}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}

export const BrandColors: Story = {
  name: 'Brand Colors',
  render: () => (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 32px', color: 'var(--fg-primary)' }}>
        Brand Colors
      </h2>

      {BRAND_COLORS.map(family => (
        <div key={family.name} className="preview-section">
          <h3 className="preview-section__title">{family.name}</h3>
          <div className="preview-row">
            {family.shades.map(shade => {
              const needsBorder = LIGHT_BORDER_HEXES.has(shade.hex)
              return (
                <div
                  key={shade.step}
                  style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 48,
                      borderRadius: 8,
                      backgroundColor: shade.hex,
                      border: needsBorder ? '1px solid var(--border-subtle)' : undefined,
                    }}
                  />
                  <div style={{ marginTop: 4, fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-primary)' }}>
                    {family.name}-{shade.step}
                  </div>
                  <div style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--fg-secondary)' }}>
                    {shade.hex}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  ),
}
