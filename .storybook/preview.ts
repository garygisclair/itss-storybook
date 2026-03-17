import type { Preview } from '@storybook/react-vite'
import React, { useEffect } from 'react'
import '../src/tokens.css'
import '../src/stories/stories.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Foundations', 'Components', 'Atoms', 'Hub', 'Hub Page Builder'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals?.theme === 'dark'
      const isFullscreen = context.parameters?.layout === 'fullscreen'
      const isCentered = context.parameters?.layout === 'centered'

      useEffect(() => {
        document.body.setAttribute('data-dark', isDark ? 'true' : 'false')
        return () => document.body.removeAttribute('data-dark')
      }, [isDark])

      // Fullscreen and centered stories skip the page wrapper
      if (isFullscreen || isCentered) {
        return Story()
      }

      // Build the title from Storybook context
      const title = context.title // e.g. "Components/Buttons/CTA Button"
      const storyName = context.name // e.g. "Showcase"

      return React.createElement('div', { className: 'preview-page' },
        React.createElement('div', { className: 'preview-header' },
          React.createElement('h1', null, storyName === 'Default' ? title.split('/').pop() : storyName),
          React.createElement('p', null, title),
        ),
        Story(),
      )
    },
  ],
}

export default preview
