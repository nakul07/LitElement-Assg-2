import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * An image element
 */
export class ProfileImage extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      imageSrc: { type: String },
      profileName: { type: String },
    };
  }

  /**
   * Get styles
   */
  static get styles() {
    return css`
      img {
        border-radius: 50%;
        height: 60px;
        width: 60px;
        margin-right: 20px;
        margin-top: 33px;
      }
      h1 {
        display: table;
      }
      span {
        display: table-cell;
        vertical-align: middle;
      }
    `;
  }

  /**
   * Constructor function
   */
  constructor() {
    super();
    this.imageSrc = '';
    this.profileName = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div class="wrapper">
        <h1>
          <span><img src=${this.imageSrc} /></span>
          <span class="name">${this.profileName}</span>
        </h1>
      </div>
    `;
  }
}

customElements.define('profile-image', ProfileImage);
