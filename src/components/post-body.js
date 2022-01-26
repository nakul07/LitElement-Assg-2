import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {};

/**
 * Body of post element
 */
export class PostBody extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      body: { type: String },
    };
  }

  /**
   * Constructor function
   */
  constructor() {
    super();
    this.body = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div>
        <p style=${styleMap(styles)}>${this.body}</p>
      </div>
    `;
  }
}

customElements.define('post-body', PostBody);
