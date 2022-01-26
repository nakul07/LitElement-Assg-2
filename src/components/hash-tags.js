import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * hash-tag element
 */
export class HashTags extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      hashTag: { type: String },
    };
  }

  /**
   * Get styles
   */
  static get styles() {
    return css`
      div {
        width: 70px;
        border-radius: 10px;
        background: lightgrey;
        padding: 5px;
        text-align: center;
      }
      .hash {
        color: blue;
      }
    `;
  }

  /**
   * Constructor function
   */
  constructor() {
    super();
    this.hashTag = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div>
        <span class="hash">#</span>
        <span>${this.hashTag}</span>
      </div>
    `;
  }
}

customElements.define('hash-tag', HashTags);
