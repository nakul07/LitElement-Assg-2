/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './components/answer-count';
import './components/profile-image';
import './components/post-details';
import './components/post-heading';
import './components/post-body';
import './components/hash-tags';
import './components/flag-icon';

/**
 * main app element.
 */
export class MyApp extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        main {
          background-color: white;
          height: 300px;
          width: 650px;
          margin: 20px;
          border: 1px solid black;
        }
        answer-count {
          top: 25px;
          position: absolute;
        }
        profile-image {
          display: inline-block;
          margin-left: 120px;
        }
        .container {
          display: block;
          height: 200px;
          position: relative;
        }
        post-details {
          position: absolute;
          display: inline-block;
          left: 200px;
          top: 80px;
        }
        .content {
          position: relative;
          left: 110px;
          width: 80%;
          top: -30px;
        }
        hash-tag {
          display: inline-block;
          margin-right: 10px;
        }
        flag-icon {
          position: absolute;
          left: -60px;
          top: 0px;
        }
      `,
    ];
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
    <main>
      <div class = 'container'>
       <answer-count count = "8"></answer-count>
       <profile-image imageSrc="../images/random.jpeg" profileName="Nakul Niroula"></profile-image>
        <post-details date="January 25, 2022" time="1:24 PM"></post-details>
      <div>
  
      <div class="content">
        <post-heading heading="How do we add containers to the projects"></post-heading>
       <post-body body="hello may name is nakul niroula iam from ilam iam currently working as a ASE at leapfrog tecgnologies nepal.
       "></post-body>
      <div>
      <hr>
      <hash-tag hashTag=" ACS"></hash-tag><hash-tag hashTag=" Assays"></hash-tag>
      <flag-icon src="../images/flag.png"></flag-icon>
    </main>`;
  }
}

customElements.define('my-app', MyApp);
