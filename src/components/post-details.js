import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {
  fontWeight: '600',
};

/**
 * An element for post details
 */
export class postDetails extends LitElement {
  /**
   * Get properties
   */
  static get properties() {
    return {
      date: { type: String },
      time: { type: String },
    };
  }

  /**
   * Constructor function
   */
  constructor() {
    super();
    this.date = '';
    this.time = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <div>
        <p>${this.date} at ${this.time}</p>
      </div>
    `;
  }
}

customElements.define('post-details', postDetails);
