
  class CharacteristicItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['icon', 'title', 'description'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .icon {
            width: 50px;
            height: 50px;
            filter: hue-rotate(var(--hue, 0deg));
          }
          .content {
            flex: 1;
          }
          h3 {
            color: #FFE81F;
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
          }
          p {
            color: #fff;
            margin: 0;
            font-size: 1rem;
            line-height: 1.5;
          }
        </style>
        <img class="icon" src="${this.getAttribute('icon')}" alt="">
        <div class="content">
          <h3>${this.getAttribute('title')}</h3>
          <p>${this.getAttribute('description')}</p>
        </div>
      `;
    }
  }
  
  customElements.define('characteristic-item', CharacteristicItem);