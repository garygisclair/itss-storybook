import type { Meta, StoryObj } from '@storybook/react-vite'
import '../stories.css'
import { InputTitle } from '../../components/InputTitle/InputTitle'
import { InputHelpText } from '../../components/InputHelpText/InputHelpText'
import { InputValueField } from '../../components/InputValueField/InputValueField'
import { InputDraggable } from '../../components/InputDraggable/InputDraggable'

const meta: Meta = {
  title: 'Atoms/Form Atoms',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const InputTitleStory: Story = {
  name: 'Input Title',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputTitle title="Title" tooltip optional />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>title + tooltip + optional</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputTitle title="Label" required />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>label + required</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputTitle title="No extras" />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>no extras</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputTitle title="Required + Tooltip" required tooltip />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>required + tooltip</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <InputTitle title="All variants" required optional tooltip />
        <span style={{ fontSize: 11, color: 'var(--fg-secondary)' }}>all variants</span>
      </div>
    </div>
  ),
}

export const InputHelpTextStory: Story = {
  name: 'Input Help Text',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <InputHelpText helpText="Helper text goes here" showCount characterCount="5/100" />
      <InputHelpText helpText="Helper text goes here" showCount characterCount="5/100" error />
      <InputHelpText helpText="This field is required for form submission." showCount characterCount="42/100" />
      <InputHelpText helpText="This field is required for form submission." showCount characterCount="42/100" error />
      <InputHelpText helpText="Help text only" showCount={false} />
      <InputHelpText helpText="Error, no count" showCount={false} error />
      <InputHelpText showHelpText={false} showCount characterCount="0/200" />
      <InputHelpText showHelpText={false} showCount characterCount="0/200" error />
    </div>
  ),
}

export const InputValueFieldStory: Story = {
  name: 'Input Value Field',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <InputValueField title="Title" value="Value" tooltip optional />
      <InputValueField title="Full Name" value="John Smith" required />
      <InputValueField title="Department" value="Engineering" />
      <InputValueField title="Email" value="john.smith@example.com" tooltip />
    </div>
  ),
}

export const InputDraggableStory: Story = {
  name: 'Input Draggable',
  render: () => (
    <div
      style={{
        position: 'relative',
        width: 343,
        border: '1px solid var(--border-default)',
        borderRadius: 8,
      }}
    >
      <textarea
        rows={3}
        defaultValue="Draggable text area value"
        readOnly
        style={{
          width: '100%',
          boxSizing: 'border-box',
          border: 'none',
          borderRadius: 8,
          padding: 12,
          resize: 'none',
          fontFamily: 'inherit',
          fontSize: 14,
        }}
      />
      <InputDraggable style={{ position: 'absolute', bottom: 4, right: 4 }} />
    </div>
  ),
}
