import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * List of styles
 */
let styles = {
  fontWeight: '600',
  fontSize: '25px',
};

export class PostHeading extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      heading: { type: String },
      body: { type: String },
    };
  }

  /**
   * Constructor function
   */
  constructor() {
    super();
    this.heading = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div>
        <p style=${styleMap(styles)}>${this.heading}</p>
      </div>
    `;
  }
}

customElements.define('post-heading', PostHeading);
