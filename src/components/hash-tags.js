import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export class HashTags extends LitElement {
  static get properties() {
    return {
      hashTag: { type: String },
    };
  }
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
  constructor() {
    super();
    this.hashTag = '';
  }

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
