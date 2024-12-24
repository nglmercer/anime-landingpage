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
            position: relative;
            overflow: hidden;
            gap: 1rem;
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
            padding-right: 2rem;
            z-index: 1;
          }
          
          img {
          position: absolute;
          object-fit: cover;
          border-radius: 4px;
          box-sizing: border-box;
          height: 100%;
          z-index: 0;
          right: 0;
          }
          .image-container {
            display: flex;
            justify-content: center;
            height: 90%;
            width: 100%;
            overflow: hidden;
          }
          h2 {
            margin: 8px 0;
          }
          
          p {
            line-height: 1.5;
          }
          
          button {
            background-color: #d4f63b;
            color: black;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          button:hover {
            background-color:rgba(212, 246, 59, 0.82);
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
  class EventCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.mly = null;
    }

    static get observedAttributes() {
        return ['location', 'date', 'image', 'latitude', 'longitude'];
    }

    async connectedCallback() {
        // Cargar Mapillary scripts y styles dinámicamente
        await this.loadMapillaryResources();
        this.render();
        //this.initializeMapillary();
    }

    attributeChangedCallback() {
        if (this.shadowRoot.innerHTML !== '') {
            this.render();
            this.initializeMapillary();
        }
    }

    async loadMapillaryResources() {
        // Agregar script de Mapillary
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.js';
        script.async = true;
        document.head.appendChild(script);

        // Agregar estilos de Mapillary
        const linkElem = document.createElement('link');
        linkElem.rel = 'stylesheet';
        linkElem.href = 'https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.css';
        document.head.appendChild(linkElem);

        // Esperar a que el script se cargue
        await new Promise(resolve => script.onload = resolve);
    }

    async initializeMapillary() {
        const lat = this.getAttribute('latitude');
        const lng = this.getAttribute('longitude');
        
        if (!lat || !lng || !mapillary) return;

        const { Viewer } = mapillary;
        const MAPILLARY_ACCESS_TOKEN = 'MLY|8868412723249475|5849dc5c25ec746f4d382f228be442e4';

        // Inicializar el visor
        this.mly = new Viewer({
            container: this.shadowRoot.getElementById('mly'),
            accessToken: MAPILLARY_ACCESS_TOKEN,
        });

        // Buscar y mostrar imagen
        await this.cargarUbicacion(lat, lng);
    }

    async cargarUbicacion(lat, lng) {
      if (!this.mly) return;

      const MAPILLARY_ACCESS_TOKEN = 'MLY|8868412723249475|5849dc5c25ec746f4d382f228be442e4';
      
      try {
          // Calculamos el bbox correctamente
          const radius = 0.01; // Radio inicial de búsqueda
          const bbox = {
              west: parseFloat(lng) - radius,
              south: parseFloat(lat) - radius,
              east: parseFloat(lng) + radius,
              north: parseFloat(lat) + radius
          };

          const url = `https://graph.mapillary.com/images?access_token=${MAPILLARY_ACCESS_TOKEN}&` +
                     `fields=id,captured_at&limit=5&` +
                     `bbox=${bbox.west.toFixed(6)},${bbox.south.toFixed(6)},${bbox.east.toFixed(6)},${bbox.north.toFixed(6)}`;

          const response = await fetch(url);
          
          const data = await response.json();

          if (data.data && data.data.length > 0) {
              const imagenes = data.data.sort((a, b) => 
                  new Date(b.captured_at) - new Date(a.captured_at)
              );
              this.mly.moveTo(imagenes[0].id);
          } else {
              // Búsqueda en radio más amplio
              const largerRadius = 0.05; // Radio expandido
              const largerBbox = {
                  west: parseFloat(lng) - largerRadius,
                  south: parseFloat(lat) - largerRadius,
                  east: parseFloat(lng) + largerRadius,
                  north: parseFloat(lat) + largerRadius
              };

              const largerUrl = `https://graph.mapillary.com/images?access_token=${MAPILLARY_ACCESS_TOKEN}&` +
                              `fields=id,captured_at&limit=5&` +
                              `bbox=${largerBbox.west.toFixed(6)},${largerBbox.south.toFixed(6)},` +
                              `${largerBbox.east.toFixed(6)},${largerBbox.north.toFixed(6)}`;

              const responseLarge = await fetch(largerUrl);
              const dataLarge = await responseLarge.json();
              
              if (dataLarge.data && dataLarge.data.length > 0) {
                  const imagenes = dataLarge.data.sort((a, b) => 
                      new Date(b.captured_at) - new Date(a.captured_at)
                  );
                  this.mly.moveTo(imagenes[0].id);
              } else {
                  console.log('No se encontraron imágenes en esta ubicación');
              }
          }
      } catch (error) {
          console.error('Error al cargar vista de calle:', error);
      }
  }

  render() {
    const location = this.getAttribute('location') || '';
    const date = this.getAttribute('date') || '';
    const image = this.getAttribute('image') || null;
    const features = this.getAttribute('features')?.split(',') || [];

    // Renderiza el contenido inicial
    this.shadowRoot.innerHTML = `
        <style>
            .card {
                background: rgb(17, 17, 17);
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                max-width: 300px;
                margin: 1rem;
            }

            #mly {
                width: 100%;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            #mly img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .card-content {
                padding: 1rem;
            }

            .location {
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
                color: rgb(255, 255, 255);
            }

            .date {
                color: rgb(233, 233, 233);
                margin-bottom: 1rem;
            }

            .features {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                color: rgb(41, 41, 41);
            }

            .feature-link {
                text-decoration: none;
                color: #646cff;
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
                background: rgb(36, 36, 36);
                transition: background 0.3s;
            }

            .feature-link:hover {
                background: rgb(49, 49, 49);
            }
        </style>

        <div class="card">
            <div id="mly" title="Haz clic para ver la vista previa">
                ${image ? `<img src="${image}" alt="Vista previa del evento">` : 'Cargando vista previa...'}
            </div>
            <div class="card-content">
                <div class="location">${location}</div>
                <div class="date">${date}</div>
                <div class="features">
                    ${features.map(feature => `
                        <li>
                            <a href="#${feature.trim()}" class="feature-link">${feature.trim()}</a>
                        </li>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    this.addClickListener(image);
}

addClickListener(image) {
    const mlyDiv = this.shadowRoot.getElementById('mly');

    if (image) {
        mlyDiv.addEventListener('click', async () => {
            mlyDiv.innerHTML = 'Cargando vista previa...'; // Muestra un mensaje mientras se carga
            await this.initializeMapillary();
        });
    } else {
        // Si no hay imagen, inicializa directamente el visor de Mapillary
        this.initializeMapillary();
    }
}


}

customElements.define('event-card', EventCard);
class GuestCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['name', 'image', 'description'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name') || '';
        const image = this.getAttribute('image') || null;
        const description = this.getAttribute('description') || '';
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: rgb(17, 17, 17);
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    max-width: 300px;
                    margin: 1rem;
                }

                #image-content {
                    width: 100%;
                    max-height: 400px;
                }

                .card-content {
                    padding: 1rem;
                }

                .name {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    color: rgb(255, 255, 255);
                }

                .description {
                    color: rgb(233, 233, 233);
                    margin-bottom: 1rem;
                }
            </style>

            <div class="card">
                <div id="image-content">
                    ${image ? `<img src="${image}" alt="Imagen de ${name}">` : 'Cargando imagen...'}
                </div>
                <div class="card-content">
                    <div class="name">${this.getAttribute('name')}</div>
                    <div class="description">${this.getAttribute('description')}</div>
                </div>
            </div>
        `;
    }
  }
  
  customElements.define('guest-card', GuestCard);