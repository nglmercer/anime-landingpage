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
const form = document.querySelector('#myform');
form.initialize()
    .addField({
      type: 'text',
      name: 'nombre_completo',
      label: 'nombre completo',
      placeholder: 'nombre completo',
      required: true,
  })
    .addField({
      type: 'email',
      name: 'email',
      label: 'email',
      placeholder: 'email',
      required: true,
  })
    .addField({
      type: 'tel',
      name: 'numero',
      label: 'numero',
      value: '',
      pattern:"(0[2-7]-[0-9]{7})|(09[0-9]{8})",
      required: true,
  })
  .addField({
    type: 'textarea',
    name: 'texto',
    label: 'texto',
    placeholder: 'texto',
})
.render()
.setSubmitButton({
    label: 'Registrar', 
    className: 'btn-size-1',
})
.toggleDarkMode()

form.addEventListener('form-change', (e) => {
    console.log('form-change', e.detail);
});

form.addEventListener('form-submit', (e) => {
    console.log('form-submit', e.detail);
});