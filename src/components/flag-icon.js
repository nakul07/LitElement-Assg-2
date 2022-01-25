import { LitElement, html, css, render } from 'lit';

export class FlagIcon extends LitElement {
  static get properties() {
    return {
      src: { type: String },
    };
  }
  static get styles() {
    return css`
      img {
        height: 30px;
        width: 20px;
      }
    `;
  }
  constructor() {
    super();
    this.src = '';
  }

  render() {
    return html`
      <div>
        <img src=${this.src} />
      </div>
    `;
  }
}

customElements.define('flag-icon', FlagIcon);
