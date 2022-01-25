import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {
  fontWeight: '600',
};

export class postDetails extends LitElement {
  static get properties() {
    return {
      date: { type: String },
      time: { type: String },
    };
  }

  constructor() {
    super();
    this.date = 'January 25, 2022';
    this.time = '1:24 PM';
  }

  render() {
    return html`
      <div>
        <p>${this.date} at ${this.time}</p>
      </div>
    `;
  }
}

customElements.define('post-details', postDetails);
