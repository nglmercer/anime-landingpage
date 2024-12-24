class CustomCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      this.shadowRoot.innerHTML = /**/ `
        <style>
        :host {
        margin: 1rem;
        padding: 1rem;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        }
            .card {
            display: grid;
            grid-template-columns: 1fr 500px;
            height: 92dvh;
            }
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            max-width: 1000px;
            margin-inline: auto;
            margin-block: 9rem;
            z-index: 1;
          }
          
          img {
          position: absolute;
          object-fit: cover;
          border-radius: 4px;
          box-sizing: border-box;
          height: 100%;
          z-index: 0;
          }
          .image-container {
            display: flex;
            justify-content: center;
            height: 90%;
            width: 100%;
          }
          h2 {
            margin: 8px 0;
          }
          
          p {
            line-height: 1.5;
          }
          
          button {
            background-color: #646cff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          button:hover {
            background-color: #535bf2;
          }
        @media (max-width: 768px) {

            .card {
            display: flex;
            flex-direction: column-reverse;
            }

            h2 {
              font-size: 1.5em;
            }

            p {
              font-size: 0.9em;
            }
              .image-container {
              position: absolute;
              width: 100%;
              }
              img { 
              position: relative;
              height: auto;
              }
              .content {
                          background-color: rgba(255, 255, 255, 0);
                          backdrop-filter: blur(10px);  
                          -webkit-backdrop-filter: blur(10px);
                            mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0.2) 90%);
                          -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0.2) 90%);
                          padding: 3rem;
          }
        </style>
        
        <div class="card">
            <div class="content">
                <h2 id="cardTitle"></h2>
                <p id="cardText"></p>
                <button id="cardButton">Click me</button>
            </div>
            <div class="image-container"><img id="cardImage" src="" alt="Card image"></div>

        </div>
      `;
    }
    
    // Getters and setters for the properties
    get image() {
      return this.getAttribute('image');
    }
    
    set image(value) {
      this.setAttribute('image', value);
    }
    
    get title() {
      return this.getAttribute('title');
    }
    
    set title(value) {
      this.setAttribute('title', value);
    }
    
    get text() {
      return this.getAttribute('text');
    }
    
    set text(value) {
      this.setAttribute('text', value);
    }
    
    // Observe attributes changes
    static get observedAttributes() {
      return ['image', 'title', 'text', 'buttontext'];
    }
    
    // Handle attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        switch (name) {
          case 'image':
            this.shadowRoot.querySelector('#cardImage').src = newValue;
            break;
          case 'title':
            this.shadowRoot.querySelector('#cardTitle').textContent = newValue;
            break;
          case 'text':
            this.shadowRoot.querySelector('#cardText').textContent = newValue;
            break;
        case 'buttontext':
            this.shadowRoot.querySelector('#cardButton').textContent = newValue;
            break;
        }
      }
    }
    connectedCallback() {
      console.log('connected');
      this.shadowRoot.querySelector('#cardButton').addEventListener('click', () => {
        const emitEvent = new CustomEvent('card-clicked', { detail: this });
        this.dispatchEvent(emitEvent);
    });
    }
}

customElements.define('custom-card', CustomCard);
class StatCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['number', 'description'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .stat-card {
            text-align: left;
            margin: 20px;
            color: white;
          }
          
          .number {
            font-size: 4rem;
            font-weight: bold;
            margin: 0;
            line-height: 1;
          }
          
          .description {
            font-size: 1rem;
            color: #888;
            margin-top: 10px;
            line-height: 1.5;
          }
        </style>
        
        <div class="stat-card">
          <h2 class="number">${this.getAttribute('number')}</h2>
          <p class="description">${this.getAttribute('description')}</p>
        </div>
      `;
    }
  }
  
  customElements.define('stat-card', StatCard);