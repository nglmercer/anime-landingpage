class InfiniteCarousel extends HTMLElement {  
    constructor() {
      super();
      this.slideElements = [];
      this.attachShadow({ mode: 'open' });
      this.container = document.createElement('div');
      this.setupStyles();
      this.setupContainer();
      this.shadowRoot?.appendChild(this.container);
    }
  
    setupStyles() {
      const style = document.createElement('style');
      style.textContent = /* css */ `
        :host {
          display: block;
          width: 100%;
          height: 400px;
          position: relative;
          overflow: hidden;
          margin-block: 1rem;
          padding-block: 1rem;
        }
  
        .carousel-container {
          width: 100%;
          height: 100%;
          position: relative;

        }
  
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
  
        .slide.active {
          opacity: 1;
        }
  
        .slide-image {
          display: flex;
          justify-content: center;
         align-items: center;
          position: absolute;
          top: 0;

          width: auto;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
  
        .slide-content {
          background: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 8px;
          max-width: 800px;
          margin: auto;
          z-index: 1;

        }
  
        .slide-title {
          font-size: 2em;
          margin: 0 0 10px 0;
        }
  
        .slide-subtitle {
          font-size: 1.5em;
          margin: 0 0 10px 0;
        }
  
        .slide-description {
          font-size: 1em;
          margin: 0;
        }
  
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 15px;
          cursor: pointer;
          z-index: 2;
          border-radius: 4px;
        }
  
        .nav-button:hover {
          background: rgba(255, 255, 255, 0.5);
        }
  
        .prev {
          left: 10px;
        }
  
        .next {
          right: 10px;
        }
      `;
      this.shadowRoot?.appendChild(style);
    }
  
    setupContainer() {
      this.container.className = 'carousel-container';
      
      const prevButton = document.createElement('button');
      prevButton.className = 'nav-button prev';
      prevButton.textContent = '←';
      prevButton.addEventListener('click', () => this.previousSlide());
  
      const nextButton = document.createElement('button');
      nextButton.className = 'nav-button next';
      nextButton.textContent = '→';
      nextButton.addEventListener('click', () => this.nextSlide());
  
      this.container.appendChild(prevButton);
      this.container.appendChild(nextButton);
    }
  
    connectedCallback() {
      //this.startAutoPlay();
    }
  
    disconnectedCallback() {
      this.stopAutoPlay();
    }
  
    createSlideElement(slide, index) {
      const slideElement = document.createElement('div');
      slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
      
      const img = document.createElement('img');
      img.src = slide.image;
      img.alt = slide.title;
      img.className = 'slide-image';
  
      const content = document.createElement('div');
      content.className = 'slide-content';
  
      const title = document.createElement('h2');
      title.className = 'slide-title';
      title.textContent = slide.title;
  
      const subtitle = document.createElement('h3');
      subtitle.className = 'slide-subtitle';
      subtitle.textContent = slide.subtitle;
  
      const description = document.createElement('p');
      description.className = 'slide-description';
      description.textContent = slide.description;
  
      content.appendChild(title);
      content.appendChild(subtitle);
      content.appendChild(description);
      
      slideElement.appendChild(img);
      slideElement.appendChild(content);
  
      return slideElement;
    }
  
    setSlides(newSlides) {
      this.slides = newSlides;
      this.currentIndex = 0;
      
      // Remove existing slides
      this.slideElements.forEach(element => element.remove());
      this.slideElements = [];
  
      // Create new slides
      this.slides.forEach((slide, index) => {
        const slideElement = this.createSlideElement(slide, index);
        this.container.appendChild(slideElement);
        this.slideElements.push(slideElement);
      });
  
      this.updateSlideVisibility();
    }
  
    updateSlideVisibility() {
      this.slideElements.forEach((element, index) => {
        element.className = `slide ${index === this.currentIndex ? 'active' : ''}`;
      });
    }
  
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.updateSlideVisibility();
    }
  
    previousSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.updateSlideVisibility();
    }
  
    startAutoPlay() {
      this.interval = window.setInterval(() => this.nextSlide(), 5000);
    }
  
    stopAutoPlay() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }
  customElements.define('infinite-carousel', InfiniteCarousel);
