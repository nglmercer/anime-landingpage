import firstimage from '../assets/koi-shinto-shrine.png';
const slides = [
    {
      image: firstimage,
      title: 'Reserva tu stand en',
      subtitle: 'nuestro proximo evento',
      description: 'Dejamos informacion y licks de pagos que puedes realizar el pago directo del stnds que deseas adquir en nuestros eventos "TU TIENES EL CONTROL DE DONDE QUIERES TU STAND"'
    },
    {
      image: 'https://picsum.photos/800/400?random=2',
      title: 'Segundo slide',
      subtitle: 'Más información',
      description: 'Descripción del segundo slide con información relevante'
    }
  ];
const carousel = document.querySelector("infinite-carousel");
carousel.setSlides(slides);