import { LitElement, html, css } from "lit";

let defaultIcon = `data:image/svg+xml;utf8,<svg style="fill:%23888;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;

export class DileAvatar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      div {
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        line-height: var(--dile-avatar-size, 36px);
        width: var(--dile-avatar-size, 36px);
        height: var(--dile-avatar-size, 36px);
        border-radius: var(--dile-avatar-size, 36px);
        background-size: var(--dile-avatar-size, 36px);
        background-color: var(--dile-avatar-background-color, #ddd);
        color: var(--dile-avatar-color, #888);
        text-align: center;
        font-size: calc(var(--dile-avatar-size, 36px) - 11px);
        font-weight: bold;
        text-transform: uppercase;
      }
    `;
  }
  static get properties() {
    return {
      src: { type: String },
      initial: { type: String },
    };
  }
  constructor() {
    super();
    this.src = "";
    this.initial = "";
  }

  render() {
    return html`
      ${this.src == "" && this.initial != "" && this.initial.length == 1
        ? this.initialTemplate
        : this.imageTemplate
      }
    `;
  }

  get imageTemplate() {
    return html`<div
        id="img"
        role="img"
        style="background-image: url('${this._asignImage(this.src)}');"
      >&nbsp;</div>`;
  }

  get initialTemplate() {
    return html`<div
        id="img"
        role="img"
        class="initial"
      >${this.initial}</div>`;
  }

  _asignImage(src) {
    if (src == "" || !src) {
      return defaultIcon;
    }
    return src;
  }
}
