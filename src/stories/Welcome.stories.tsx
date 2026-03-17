import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressStepper } from '../components/ProgressStepper/ProgressStepper'
import './stories.css'
import './welcome.css'

const meta: Meta = {
  title: 'Welcome/About',
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj

const STEPS = [
  {
    state: 'complete' as const,
    title: 'Extract design tokens',
    subtitle: 'Connected Figma via MCP and pulled all color, typography, spacing, and state tokens into tokens.css.',
  },
  {
    state: 'complete' as const,
    title: 'Implement components',
    subtitle: 'Used get_design_context to translate each Figma component directly into TSX + CSS — no scripts, no intermediate specs.',
  },
  {
    state: 'complete' as const,
    title: 'Build the UI Library',
    subtitle: 'Assembled a preview shell with sidebar navigation so every component can be browsed and inspected in one place.',
  },
  {
    state: 'complete' as const,
    title: 'Create the Storybook',
    subtitle: 'Ported all 85+ stories into Storybook 10 with interactive playgrounds, dark mode support, and page wrappers.',
  },
  {
    state: 'latest' as const,
    title: 'Ship and iterate',
    subtitle: 'Hosted on GitHub Pages. Teams can clone, branch, and build — using their AI assistant with the included sample prompt.',
  },
]

export const Default: Story = {
  render: () => (
    <div className="sb-welcome-page">
      <div className="sb-welcome-content">

        {/* Hero */}
        <div className="sb-welcome-hero">
          <p className="itss-signal-1 sb-welcome-eyebrow">ITSS DESIGN SYSTEM</p>
          <h1 className="itss-title-1 sb-welcome-title">Storybook</h1>
          <p className="itss-subtitle-2 sb-welcome-lead">
            Component library built from Figma using Claude Code and the Figma MCP.
            Every component, token, and pattern from the ITSS design system — browsable,
            interactive, and ready to use.
          </p>
        </div>

        {/* What's inside */}
        <div className="sb-welcome-section">
          <h2 className="itss-title-2 sb-welcome-section__heading">What's inside</h2>
          <div className="sb-welcome-stats">
            <div className="sb-welcome-stat">
              <p className="itss-title-1 sb-welcome-stat__number">85+</p>
              <p className="itss-body sb-welcome-stat__label">Stories</p>
            </div>
            <div className="sb-welcome-stat">
              <p className="itss-title-1 sb-welcome-stat__number">70+</p>
              <p className="itss-body sb-welcome-stat__label">Components</p>
            </div>
            <div className="sb-welcome-stat">
              <p className="itss-title-1 sb-welcome-stat__number">200+</p>
              <p className="itss-body sb-welcome-stat__label">Design tokens</p>
            </div>
            <div className="sb-welcome-stat">
              <p className="itss-title-1 sb-welcome-stat__number">0</p>
              <p className="itss-body sb-welcome-stat__label">Magic numbers</p>
            </div>
          </div>
        </div>

        {/* The goal */}
        <div className="sb-welcome-section">
          <h2 className="itss-title-2 sb-welcome-section__heading">The goal</h2>
          <p className="itss-body sb-welcome-section__body">
            The Hub design system lives in Figma. Getting it into React historically meant
            exporting assets, writing specs, and hand-coding components one by one. This project
            collapses that entire pipeline into a single workflow: point Claude Code at a Figma node,
            and get a fully-styled, token-compliant React component back — ready to use.
          </p>
          <p className="itss-body sb-welcome-section__body">
            The result is a living component library that stays in sync with Figma by design.
            This Storybook makes every component browsable with interactive playgrounds,
            dark mode support, and full design token documentation.
          </p>
        </div>

        {/* How we built it */}
        <div className="sb-welcome-section">
          <h2 className="itss-title-2 sb-welcome-section__heading">How we built it</h2>
          <ProgressStepper steps={STEPS} vertical />
        </div>

        {/* Conventions */}
        <div className="sb-welcome-section">
          <h2 className="itss-title-2 sb-welcome-section__heading">Conventions</h2>
          <div className="sb-welcome-conventions">
            <div className="sb-welcome-convention">
              <p className="itss-body-bold sb-welcome-convention__title">Class prefix</p>
              <p className="itss-body sb-welcome-section__body">
                All component classes use the <code className="sb-welcome-code">itss-</code> prefix
                with BEM modifiers — e.g. <code className="sb-welcome-code">itss-cta-btn--primary</code>.
              </p>
            </div>
            <div className="sb-welcome-convention">
              <p className="itss-body-bold sb-welcome-convention__title">Plain CSS</p>
              <p className="itss-body sb-welcome-section__body">
                No Tailwind, no CSS-in-JS. Each component has a co-located <code className="sb-welcome-code">.css</code> file.
                Styles are scoped by class prefix.
              </p>
            </div>
            <div className="sb-welcome-convention">
              <p className="itss-body-bold sb-welcome-convention__title">Tokens only</p>
              <p className="itss-body sb-welcome-section__body">
                All colors, spacing, typography, and radii reference CSS custom properties
                from <code className="sb-welcome-code">tokens.css</code>. No hardcoded values.
              </p>
            </div>
            <div className="sb-welcome-convention">
              <p className="itss-body-bold sb-welcome-convention__title">Dark mode</p>
              <p className="itss-body sb-welcome-section__body">
                Toggle via <code className="sb-welcome-code">data-dark="true"</code> attribute.
                All tokens have light and dark values. Use Storybook's theme toggle to preview.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  ),
}
