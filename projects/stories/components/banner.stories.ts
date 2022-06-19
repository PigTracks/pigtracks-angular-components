import { Meta, Story } from '@storybook/angular';
import { BannerComponent } from '@pigtracks/angular-components';

export default {
  title: 'Components/Banner',
  component: BannerComponent,
  args: {
    content: 'This is a test alert',
  },
} as Meta;

export const Primary: Story = ({ content }) => ({
  template: `<banner>${content}</banner>`,
});
