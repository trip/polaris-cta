import { LitElement, html, css } from 'lit';

class PolarisCta extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },

      link: {
        type: String,
      },

      type: {
        type: String,
        reflect: true
      },

      outlined: {
        type: Boolean,
        reflect: true
      },

      filled: {
        type: Boolean,
        reflect: true
      },
    }
  }

  static styles = css`
    :host {
      display: block;
      margin: 12px;
      --polaris-cta-psu-white: #ffffff;
      --polaris-cta-psu-gray:#E4E5E7;
      --polaris-cta-psu-darkgray: #4f627C;
      --polaris-cta-psu-blue: #1E407C;
      --polaris-cta-psu-darkblue: #011E44;
      --polaris-cta-psu-lightblue:#A5E7fE;
      --polaris-cta-psu-black: #000000;
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 16px;
      font-style: italic;
      font-weight: 700;
      letter-spacing: .025rem;
      margin-left: 32px;
      border-radius: 4px;
      padding: 12px 32px;
      transition: 0.1s;
    }

    :host([type="primary"]) a {
      border: 2px solid var(--polaris-cta-psu-blue);
      background-color: var(--polaris-cta-psu-white);
      color: var(--polaris-cta-psu-blue);
    }

    :host([type="primary"]) a:focus,
    :host([type="primary"]) a:hover {
      border: 2px solid var(--polaris-cta-psu-blue);
      background-color: var(--polaris-cta-psu-blue);
      color: var(--polaris-cta-psu-white);
    }

    :host([type="primary"][filled]) a {
      border: 2px solid var(--polaris-cta-psu-blue);
      background-color: var(--polaris-cta-psu-blue);
      color: var(--polaris-cta-psu-white);
    }

    :host([type="primary"][filled]) a:focus,
    :host([type="primary"][filled]) a:hover {
      border: 2px solid var(--polaris-cta-psu-blue);
      background-color: var(--polaris-cta-psu-white);
      color: var(--polaris-cta-psu-blue);
    }

    :host([type="tinted"]) a {
      border: 2px solid var(--polaris-cta-psu-white);
      background-color: var(--polaris-cta-psu-darkgray);
      color: var(--polaris-cta-psu-lightblue);
    }

    :host([type="tinted"]) a:focus,
    :host([type="tinted"]) a:hover {
      border: 2px solid var(--polaris-cta-psu-darkgray);
      background-color: var(--polaris-cta-psu-white);
      color: var(--polaris-cta-psu-darkgray);
    }

    :host([type="light"][outlined]) a {
      border: 2px solid var(--polaris-cta-psu-white);
      background-color: var(--polaris-cta-psu-darkblue);
      color: var(--polaris-cta-psu-lightblue);
    }

    :host([type="light"][outlined]) a:focus,
    :host([type="light"][outlined]) a:hover {
      border: 2px solid var(--polaris-cta-psu-lightblue);
      background-color: var(--polaris-cta-psu-lightblue);
      color: var(--polaris-cta-psu-darkblue);
    }

    :host([type="light"][filled]) a {
      border: 2px solid var(--polaris-cta-psu-lightblue);
      background-color: var(--polaris-cta-psu-lightblue);
      color: var(--polaris-cta-psu-darkblue);
    }

    :host([type="light"][filled]) a:focus,
    :host([type="light"][filled]) a:hover {
      border: 2px solid var(--polaris-cta-psu-white);
      background-color: var(--polaris-cta-psu-darkblue);
      color: var(--polaris-cta-psu-lightblue);
    }
  `;

  constructor() {
    super();
    this.type = 'primary';
  }

  render() {
    return html`
      <a href="${this.link}"><slot>${this.text}</slot></a>
    `;
  }
}

customElements.define('polaris-cta', PolarisCta);