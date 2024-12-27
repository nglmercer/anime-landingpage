class StandInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['sections', 'image', 'title', 'price'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'sections') {
        try {
          this.sections = JSON.parse(newValue);
          this.render();
        } catch (error) {
          console.error('Invalid JSON format for sections attribute:', error);
        }
      }
    }
  
    connectedCallback() {
      if (!this.sections) {
        this.sections = []; // Default empty array if no sections provided
      }
      this.render();
    }
  
    renderSections() {
      return this.sections
        .map(
          (section) => `
          <div class="section">
            <h2 class="section-title">${section.title}</h2>
            <p class="section-content">${section.content}</p>
          </div>
        `
        )
        .join('');
    }
  
    render() {
        const standtitle = this.getAttribute('title') || 'Stand N1';
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            color: white;
            background-color: #000;
            width: 100%;
            height: 100%;
          }
  
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, auto));          
            gap: 2rem;
            align-items: center;
          }
  
          .logo {
            width: 100%;
            max-width: 300px;
          }
  
          .title {
            font-size: 2.5rem;
            margin: 0 0 2rem 0;
            text-align: center;
          }
        
          .section {
            margin-bottom: 1.5rem;
          }
  
          .section-title {
            color: #9da853;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
  
          .section-content {
            color: #ffffff;
            opacity: 0.8;
          }
  
          .price {
            font-size: 2.5rem;
            margin: 1rem 0;
            text-align: center;
          }
  
          .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
  
          .payment-button {
            background-color: #e8ff00;
            color: black;
            border: none;
            padding: 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
          }
  
          .footer {
            margin-top: 2rem;
            text-align: center;
            opacity: 0.6;
            font-size: 0.8rem;
          }
            .logo-container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
        </style>
  
        <div class="container">

          <div class="logo-container">
                      <h1 class="title">${standtitle}</h1>
            <img src="${this.getAttribute('image') || './assets/koi-shinto-shrine.png'}" 
                 alt="Stand N1" 
                 class="logo">
          </div>
          <div class="content">
  
            ${this.renderSections()}
          </div>
          <div class="payment">          
            <div class="price">${this.getAttribute('price') || '$80+IVA'}</div>
  
            <div class="section">
              <h2 class="section-title">Seleccione método de pago</h2>
              <div class="payment-methods">
                <button class="payment-button">PAY PAL</button>
                <button class="payment-button">VISA/MASTERCARD</button>
                <button class="payment-button">WESTERN UNION</button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="footer">
          2025 - koini tech solutions - Política de Privacidad
        </div>
      `;
    }
  }
  
  customElements.define('stand-info', StandInfo);
  