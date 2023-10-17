import { html } from 'lit';
import '../src/polaris-cta.js';

export default {
  title: 'PolarisCta',
  component: 'polaris-cta',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-cta
      style="--polaris-cta-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-cta>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
