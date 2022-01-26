/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css, render } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

/**
 * Renders the no. of answer
 */
export class AnswerCount extends LitElement {
  static get styles() {
    return css`
      p {
        background-color: green;
        border-radius: 2px;
        font-size: 20;
        text-align: center;
        width: 70px;
        height: 60px;
        padding: 1px;
        color: white;
        margin: 30px;
      }
      span {
        font-size: 30px;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The number of answers
       *
       * @type {number}
       */
      count: { type: Number },
    };
  }

  /**
   * Constructor function
   */
  constructor() {
    super();

    this.name = 'Answers';
    this.count = 0;
  }

  /**
   * Renders html
   * 
   * @returns {html}
   */
  render() {
    return html` <p><span>${this.count}</span><br />${this.name}</p> `;
  }
}

customElements.define('answer-count', AnswerCount);
