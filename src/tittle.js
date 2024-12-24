class Tittlecomponent extends HTMLElement { 
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
     }
    static get observedAttributes() {
        return ['Tittle', 'subtittle', 'image'];
    }
    connectedCallback() {
        this.render();
    }	
    render() {
        const tittle = this.getAttribute('Tittle') || '';
        const subtittle = this.getAttribute('subtittle') || '';
        const image = this.getAttribute('image') || '';
        this.shadowRoot.innerHTML = `
        <style>
        :host {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .grid-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
        margin: 1rem;
        }
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 200px;
        max-height: 200px;
        }
        .text-center {
        text-align: center;
        }
        .justify-center {
        display: flex;
        justify-content: center;
        align-items: center;
        }
        </style>
        <div class="grid-container">
        <div class="justify-center">
        ${image ? `<img src="${image}" alt="logo" class="logo-header">` : ''}
        </div>
        <div class="text-center">
                <h1>${tittle}</h1>
        <h2>${subtittle}</h2>
        </div>
        `
    }
}
customElements.define('tittle-component', Tittlecomponent);