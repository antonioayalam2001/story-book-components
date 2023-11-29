import { type Meta, type StoryObj } from '@storybook/react'
import { Label } from '../../components/Label'

const meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['orange', 'yellow', 'blue', 'purple'] },
    fontColor: { control: 'color' }
  }
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Hello everyone',
    collapsed: false,
    color: 'yellow',
    intensity: 100,
    darkMode: false,
    rounded: false
  }
}

export const Collapsed: Story = {
  args: {
    collapsed: true,
    intensity: 100,
    darkMode: false,
    rounded: true
  }
}

export const SmallCapitalized: Story = {
  args: {
    text: 'Hello everyone',
    collapsed: false,
    color: 'purple',
    intensity: 100,
    darkMode: true,
    rounded: true,
    size: 'small',
    allCaps: true,
    fontColor: 'white'
  }
}
