import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {
  fontWeight: '600',
  fontSize: '25px',
};

export class PostHeading extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.heading = '';
  }

  render() {
    return html`
      <div>
        <p style=${styleMap(styles)}>${this.heading}</p>
      </div>
    `;
  }
}

customElements.define('post-heading', PostHeading);
