class CustomCopyright extends HTMLElement {
    constructor() {
      super();
      // Attach a shadow DOM
      this.attachShadow({ mode: 'open' });

      // Create the structure
      const wrapper = document.createElement('div');
      const link = document.createElement('a');
      const textSpan = document.createElement('span');

      // Set initial structure
      link.target = "_blank";
      wrapper.appendChild(textSpan);
      wrapper.appendChild(document.createTextNode(' © '));
      wrapper.appendChild(link);

      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        div {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #333;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          text-decoration: underline;
        }
      `;

      // Attach elements to shadow DOM
      this.shadowRoot.append(style, wrapper);

      // Save references for dynamic updates
      this.wrapper = wrapper;
      this.link = link;
      this.textSpan = textSpan;
    }

    // Watch for attribute changes
    static get observedAttributes() {
      return ['text', 'year', 'href'];
    }

    // Handle attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) return;
      switch (name) {
        case 'text':
          this.textSpan.textContent = newValue;
          break;
        case 'year':
          this.wrapper.appendChild(document.createTextNode(` ${newValue}`));
          break;
        case 'href':
          this.link.href = newValue;
          this.link.textContent = newValue;
          break;
      }
    }

    // When the component is added to the DOM
    connectedCallback() {
      this.textSpan.textContent = this.getAttribute('text') || '';
      this.link.textContent = this.getAttribute('href') || '';
      this.link.href = this.getAttribute('href') || '#';

    }
  }

  // Register the custom element
  customElements.define('custom-copyright', CustomCopyright);