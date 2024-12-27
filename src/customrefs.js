class CustomRefs extends HTMLElement {
    constructor() {
      super();

      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });

      // Estilos del componente
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          background-color: #121212;
          color: #fff;
          padding: 20px;
          border-radius: 8px;
          font-family: Arial, sans-serif;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        h1, h2 {
          text-align: center;
          margin: 10px 0;
        }

        h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        h2 {
          font-size: 1.2rem;
          color: #848484;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 15px 0;
          font-size: 1rem;
        }

        li strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        a {
          color: #e5ff00;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #c7ff1a;
        }
      `;

      // HTML interno del componente
      const container = document.createElement('div');
      container.innerHTML = `
        <h1>Para Conocer Más</h1>
        <h2 id="subtitle">puede visitar nuestros enlaces</h2>
        <ul id="participants-list"></ul>
      `;

      // Adjuntar estilos y HTML al Shadow DOM
      this.shadowRoot.append(style, container);
    }

    /**
     * Configura el subtítulo general del componente.
     * @param {string} subtitle - El subtítulo que se mostrará.
     */
    setSubtitle(subtitle) {
      const subtitleElement = this.shadowRoot.querySelector('#subtitle');
      subtitleElement.textContent = subtitle;
    }

    /**
     * Añade un participante con múltiples enlaces.
     * @param {Object} participant - Datos del participante.
     * @param {string} participant.title - Nombre del participante.
     * @param {Array} participant.links - Lista de enlaces del participante. Cada enlace es un objeto con `name` y `href`.
     */
    addParticipant(participant) {
      const { title, links } = participant;

      const list = this.shadowRoot.querySelector('#participants-list');
      const listItem = document.createElement('li');

      listItem.innerHTML = `
        <strong>${title}</strong>
        ${links.map(link => `<a href="${link.href}" target="_blank">${link.name}</a>`).join(' | ')}
      `;

      list.appendChild(listItem);
    }
  }

  // Definir el componente
  customElements.define('custom-links', CustomRefs);
