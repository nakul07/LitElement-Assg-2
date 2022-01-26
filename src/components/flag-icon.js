import { LitElement, html, css, render } from 'lit';

/**
 * flag icon element
 */
export class FlagIcon extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      src: { type: String },
    };
  }

  /**
   * Get styles
   */
  static get styles() {
    return css`
      img {
        height: 30px;
        width: 20px;
      }
    `;
  }

  /**
   * Constructor
   */
  constructor() {
    super();
    this.src = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div>
        <img src=${this.src} />
      </div>
    `;
  }
}

customElements.define('flag-icon', FlagIcon);
