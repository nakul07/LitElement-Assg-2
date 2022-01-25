import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

let styles = {};

export class PostBody extends LitElement {
  static get properties() {
    return {
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.body =
      'hello may name is nakul niroula iam from ilam iam currently working as a ASE at leapfrog tecgnologies nepal.';
  }

  render() {
    return html`
      <div>
        <p style=${styleMap(styles)}>${this.body}</p>
      </div>
    `;
  }
}

customElements.define('post-body', PostBody);
