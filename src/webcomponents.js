import ksvg from '/assets/k.svg';
import koinimasvg from '/assets/koinima.svg';
const svgs = {
  burger: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit;"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>`,
  chat: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
`,
  image: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
`,
  config: `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`,
  login: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>`,
  profile: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <path clip-rule="evenodd" d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z" fill-rule="evenodd">
  </path></svg>`,
  house: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
</svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; ">
  <path clip-rule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" fill-rule="evenodd">
  </path></svg>`,
  settings: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
  </svg>`,
  window: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>
`,
  messages: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
</svg>`,
clipboard: `<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
</svg>`,
 shorts: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; ">
 <path clip-rule="evenodd" d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z" fill-rule="evenodd">
 </path></svg>`,
  suscription: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; ">
  <path clip-rule="evenodd" d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z" fill-rule="evenodd">
  </path></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
  <path clip-rule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fill-rule="evenodd">
  </path></svg>
  `,
  searchSvg: `
  <svg viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
`,
phone:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>
`
}

const STYLES = `
:host {
    all: initial; /* Reset all inherited styles */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 10; /* Adjust number as needed */
}
:host * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  .hidden { display: none; }
  .inline { display: inline; }
  .flex { display: flex; }
  .items-center { align-items: center; }
  .h-5 { height: 1.25rem; }
  .h-6 { height: 1.5rem; }
  .h-8 { height: 2rem; }
  .h-10 { height: 2.5rem; }
  .h-12 { height: 3rem; }
  .h-14 { height: 3.5rem; }
  .h-16 { height: 4rem; }
  .w-5 { width: 1.25rem; }
  .w-32 { width: 8rem; }
  .w-48 { width: 12rem; }
  .w-64 { width: 16rem; }
  .w-full { width: 100%; }
  .h-full { height: 100%; }
  .p-6 { padding: 1.5rem; }
  .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .pt-16 { padding-top: 4rem; }
  .mt-5 { margin-top: 1.25rem; }
  .mb-4 { margin-bottom: 1rem; }
  .ml-6 { margin-left: 1.5rem; }
  .rounded { border-radius: 0.25rem; }
  .rounded-lg { border-radius: 0.5rem; }
  .fixed { position: fixed; }
  .top-16 { top: 4rem; }
  .left-0 { left: 0; }
  .z-50 { z-index: 50; }
  .space-x-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }
  .justify-between { justify-content: space-between; }
  .flex-end { justify-content: flex-end; }
  .bg-black { background-color: #000000; }
  .text-white { color: #ffffff; }
  .text-gray-300 { color: #d1d5db; }
  .text-gray-900 { color: #111827; }
  .bg-gray-100 { background-color: #f7fafc; }
  .bg-gray-700 { background-color: #374151; }
  .bg-gray-800 { background-color: #1f2937; }
  .bg-gray-900 { background-color: #111827; }
  .bg-gray-950 { background-color: #131313; }
  .font-bold { font-weight: 700; }
  .font-semibold { font-weight: 600; }
  .hover\\:text-white:hover { color: #ffffff; }
  .hover\\:bg-gray-700:hover { background-color: #374151; }
  .hover\\:text-white:hover { color: #ffffff; }
  .rounded-lg { border-radius: 0.5rem; }
  .border-0 { border-width: 0; }
  .border-gray-100 { border-color: #f7fafc; }
  .border-transparent { border-color: transparent; }
  .transparent { background-color: transparent; }
  .transition-transform { transition-property: transform; }
  .duration-300 { transition-duration: 300ms; }
  .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
  .transform { transform: translateX(0); }
  .-translate-x-full { transform: translateX(-100%); }
  .active { font-weight: bold; border-left: 1px solid #eaff64; color: #eaff64; }

  .nav-link { text-decoration: none; display: flex; align-items: center; padding: 0.5rem 1.5rem; color: #d1d5db; }

@media (min-width: 640px) {
  .sm\:hidden {
    display: none !important;
  }
  .sm\:inline {
    display: inline !important;
  }
  .sm\:block {
    display: block !important;S
  }
  .sm\:flex {
    display: flex !important;
  }
  .sm\:grid {
    display: grid !important;
  }
  .sm\:items-center {
    align-items: center !important;
  }
  .sm\:px-6 {
    padding-left: 1.5rem !important; /* 24px */
    padding-right: 1.5rem !important;
  }
  .sm\:py-2 {
    padding-top: 0.5rem !important; /* 8px */
    padding-bottom: 0.5rem !important;
  }
  .sm\:hover\:bg-gray-700:hover {
    background-color: #4a5568 !important; /* Gray 700 */
  }
}
.nav-button {
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  color: #d1d5db;
  transition: color 0.2s;
}

/* Text span styles */
.nav-button-text {
    display: none; /* Hidden by default */
}

/* Icon styles */
.nav-button-icon {
    height: 1.25rem;
    width: 1.25rem;
    stroke: currentColor;
}

/* Media query for larger screens (sm and up) */
@media (min-width: 992px) {
    .nav-button {
        padding: 0.5rem 0.75rem;
    }

    .nav-button-text {
        display: inline;
        margin-left: 0.5rem;
    }

    .nav-button-icon {
        display: none; /* Hide icon on larger screens */
    }
}

.nav-button::after {
  /* active state */
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background-color: #eaff64;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.nav-button.active {
  color: white;
  background-color: rgba(55, 65, 81, 0.4);
}

.nav-button.active::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-link {
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::before {
  /* active state */
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: #eaff64;
  border-radius: 6px;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.nav-link.active {
  color: white;
  background-color: rgba(55, 65, 81, 0.1);
}

.nav-link.active::before {
  transform: scaleY(1);
}
`;

class AppConfig {
  static PAGES = {
    tab1: '1',
    tab2: '2',
    tab3: '3',
    tab4: '4'
  };
  static PAGE_CONFIG = {
    [this.PAGES.tab1]: {
        label: 'Inicio', 
        icon: svgs.home
    },
    [this.PAGES.tab2]: {
        label: 'Servicios',
        icon: svgs.shorts
    },
    [this.PAGES.tab3]: {
        label: 'Contacto',
        icon: svgs.phone
    },

    [this.PAGES.tab4]: {
      label: 'Detalles',
      icon: svgs.suscription
  },
  [this.PAGES.tab5]: {
    label: 'Login',
    icon: svgs.login
},
  }
  static slots = {
    1: '<slot name="1-content">No content available for Dashboard</slot>',
    2: '<slot name="2-content">No content available for Projects</slot>',
    3: '<slot name="3-content">No content available for Messages</slot>',
    4: '<slot name="4-content">No content available for Settings</slot>',
    5: '<slot name="5-content">No content available for Login</slot>'
  };
  static getSvgIcon(page) {
    return this.PAGE_CONFIG[page]?.icon || '';
  }
  static getButtonContent(page, index) {
    const pageConfig = this.PAGE_CONFIG[page];
    return `
      <span class="nav-button-text">${pageConfig.label}</span>
      <span class="sm:hidden">
        ${pageConfig.icon || `<span class="font-bold">${index + 1}</span>`}
      </span>
    `;
  }

  static getSidebarContent(page, index, activePage) {
    const pageConfig = this.PAGE_CONFIG[page];
    return `
      <a href="#" class="rounded nav-link flex items-center px-6 py-2 hover:bg-gray-700 ${activePage === page ? 'active' : ''}" 
         data-page="${page}">
        ${pageConfig.icon}
        ${pageConfig.label}
      </a>
    `;
  }
  static setActivePage(page) {
    localStorage.setItem('activePage', page);
    document.dispatchEvent(new CustomEvent('page-changed', { detail: page }));
  } 

  static getActivePage() {
    return localStorage.getItem('activePage') || Object.values(this.PAGES)[0];
  }
}
const pages = Object.values(AppConfig.PAGES);

class SideBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Toggle sidebar event
    document.addEventListener('toggle-sidebar', () => {
      console.log('toggle-sidebar');
      this.isOpen = !this.isOpen;
      this.updateVisibility();
    });

    // Navigation link click events
    this.shadowRoot.addEventListener('click', (e) => {
      const navLink = e.target.closest('.nav-link');
      if (navLink) {
        e.preventDefault();
        const page = navLink.dataset.page;
        AppConfig.setActivePage(page);
        this.updateActiveLink(page);
      }
    });

    // Page change event
    document.addEventListener('page-changed', (e) => {
      this.updateActiveLink(e.detail);
    });
  }

  updateActiveLink(activePage) {
    const links = this.shadowRoot.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.page === activePage);
    });
  }

  updateVisibility() {
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    document.dispatchEvent(new CustomEvent('sidebar-toggle', { detail: this.isOpen }));
    if (this.isOpen) {
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('sidebar-open');
    } else {
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('sidebar-open');
    }
  }

  render() {
    const activePage = AppConfig.getActivePage();
    
    //this element is neighbors content-shifted
    const sidebarStyles = /*css*/`
      .sidebar {
        position: fixed;
        top: 3.5rem;
        left: 0;
        height: calc(100% - 4rem);
        width: 11rem; 
        background-color: #000000;
        color: white;
        transition: transform 0.3s ease-in-out;
        z-index: 40;
        transform: translateX(-100%);
      }
      .sidebar.sidebar-open {
        transform: translateX(0);
      }
      .sidebar-content {
        width: 100%;
        height: 100%;
      }
    `;

    this.shadowRoot.innerHTML = `
      <style>
        ${STYLES}
        ${sidebarStyles}
      </style>
      <div class="sidebar ${this.isOpen ? 'sidebar-open' : ''}">
        <nav>
          ${pages.map((page, index) => 
            AppConfig.getSidebarContent(page, index, activePage)
          ).join('')}
        </nav>
        <slot name="sidebar-content" ></slot>
      </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
class NavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.setupEventListeners();
    }
  
    setupEventListeners() {
      const menuButton = this.shadowRoot.querySelector('#menuButton');
      menuButton.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('toggle-sidebar'));
        //menuButton.querySelector('img').src = this.isOpen ? ksvg : koinimasvg;
      });
  
      const navButtons = this.shadowRoot.querySelectorAll('.nav-button');
      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          AppConfig.setActivePage(button.dataset.page);
          this.updateActiveButton(button.dataset.page);
        });
      });
  
      document.addEventListener('page-changed', (e) => {
        this.updateActiveButton(e.detail);
      });
    }
  
    updateActiveButton(activePage) {
      const buttons = this.shadowRoot.querySelectorAll('.nav-button');
      buttons.forEach(button => {
        if (button.dataset.page === activePage) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  
    render() {
        const activePage = AppConfig.getActivePage();
    
        this.shadowRoot.innerHTML = `
          <style>
          
          ${STYLES}
          </style>
          <nav class="bg-black fixed w-full z-50">
            <div class="mx-auto px-4">
              <div class="flex items-center h-14">
                <div class="flex items-center">
                  <button id="menuButton" class="text-gray-300 hover:text-white transparent border-0 flex items-center">
                    <img src="${koinimasvg}" alt="k logo" class="h-10 w-6">
                  </button>
                  <div class="ml-6 flex space-x-2">
                    ${pages.map((page, index) => `
                      <button class="nav-button px-3 py-2 transparent border-0 rounded text-gray-300 hover:text-white ${activePage === page ? 'active' : ''}" 
                        data-page="${page}">
                        ${AppConfig.getButtonContent(page, index)}
                      </button>
                    `).join('')}
                  </div>
                </div>
                <div class="flex items-center justify-between w-full">
                  <slot name="navbar-content"></slot> <!-- Aquí va el slot -->
                </div>
              </div>
            </div>
          </nav>
        `;
      }
  }
  
customElements.define('nav-bar', NavBar);
class MainContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.addEventListener('page-changed', (e) => {
      this.updateSlotContent(e.detail);
    });

    document.addEventListener('sidebar-toggle', (e) => {
      this.handleSidebarToggle(e.detail);
      console.log('sidebar-toggle');
    });
  }

  updateSlotContent(activePage) {
    const slotElement = this.shadowRoot.querySelector('slot');
    if (slotElement) {
      slotElement.setAttribute('name', `${activePage}-content`);
    }
  }

  handleSidebarToggle(isOpen) {
    const mainElement = this.shadowRoot.querySelector('main');
    if (mainElement) {
      if (isOpen) {
        mainElement.classList.add('content-shifted');
      } else {
        mainElement.classList.remove('content-shifted');
      }
    }
  }

  render() {
    const activePage = AppConfig.getActivePage();
    this.shadowRoot.innerHTML = `
      <style>
        main {
          padding-top: 3.5rem;
          height: 100%;
          min-height: 94.5dvh;
          background-color: #000000;
          color: white;
          transition: padding-left 0.3s ease-in-out;
          padding-left: 0;
        }
        .container {
          padding-inline: 0.5rem; /* p-6 */
        }
        .title {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 1rem; /* mb-4 */
        }
        .content-shifted {
          padding-left: 10.5rem;
        }
        @media (max-width: 768px) {
          .content-shifted {
            padding-left: 0;
          }
        }
      </style>
      <main>
        <div class="container">
          <slot name="${activePage}-content">
            ${AppConfig.slots[activePage] || '<p>No content available</p>'}
          </slot>
        </div>
      </main>
    `;
  }
}

customElements.define('main-content', MainContent);

document.addEventListener('page-changed', (e) => {
  localStorage.setItem('activePage', e.detail);
});

const icons = {
  home: `<svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 3L4 9v12h16V9l-8-6zm0 2.25L18 10v9H6v-9l6-4.75z"/>
  </svg>`,
  
  playlist: `<svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>
  </svg>`,
  
  album: `<svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
  </svg>`,
  
  liked: `<svg viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`
};

class CustomDropdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.position = this.getAttribute('position') || 'right';
    this.mode = this.getAttribute('mode') || 'light';
    this.navigationStack = [];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    this.updateMode();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
          padding: 8px 16px;
          background: none;
          border: none;
          color: var(--text-color, #333);
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
        }

        .dropdown-trigger:hover {
          color: var(--hover-color, #646cff);
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: var(--bg-color, white);
          min-width: 200px;
          max-height: 300px;
          overflow-y: auto;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          border-radius: 8px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
        }

        .dropdown-content.active {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }

        .dropdown-content.position-right {
          left: 0;
        }

        .dropdown-content.position-left {
          right: 0;
        }

        .navigation-header {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          border-bottom: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
        }

        .back-button {
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 8px;
          display: flex;
          align-items: center;
        }

        .category-title {
          flex-grow: 1;
          font-weight: bold;
        }

        ::slotted(*) {
          padding: 12px 16px;
          display: block;
          color: var(--text-color, #333);
          text-decoration: none;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        ::slotted(a:hover),
        ::slotted([data-category]:hover) {
          background-color: var(--hover-bg, #f5f5f5);
        }

        .category-icon {
          margin-right: 8px;
        }
      </style>
      <button class="dropdown-trigger">
        <slot name="trigger">Dropdown</slot>
      </button>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `;
  }

  setupEventListeners() {
    const trigger = this.shadowRoot.querySelector('.dropdown-trigger');
    const content = this.shadowRoot.querySelector('.dropdown-content');

    // Initial setup to prepare categories
    this.prepareCategories();

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = content.classList.contains('active');
      
      // Close all other dropdowns
      document.querySelectorAll('custom-dropdown').forEach(dropdown => {
        if (dropdown !== this) {
          dropdown.shadowRoot.querySelector('.dropdown-content').classList.remove('active');
        }
      });

      content.classList.toggle('active');
      
      if (!isActive) {
        this.updatePosition();
        this.resetToMainLevel();
      }
    });

    // Setup click events for categories and items
    this.setupCategoryNavigation();

    // Existing event listeners from previous implementation
    window.addEventListener('resize', () => {
      if (content.classList.contains('active')) {
        this.updatePosition();
      }
    });

    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        content.classList.remove('active');
        this.resetToMainLevel();
      }
    });

    document.addEventListener('scroll', () => {
      if (content.classList.contains('active')) {
        this.updatePosition();
      }
    }, true);
  }

  prepareCategories() {
    const content = this.shadowRoot.querySelector('.dropdown-content');
    const items = Array.from(this.children);

    items.forEach(item => {
      // Check if item is a category
      if (item.hasAttribute('data-category')) {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          this.navigateToCategory(item);
        });
      }
    });
  }

  setupCategoryNavigation() {
    const content = this.shadowRoot.querySelector('.dropdown-content');

    content.addEventListener('click', (e) => {
      const categoryItem = e.target.closest('[data-category]');
      if (categoryItem) {
        e.stopPropagation();
        this.navigateToCategory(categoryItem);
      }
    });
  }

  navigateToCategory(categoryItem) {
    const content = this.shadowRoot.querySelector('.dropdown-content');
    const originalContent = Array.from(content.children);

    // Create navigation header
    const navHeader = document.createElement('div');
    navHeader.classList.add('navigation-header');

    // Back button
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.innerHTML = '&#8592;'; // Left arrow
    backButton.addEventListener('click', () => this.resetToMainLevel());

    // Category title
    const categoryTitle = document.createElement('div');
    categoryTitle.classList.add('category-title');
    categoryTitle.textContent = categoryItem.getAttribute('data-category');

    navHeader.appendChild(backButton);
    navHeader.appendChild(categoryTitle);

    // Clear current content
    content.innerHTML = '';
    content.appendChild(navHeader);

    // Add category-specific content
    const categoryContent = categoryItem.querySelector('[slot="category-items"]');
    if (categoryContent) {
      // Store original content in navigation stack
      this.navigationStack.push(originalContent);

      // Clone and append category-specific content
      const clonedContent = categoryContent.cloneNode(true);
      content.appendChild(clonedContent);
    }
  }

  resetToMainLevel() {
    const content = this.shadowRoot.querySelector('.dropdown-content');
    
    // Restore original content if navigation stack is not empty
    if (this.navigationStack.length > 0) {
      content.innerHTML = '';
      const originalContent = this.navigationStack.pop();
      originalContent.forEach(item => content.appendChild(item));
      this.prepareCategories();
    }
  }

  updateMode() {
    const trigger = this.shadowRoot.querySelector('.dropdown-trigger');
    const content = this.shadowRoot.querySelector('.dropdown-content');

    if (trigger && content) {
      if (this.mode === 'dark') {
        trigger.style.setProperty('--text-color', '#ffffff');
        trigger.style.setProperty('--hover-color', '#8b92ff');

        content.style.setProperty('--bg-color', '#1a1a1a');
        content.style.setProperty('--text-color', '#ffffff');
        content.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
        content.style.setProperty('--hover-bg', '#2a2a2a');
      } else {
        trigger.style.setProperty('--text-color', '#333');
        trigger.style.setProperty('--hover-color', '#646cff');

        content.style.setProperty('--bg-color', 'white');
        content.style.setProperty('--text-color', '#333');
        content.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
        content.style.setProperty('--hover-bg', '#f5f5f5');
      }
    }
  }

  // Existing methods like updatePosition remain the same...
  updatePosition() {
    const trigger = this.shadowRoot.querySelector('.dropdown-trigger');
    const content = this.shadowRoot.querySelector('.dropdown-content');
    const rect = trigger.getBoundingClientRect();
    
    // Reset classes
    content.classList.remove('position-left', 'position-right');

    // Calculate available space on both sides
    const spaceRight = window.innerWidth - rect.right;
    const spaceLeft = rect.left;

    // Determine optimal position
    if (this.position === 'left' || spaceRight < 200) {
      content.classList.add('position-left');
    } else {
      content.classList.add('position-right');
    }

    // Adjust vertical position if needed
    const contentRect = content.getBoundingClientRect();
    if (contentRect.bottom > window.innerHeight) {
      content.style.maxHeight = `${window.innerHeight - rect.bottom - 20}px`;
      content.style.overflowY = 'auto';
    }
  }

  static get observedAttributes() {
    return ['mode'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'mode') {
      this.mode = newValue;
      this.updateMode();
    }
  }
}

customElements.define('custom-dropdown', CustomDropdown);
class FlexibleModalSelector extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.selectedValues = [];
      this._hiddenInput = null;
      this.options = [];
      this.mode = 'single';
      this.theme = 'dark'
      this.isDarkMode = false;
      this.separator = '||'; // Unique separator to handle values with commas
      const template = document.createElement('template');
      template.innerHTML =/*html*/ `
          <style>
              :host {
                  --bg-primary: white;
                  --bg-secondary: #f8f9fa;
                  --text-primary: black;
                  --text-secondary: #6b7280;
                  --border-color: #e2e8f0;
                  --accent-color: #3b82f6;
                  --accent-light: rgba(59, 130, 246, 0.1);
                  transition: all 0.5s ease-in-out;
                  z-index: 1002;
              }
              :host(.dark) {
                  --bg-primary: #1a202c;
                  --bg-secondary: #2d3748;
                  --text-primary: white;
                  --text-secondary: #cbd5e0;
                  --border-color: #4a5568;
                  --accent-color: #4299e1;
                  --accent-light: rgba(66, 153, 225, 0.1);
              }
              .input-wrapper {
                  position: relative;
                  width: 100%;
              }
              input {
                  box-sizing: content-box;
                  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
                  border: 1px solid var(--border-color);
                  border-radius: 0.375rem;
                  outline: none;
                  background: var(--bg-primary);
                  color: var(--text-primary);
                  cursor: pointer;
              }
              input:focus {
                  border-color: var(--accent-color);
                  box-shadow: 0 0 0 3px var(--accent-light);
              }
              .toggle-btn {
                  position: absolute;
                  right: 0.5rem;
                  top: 50%;
                  transform: translateY(-50%);
                  padding: 0.25rem;
                  background: none;
                  border: none;
                  cursor: pointer;
                  color: var(--text-secondary);
              }
              ::slotted(input[type="hidden"]) {
                  display: none;
              }
          </style>
          <div class="input-wrapper">
              <slot></slot>
              <input type="text" readonly placeholder="Seleccione un valor">
              <button class="toggle-btn">▼</button>
          </div>
      `;

      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.input = this.shadowRoot.querySelector('input[type="text"]');
      this.toggleBtn = this.shadowRoot.querySelector('.toggle-btn');

      this.setupEventListeners();
  }


  connectedCallback() {
      // Set mode from attribute
      this.mode = this.getAttribute('mode') || 'single';
      if (!this._hiddenInput) {
          this._hiddenInput = document.createElement('input');
          this._hiddenInput.type = 'hidden';
          this._hiddenInput.name = this.getAttribute('name') || '';
          this.appendChild(this._hiddenInput);
      }
      // Support initial values
      const initialValue = this.getAttribute('value');
      if (initialValue) {
          // Use new parsing method
          const values = this.parseValue(initialValue);
          this.setValues(values);
      }
  }

  static get observedAttributes() {
      return ['name', 'value', 'mode', 'theme'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'name' && this._hiddenInput) {
          this._hiddenInput.name = newValue;
      }
      
      if (name === 'mode') {
          this.mode = newValue || 'single';
          // Reset selection if mode changes
          this.selectedValues = [];
          this.input.value = '';
          if (this._hiddenInput) this._hiddenInput.value = '';
      }
     
      if (name === 'value' && newValue !== oldValue) {
          // Use new parsing method
          const values = this.parseValue(newValue);
          this.setValues(values);
      }
  }
  parseValue(value) {
      if (!value) return [];

      // If the value contains our separator, split by it
      if (value.includes(this.separator)) {
          return value.split(this.separator).map(v => v.trim());
      }

      // Fallback to comma splitting, but only if the comma is not inside quotes or special values
      return this.splitValueSafely(value);
  }
  splitValueSafely(value) {
      // If no commas, return as single value
      if (!value.includes(',')) return [value.trim()];

      // Use a regex to split while respecting quotes and special characters
      const values = value.match(/(?:[^\s,"]|"(?:\\"|[^"])*")+/g);
      
      return values ? values.map(v => {
          // Remove surrounding quotes if present
          return v.trim().replace(/^["']|["']$/g, '');
      }) : [value.trim()];
  }
  setValues(values) {
    // Ensure values is always an array
    const valuesArray = Array.isArray(values) ? values : [values];

    // Normalize values for consistent handling
    const normalizedValues = valuesArray.map(this.normalizeValue);

    // Filter out values that are not in the available options
    const availableValues = normalizedValues.filter(value => {
        const matchingOption = this.options.some(option => 
            this.normalizeValue(option.value) === value
        );
        return matchingOption;
    });

    // In single mode, take only the first available value
    this.selectedValues = this.mode === 'single' ? availableValues.slice(0, 1) : availableValues;

    // Get labels and images for selected values
    const selectedOptions = this.options
        .filter(option => {
            const normalizedOptionValue = this.normalizeValue(option.value);
            return this.selectedValues.includes(normalizedOptionValue);
        });

    // Clear previous image if exists
    const existingImage = this.input.previousElementSibling;
    if (existingImage && existingImage.tagName === 'IMG') {
        this.input.parentNode.removeChild(existingImage);
    }

    // Update input display
    const labels = selectedOptions.map(option => option.label);
    this.input.value = labels.join(', ');

    // Add image if exists in single mode
    if (this.mode === 'single' && selectedOptions[0] && (selectedOptions[0].image || selectedOptions[0].path)) {
        const img = document.createElement('img');
        img.src = (selectedOptions[0].image || selectedOptions[0].path)?.startsWith('http') || (selectedOptions[0].image || selectedOptions[0].path)?.startsWith('blob:') ? (selectedOptions[0].image || selectedOptions[0].path) : `/media/${(selectedOptions[0].image || selectedOptions[0].path)}`;
        img.style.cssText = `
            position: absolute;
            left: 70%; 
            top: 50%;
            transform: translateY(-50%);
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            border-radius: 0.25rem;
        `;
        this.input.parentNode.insertBefore(img, this.input);
    }

    // Update hidden input using the separator method
    if (this._hiddenInput) {
        this._hiddenInput.value = this.selectedValues.join(this.separator);
    }

    // Dispatch events
    this.dispatchEvent(new CustomEvent('change', {
        detail: {
            values: this.selectedValues,
            mode: this.mode
        },
        bubbles: true
    }));
    this.dispatchEvent(new Event('input', { bubbles: true }));
}
  setupEventListeners() {
      const openSelector = () => {
          this.showSelectorModal();
      };

      this.input.addEventListener('click', openSelector);
      this.toggleBtn.addEventListener('click', openSelector);
  }

  async showSelectorModal() {
    try {
        const result = await this.createSelectorModal({
            selectedValues: this.selectedValues,
            options: this.options, // Ensure always using current options
            mode: this.mode,
            theme: this.isDarkMode ? 'dark' : 'light'
        });
        
        if (result && result.values) {
            this.setValues(result.values);
        }
    } catch (error) {
        console.log('Selector modal cancelled');
    }
}

  /**
   * Method to create selector modal dynamically based on mode
   */
  async createSelectorModal({ selectedValues, options, mode, theme = 'light' }) {
    return new Promise((resolve, reject) => {
        // Color schemes
        const colors = {
            light: {
                background: 'white',
                border: '#e2e8f0',
                text: 'black',
                selectedBackground: '#3b82f6',
                selectedText: 'white',
                searchBg: 'white',
                cancelBg: '#f3f4f6'
            },
            dark: {
                background: '#1e293b', // slate-800
                border: '#334155', // slate-700
                text: 'white',
                selectedBackground: '#2563eb', // blue-600
                selectedText: 'white',
                searchBg: '#334155', // slate-700
                cancelBg: '#334155' // slate-700
            }
        };

        const currentColors = colors[theme];

        // Crear modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        `;

        // Contenedor del contenido
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: ${currentColors.background};
            border: 1px solid ${currentColors.border};
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            padding: 1rem;
            max-width: 400px;
            width: 90%;
            max-height: 70vh;
            display: flex;
            flex-direction: column;
            color: ${currentColors.text};
        `;

        // Buscador
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Buscar...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid ${currentColors.border};
            border-radius: 0.25rem;
            background-color: ${currentColors.searchBg};
            color: ${currentColors.text};
        `;

        // Contenedor de opciones
        const optionList = document.createElement('div');
        optionList.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
        `;

        // Lógica de búsqueda en tiempo real
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            optionElements.forEach(optionElement => {
                const label = optionElement.querySelector('span').textContent.toLowerCase();
                optionElement.style.display = label.includes(searchTerm) ? '' : 'none';
            });
        });

        // Track selected values
        const currentlySelectedValues = new Set(selectedValues);
        const optionElements = [];

        // Crear opciones
        options.forEach(option => {
          const optionElement = document.createElement('div');
          optionElement.style.cssText = `
              display: flex;
              align-items: center;
              padding: 0.5rem;
              border: 1px solid ${currentColors.border};
              border-radius: 0.25rem;
              cursor: pointer;
              background-color: ${currentlySelectedValues.has(option.value) ? currentColors.selectedBackground : currentColors.background};
              color: ${currentlySelectedValues.has(option.value) ? currentColors.selectedText : currentColors.text};
              position: relative;
          `;
  
  

          // Checkbox para modo multi
          if (mode === 'multi') {
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.checked = currentlySelectedValues.has(option.value);
              checkbox.style.marginRight = '0.5rem';
              checkbox.style.accentColor = currentColors.selectedBackground;
              optionElement.appendChild(checkbox);
          }

          let mediaHoverOverlay = null;
          let hoverTimeoutId = null;
          if (option.image || option.path || option.mediaType) {
            // Create media element using the function
            const mediaElement = document.createElement('div');
            mediaElement.innerHTML = generateMediaElement({
                image: option.image, 
                path: option.path, 
                mediaType: option.mediaType,
                label: option.label
            });
            
            // Get the actual media element (img, video, or audio)
            const mediaChild = mediaElement.firstChild;
            
            // Apply styling consistent with your existing code
            mediaChild.style.cssText = `
                width: 30px;
                height: 30px;
                object-fit: cover;
                margin-right: 0.5rem;
                border-radius: 0.25rem;
                transition: transform 0.3s ease;
            `;
            
            // Hover event to show large preview
            mediaChild.addEventListener('mouseenter', (e) => {
              // Clear any existing timeout
              if (hoverTimeoutId) {
                clearTimeout(hoverTimeoutId);
              }
  
              // Delay creation of overlay to prevent quick disappearance
              hoverTimeoutId = setTimeout(() => {
                // Create overlay for large preview
                mediaHoverOverlay = document.createElement('div');
                mediaHoverOverlay.style.cssText = `
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 1002;
                  background: rgba(0,0,0,0.8);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  max-width: 300px;
                  max-height: 300px;
                  object-fit: contain;
                `;
  
                const largeMedia = mediaChild.cloneNode(true);
                largeMedia.style.cssText = `
                  max-width: 300px;
                  max-height: 300px;
                  object-fit: contain;
                `;
  
                mediaHoverOverlay.appendChild(largeMedia);
                document.body.appendChild(mediaHoverOverlay);
  
                // Event listeners to handle overlay interaction
                const hideOverlay = () => {
                  if (mediaHoverOverlay) {
                    document.body.removeChild(mediaHoverOverlay);
                    mediaHoverOverlay = null;
                  }
                };
  
                mediaHoverOverlay.addEventListener('mouseleave', hideOverlay);
                mediaHoverOverlay.addEventListener('click', hideOverlay);
              }, 200); // 200ms delay to stabilize hover
            });
  
            mediaChild.addEventListener('mouseleave', () => {
              // Clear timeout if mouse leaves before overlay appears
              if (hoverTimeoutId) {
                clearTimeout(hoverTimeoutId);
              }
            });
            
            optionElement.appendChild(mediaChild);
          }

          const label = document.createElement('span');
          label.textContent = option.label;
          optionElement.appendChild(label);

            // Lógica de selección
            optionElement.addEventListener('click', () => {
                if (mode === 'single') {
                    // Modo single: selección inmediata
                    document.body.removeChild(modal);
                    resolve({ values: [option.value] });
                } else {
                    // Modo multi: toggle selección
                    const checkbox = optionElement.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                    if (checkbox.checked) {
                        currentlySelectedValues.add(option.value);
                        optionElement.style.backgroundColor = currentColors.selectedBackground;
                        optionElement.style.color = currentColors.selectedText;
                    } else {
                        currentlySelectedValues.delete(option.value);
                        optionElement.style.backgroundColor = currentColors.background;
                        optionElement.style.color = currentColors.text;
                    }
                }
            });

            optionElements.push(optionElement);
            optionList.appendChild(optionElement);
        });

        // Botones para modo multi
        if (mode === 'multi') {
            const confirmButton = document.createElement('button');
            confirmButton.textContent = 'Confirmar Selección';
            confirmButton.style.cssText = `
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: ${currentColors.selectedBackground};
                color: ${currentColors.selectedText};
                border: none;
                border-radius: 0.25rem;
                cursor: pointer;
            `;

            confirmButton.addEventListener('click', () => {
                document.body.removeChild(modal);
                resolve({
                    values: Array.from(currentlySelectedValues)
                });
            });

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancelar';
            cancelButton.style.cssText = `
                margin-top: 1rem;
                margin-left: 0.5rem;
                padding: 0.5rem 1rem;
                background-color: ${currentColors.cancelBg};
                color: ${currentColors.text};
                border: 1px solid ${currentColors.border};
                border-radius: 0.25rem;
                cursor: pointer;
            `;

            cancelButton.addEventListener('click', () => {
                document.body.removeChild(modal);
                reject();
            });

            // Agregar buscador, lista de opciones y botones
            modalContent.appendChild(searchInput);
            modalContent.appendChild(optionList);
            modalContent.appendChild(confirmButton);
            modalContent.appendChild(cancelButton);
        } else {
            // Modo single: buscador y opciones
            modalContent.appendChild(searchInput);
            modalContent.appendChild(optionList);
        }

        // Agregar contenido al modal
        modal.appendChild(modalContent);

        // Evento para cerrar al hacer clic fuera
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                document.body.removeChild(modal);
                reject();
            }
        });

        // Prevenir que los clics dentro del contenido se propaguen y cierren el modal
        modalContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        // Agregar al documento
        document.body.appendChild(modal);

        // Enfocar buscador al abrir
        searchInput.focus();
    });
}
  /**
   * Method to set external options
   * @param {Array} options - List of options with `value`, `label`, and optional `description`
   */
  setOptions(options) {
      this.options = options;
  }
  normalizeValue(value) {
      // For primitive types (number, string, boolean), return as-is
      if (['number', 'string', 'boolean'].includes(typeof value)) {
          return value;
      }
      
      // For objects and arrays, use JSON stringify
      return JSON.stringify(value);
  }

  get value() {
      return this.mode === 'single' ? this.selectedValues[0] : this.selectedValues;
  }

  toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
          this.classList.add('dark');
      } else {
          this.classList.remove('dark');
      }
      
      // Dispatch dark mode change event
      this.dispatchEvent(new CustomEvent('darkModeChange', {
          detail: { isDarkMode: this.isDarkMode },
          bubbles: true
      }));
  }
      set value(newValues) {
      const valuesArray = Array.isArray(newValues) ? newValues : [newValues];
      this.setValues(valuesArray);
  }

}

customElements.define('flexible-modal-selector', FlexibleModalSelector);

class DynamicForm extends HTMLElement {
constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.fields = [];
    this.initialState = null;
    this.conditionalFields = new Map(); // Mapa para almacenar las relaciones condicionales
    this.beforeFormElements = []; // Nueva propiedad para almacenar elementos antes del formulario
    this.formConfig = {
        submitLabel: 'Submit',
        class: 'form-default',
        validateOnSubmit: true
    };
    this.boundHandleSubmit = this.handleSubmit.bind(this);
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
        <style>
            :host {
                display: block;
                font-family: system-ui, -apple-system, sans-serif;
                width: 100%;
            }
              .form-row {                 
                  border: 0.15rem solid transparent;
                  transition: all 0.5s ease;
              }
              .form-row:hover {
                  border-color:rgba(244, 244, 244, 0.6);
                  border-radius: 0.375rem;
                  margin: 0.1rem;
                  padding: 0.1rem             
              }
            .form-default {
                max-height: 90dvh;
                overflow-y: auto;
                padding: 1rem;
                border-radius: 0.5rem;
                background: white;
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
                display: grid
            }
            .hidden {
                display: none;
            }
            .w-full {
                width: 100%;
            }
            .flex {
                display: flex;
            }
            .justify-center {
                justify-content: center;
            }
            .items-center {
                align-items: center;
            }
            .justify-between {
                justify-content: space-between;
            }
            .text-justify {
                text-align: justify;
            }
            .form-group {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0.5rem;
                transition: all 0.5s ease;
                gap: 0.5rem;
                label {
                    margin-left: 10px;
                    font-size: 16px;
                }
            }
            .radio-group {
                
            }
            .radio-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex-wrap: wrap;    
                flex-flow: row-reverse;
                justify-content: space-between;
                label {
                    font-weight: 600;
                }
            }
            .form-group input[type="checkbox"] {
                width: 20px; /* Tamaño constante del checkbox */
                height: 20px; /* Tamaño constante del checkbox */
                appearance: none; /* Elimina el estilo predeterminado del checkbox */
                background-color: #f0f0f0; /* Color de fondo cuando no está chequeado */
                border: 2px solid #ccc; /* Color del borde */
                border-radius: 4px; /* Bordes redondeados */
                transition: background-color 0.3s ease, border-color 0.3s ease; /* Transiciones suaves para el color */
                outline: none; /* Elimina el contorno */
                cursor: pointer; /* Cambia el cursor al pasar sobre el checkbox */
            }

            .form-group input[type="checkbox"]:checked {
                background-color: #668ffd; /* Color de fondo cuando está chequeado */
                border-color: #786bb4; /* Color del borde cuando está chequeado */
            }

            label {
                display: flex;
                color: #374151;
            }
            input, select, textarea {
                min-width: 2.1rem;
                min-height: 2.1rem;
                width: auto;
                padding: 0.5rem;
                border: 1px solid #d1d5db;
                border-radius: 0.375rem;
                font-size: 1rem;
            }
            input[type="number"]  {max-width: 5rem; box-sizing: content-box;}
            input:focus, select:focus, textarea:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
            }
            .error-message {
                color: #dc2626;
                font-size: 0.875rem;
                margin-top: 0.25rem;
            }
            button[type="submit"] {
                background-color: #3b82f6;
                color: white;
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 0.375rem;
                font-size: 1rem;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            button[type="submit"]:hover {
                background-color: #2563eb;
            }
            .required label::after {
                content: " *";
                color: #dc2626;
            }
            .hidden-field {
                  max-height: 0;
                  opacity: 0;
                  overflow: hidden;
                  margin: 0;
                  padding: 0;
                  transition: 
                      max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      margin 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      padding 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                  pointer-events: none;
                  visibility: hidden;
              }

          .show {
              width: auto;
              opacity: 1;
              transform: scale(1);
              overflow: visible;
          }

            .disabled {
                pointer-events: none;
                opacity: 0.5;
            }
        </style>
        <form></form>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.form = this.shadowRoot.querySelector('form');
    const styleTag = this.shadowRoot.querySelector('style');
    styleTag.textContent += `
        /* Dark Mode Styles */
        .form-default.dark-mode {
            background: #1f2937;
            color: #f9fafb;
            box-shadow: 0 1px 3px 0 rgb(255 255 255 / 0.1);
        }
        
        .dark-mode label {
            color: #e5e7eb;
        }
        
        .dark-mode input, 
        .dark-mode select, 
        .dark-mode textarea {
            background-color: #2d3748;
            color: #f9fafb;
            border-color: #4a5568;
        }
        
        .dark-mode input[type="checkbox"] {
            background-color: #4a5568;
            border-color: #718096;
        }
        
        .dark-mode input[type="checkbox"]:checked {
            background-color: #4299e1;
            border-color: #3182ce;
        }
        
        .dark-mode .error-message {
            color: #fc8181;
        }
        
        .dark-mode button[type="submit"] {
            background-color: #4299e1;
            color: white;
        }
        
        .dark-mode button[type="submit"]:hover {
            background-color: #3182ce;
        }
    `;
    this.formConfig.darkMode = false;
    //this.emitchanges();
}
reRender(initialData = null) {
  // If initial data is provided, update the initial state

  this.filldata(initialData);
  // Clear existing form and re-render
  this.render();

  return this;
}
filldata(initialData) {
    if (initialData) {
      this.initialState = this._deepClone(initialData);
      console.log("initialState", this.initialState, initialData, this._deepClone(initialData));
      
      // Update field values based on the new initial data  
      this.fields.forEach(field => {
          // Check if the field exists in the initial data
          if (this.initialState[field.name] !== undefined) {
              // Handle different field types
              switch (field.type) {
                  case 'checkbox':
                      // Explicitly set checked state for checkboxes
                      field.checked = typeof this.initialState[field.name] === 'boolean' 
                      ? this.initialState[field.name] 
                      : !!this.initialState[field.name];
                      break;
                  case 'radio':
                      // For radio buttons, set the value
                      field.value = this.initialState[field.name];
                      break;
                  default:
                      // For other field types, set the value
                      field.value = this.initialState[field.name];
              }
              
              console.log("restoreInitialState", field.name, this.initialState[field.name]);
          }
      });
  }
}
updateFieldOptions(fieldName, newOptions) {
    // Buscar el campo en la configuración de campos
    const field = this.fields.find(f => f.name === fieldName);
    
    if (field) {
        // Actualizar las opciones en la configuración del campo
        field.options = newOptions;
        
        // Buscar el elemento en el DOM
        const fieldElement = this.form.querySelector(`[name="${fieldName}"]`);
        
        if (fieldElement) {
            switch (field.type) {
                case 'select':
                    // Limpiar opciones existentes
                    fieldElement.innerHTML = '';
                    
                    // Añadir nuevas opciones
                    newOptions.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.value;
                        optionElement.textContent = option.label;
                        fieldElement.appendChild(optionElement);
                    });
                    break;
                
                case 'modal-selector':
                case 'flexible-modal-selector':
                    // Usar el método setOptions del componente personalizado
                    fieldElement.setOptions(newOptions);
                    break;
                
                case 'radio':
                    // Rerender el grupo de radio buttons
                    const radioGroup = fieldElement.closest('.radio-group');
                    if (radioGroup) {
                        radioGroup.innerHTML = '';
                        newOptions.forEach(option => {
                            const radioWrapper = document.createElement('div');
                            radioWrapper.className = 'radio-item';
                            
                            const radioInput = document.createElement('input');
                            radioInput.type = 'radio';
                            radioInput.id = `${fieldName}_${option.value}`;
                            radioInput.name = fieldName;
                            radioInput.value = option.value;
                            
                            const radioLabel = document.createElement('label');
                            radioLabel.setAttribute('for', `${fieldName}_${option.value}`);
                            radioLabel.textContent = option.label;
                            
                            radioWrapper.appendChild(radioInput);
                            radioWrapper.appendChild(radioLabel);
                            radioGroup.appendChild(radioWrapper);
                        });
                    }
                    break;
            }
        }
    }
    
    return this;
}
updateFieldAttribute(fieldName, attribute, value) {
  const field = this.fields.find(f => f.name === fieldName);
  
  if (field) {
      // Actualizar el atributo en la configuración del campo
      field[attribute] = value;
      
      const fieldElement = this.form.querySelector(`[name="${fieldName}"]`);
      
      if (fieldElement) {
          switch (attribute) {
              case 'required':
                  fieldElement.required = value;
                  break;
              case 'disabled':
                  fieldElement.disabled = value;
                  break;
              case 'min':
              case 'max':
              case 'step':
                  if (fieldElement.tagName === 'INPUT') {
                      fieldElement[attribute] = value;
                  }
                  break;
              // Puedes agregar más casos según sea necesario
          }
      }
  }
  
  return this;
}
_deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
addBeforeForm(elementConfig) {
    const defaultConfig = {
        type: 'div', // Tipo de elemento por defecto
        content: '', // Contenido del elemento
        className: '', // Clases CSS opcionales
        attributes: {}, // Atributos adicionales
        eventListeners: [] // Listeners de eventos opcionales
    };

    const config = { ...defaultConfig, ...elementConfig };
    
    // Crear el elemento
    const element = document.createElement(config.type);
    
    // Añadir contenido
    if (config.content) {
        element.innerHTML = config.content;
    }
    
    // Añadir clases
    if (config.className) {
        element.className = config.className;
    }
    
    // Añadir atributos
    Object.entries(config.attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    
    // Añadir event listeners
    config.eventListeners.forEach(({ event, handler }) => {
        element.addEventListener(event, handler);
    });
    
    // Almacenar el elemento para renderizarlo después
    this.beforeFormElements.push(element);
    
    return this;
}
initialize(initialData = null,config = {}) {
    // Limpiar estado previo
    this.fields = [];
    this.formConfig = {
        submitLabel: 'Submit',
        class: 'form-default',
        validateOnSubmit: true,
        ...config
    };
    this.filldata(initialData);
    // Remover el formulario anterior y crear uno nuevo
    const oldForm = this.shadowRoot.querySelector('form');
    if (oldForm) {
        oldForm.remove();
    }
    
    const newForm = document.createElement('form');
    newForm.className = this.formConfig.class;
    this.shadowRoot.appendChild(newForm);
    this.form = newForm;
    return this;
}
setSubmitButton(options = {}) {
  const submitButton = this.form.querySelector('button[type="submit"]');
    if (submitButton) {
        if (options.label) submitButton.textContent = options.label;
        if (options.disabled !== undefined) submitButton.disabled = options.disabled;
        if (options.className) submitButton.className = options.className;
    }
    return this;
}
addField(fieldConfig, options = {}) {
    const defaultConfig = {
        type: 'text',
        required: false,
        label: '',
        name: '',
        placeholder: '',
        value: '',
        options: [],
        validators: [],
        errorMessage: '',
        pattern: '',
        title: '',
        showWhen: null // Nuevo: Configuración para mostrar condicionalmente
    };
    const config = { ...defaultConfig, ...fieldConfig,
        rowGroup: options.rowGroup || null
    };
    // Si el campo tiene condiciones, registrarlas
    if (config.showWhen) {
        const { field: parentField, value: triggerValue } = config.showWhen;
        if (!this.conditionalFields.has(parentField)) {
            this.conditionalFields.set(parentField, []);
        }
        this.conditionalFields.get(parentField).push({
            fieldName: config.name,
            triggerValue
        });
    }

    // Si hay estado inicial y existe un valor para este campo, usarlo
    if (this.initialState && this.initialState[config.name] !== undefined) {
        config.value = this.initialState[config.name];
    }


    this.fields.push(config);
    return this;
}

createFieldHTML(field) {
    const wrapper = document.createElement('div');
    wrapper.className = `form-group ${field.required ? 'required' : ''}`;
    wrapper.setAttribute('data-field', field.name);
    //console.log("init field",field)
    if (field.showWhen) {
        wrapper.classList.add('hidden-field');
    }

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);
    wrapper.appendChild(label);

    let input;

    //addField config
    switch (field.type) {
        case 'flexible-modal-selector':
            input = document.createElement('flexible-modal-selector');
            input.id = field.name;
            input.setAttribute('name', field.name);
            input.setAttribute('mode', field.mode || 'single');
            input.setAttribute('theme', field.theme || 'light');
            input.toggleDarkMode();
            // Configurar el evento change del modal-selector
            input.addEventListener('change', (e) => {
                // Si hay campos condicionales que dependen de este
                if (this.conditionalFields.has(field.name)) {
                    this.handleFieldChange(field.name, e.detail.values);
                }
            });
            
            if (field.options) input.setOptions(field.options);
            // Si hay un valor inicial, establecerlo
            if (field.value) {
                input.setValues(field.value);
            }
            break;
        case 'modal-selector': // Nuevo tipo para el selector modal
            input = document.createElement('modal-selector');
            input.id = field.name;
            input.setAttribute('name', field.name);
            
            // Configurar el evento change del modal-selector
            input.addEventListener('change', (e) => {
                // Si hay campos condicionales que dependen de este
                if (this.conditionalFields.has(field.name)) {
                    this.handleFieldChange(field.name, e.detail.value);
                }
            });
            if (field.options) input.setOptions(field.options);
            // Si hay un valor inicial, establecerlo
            if (field.value) {
                input.setValue(field.value, field.valueLabel || field.value);
            }
            break;
        case 'radio':
            const radioContainer = document.createElement('div');
            radioContainer.className = 'radio-group';
            
            field.options.forEach(option => {
                const radioWrapper = document.createElement('div');
                radioWrapper.className = 'radio-item';
                
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.id = `${field.name}_${option.value}`;
                radioInput.name = field.name;
                radioInput.value = option.value;
                
                if (field.value === option.value) {
                    radioInput.checked = true;
                }
                
                if (field.required) {
                    radioInput.required = true;
                }
                
                // Agregar evento change para campos condicionales
                radioInput.addEventListener('change', () => this.handleFieldChange(field.name, option.value));
                
                const radioLabel = document.createElement('label');
                radioLabel.setAttribute('for', `${field.name}_${option.value}`);
                radioLabel.textContent = option.label;
                
                radioWrapper.appendChild(radioInput);
                radioWrapper.appendChild(radioLabel);
                radioContainer.appendChild(radioWrapper);
            });
            
            input = radioContainer;
            break;

        case 'select':
            input = document.createElement('select');
            field.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                if (field.value === option.value) {
                    optionElement.selected = true;
                }
                input.appendChild(optionElement);
            });
            
            // Agregar evento change para campos condicionales
            if (this.conditionalFields.has(field.name)) {
                input.addEventListener('change', (e) => this.handleFieldChange(field.name, e.target.value));
            }
            break;
            
        case 'textarea':
            input = document.createElement('textarea');
            input.rows = field.rows || 3;
            input.value = field.value;
            break;
        case 'links':
          // creamos elementos de url solamente de referencia no es un input
            input = document.createElement('div');
            input.className = 'input-default';
            input.innerHTML = `
              <div class="flex flex-row gap-2">
                  <a href="${field.value[0]}" target="_blank" class="text-blue-500 hover:text-blue-600">${field.value[0]}</a>
                  <a href="${field.value[1]}" target="_blank" class="text-blue-500 hover:text-blue-600">${field.value[1]}</a>
              </div>
            `;
            break;
          case 'content':
              input = document.createElement('div');
              if (field.className) input.className = field.className;
              input.innerHTML = `
                <div class="input-default">
                  ${field.label || field.value}
                </div>
              `;
              break;
        default:
            //console.log("field",field)
            input = document.createElement('input');
            input.type = field.type;
            input.value = field.value;
            if(field.min) input.min = field.min;
            if(field.max) input.max = field.max;
            if(field.step) input.step = field.step;
            if(field.placeholder) input.placeholder = field.placeholder;
            if(field.required) input.required = true;
            if(field.value) input.value = field.value;
            if(field.pattern) input.pattern = field.pattern;
            if ('checked' in input) {
                // Check if field.value is boolean
                if (typeof field.value === 'boolean') {
                    input.checked = field.value;
                    field.checked = field.value;
                    input.value = field.value.toString();
                } 
                // Check if field.checked is boolean
                if (typeof field.checked === 'boolean') {
                    input.checked = field.checked;
                    input.value = field.checked.toString();
                }
            }
            if(field.hidden) input.classList.add('hidden');
            if(field.readonly) input.readOnly = true;
            if(field.disabled) input.disabled = true;
            if(field.className) input.className = field.className;
            setTimeout(() => {
              if (input)this.handleFieldChange(field.name, field.checked || field.value);
            }, 100);
            input.addEventListener('change', (e) => {
                this.handleFieldChange(field.name, e.target.checked || e.target.value);
            });
    }
    
    if (field.type !== 'radio') {
        input.id = field.name;
        input.name = field.name;
        input.placeholder = field.placeholder;
        if (field.required) input.required = true;
    }
    
    wrapper.appendChild(input);
    
    if (field.errorMessage) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = field.errorMessage;
        wrapper.appendChild(errorDiv);
    }
    
    return wrapper;
}
getValues() {
    const formData = new FormData(this.form);
    const values = {};
    
    // Iteramos sobre los campos definidos en lugar de FormData
    this.fields.forEach(field => {
        const element = this.form.querySelector(`[name="${field.name}"]`);
        
        if (!element) return;

        switch (field.type) {
          case 'flexible-modal-selector':
              // For flexible-modal-selector, parse the value
              const rawValue = element.value;
              if (rawValue !== undefined && rawValue !== null) {
                values[field.name] = typeof rawValue === 'string' && rawValue.includes(',')
                    ? rawValue.split(',').map(v => v.trim())  // Múltiples valores como cadena
                    : Array.isArray(rawValue) 
                        ? rawValue  // Ya es un arreglo
                        : rawValue;  // Número u otro tipo, envuelto en un arreglo
            }
              break;
            case 'checkbox':
                // Para checkboxes, usamos la propiedad checked
                values[field.name] = element.checked;
                break;
                
            case 'number':
            case 'range':
                // Para números, convertimos el valor a número
                const numValue = element.value === '' ? null : Number(element.value);
                values[field.name] = numValue;
                break;
                
            case 'radio':
                // Para radio buttons, obtenemos el valor del seleccionado
                const checkedRadio = this.form.querySelector(`input[name="${field.name}"]:checked`);
                values[field.name] = checkedRadio ? checkedRadio.value : null;
                break;
                
            default:
                // Para el resto de tipos, usamos el valor directo
                values[field.name] = formData.get(field.name);
        }
    });
    
    return values;
}

validateField(field, value) {
    // Modificamos la validación para manejar correctamente los tipos
    if (field.required) {
        switch (field.type) {
            case 'checkbox':
                // Para checkbox requerido, debe estar marcado
                if (!value) return 'Este campo es requerido';
                break;
                
            case 'number':
            case 'range':
                // Para números, verificamos que no sea null o undefined
                if (value === null || value === undefined) return 'Este campo es requerido';
                break;
                
            default:
                // Para otros tipos, verificamos que no esté vacío
                if (!value && value !== 0) return 'Este campo es requerido';
        }
    }

    // Ejecutamos los validadores personalizados
    for (const validator of field.validators) {
        const errorMessage = validator(value);
        if (errorMessage) return errorMessage;
    }

    return '';
}


render() {
    this.form.removeEventListener('submit', this.boundHandleSubmit);
    this.form.innerHTML = '';
    
    // Group fields by row
    const rowGroups = new Map();
    this.fields.forEach(field => {
        if (field.rowGroup) {
            if (!rowGroups.has(field.rowGroup)) {
                rowGroups.set(field.rowGroup, []);
            }
            rowGroups.get(field.rowGroup).push(field);
        }
    });
            // Render fields
    this.fields.forEach(field => {
        // Skip fields that are part of a row group (they'll be rendered together)
        if (field.rowGroup) return;

        const fieldElement = this.createFieldHTML(field);
        this.form.appendChild(fieldElement);
    });

    rowGroups.forEach(rowFields => {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'form-row';

        rowFields.forEach(field => {
            const fieldElement = this.createFieldHTML(field);
            rowContainer.appendChild(fieldElement);
        });

        this.form.appendChild(rowContainer);
    });
    this.conditionalFields.forEach((_, parentFieldName) => {
        const parentField = this.fields.find(f => f.name === parentFieldName);
        if (parentField) {
            let currentValue;
            if (parentField.type === 'radio') {
                const checkedRadio = this.form.querySelector(`input[name="${parentFieldName}"]:checked`);
                currentValue = checkedRadio ? checkedRadio.value : null;
            } else {
                const input = this.form.querySelector(`[name="${parentFieldName}"]`);
                currentValue = input ? input.value : null;
            }
            if (currentValue) {
                this.handleFieldChange(parentFieldName, currentValue);
            }
        }
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = this.formConfig.submitLabel;
    this.form.appendChild(submitButton);

    this.form.addEventListener('submit', this.boundHandleSubmit);
/*       this.fields.forEach(field => {
      const inputs = this.form.querySelectorAll(`[name="${field.name}"]`);
      //console.log("input",input)
      inputs.forEach(input => {
          ['change','input'].forEach(eventType => {
             input.addEventListener(eventType, () => {
              this.emitchanges()
             });
         });
      })
    }); */
    this.beforeFormElements.forEach(element => {
        this.form.appendChild(element);
    });
    return this;
}
clearBeforeFormElements() {
    this.beforeFormElements = [];
    return this;
}
toggleDarkMode(enabled = !this.formConfig.darkMode) {
    this.formConfig.darkMode = enabled;
    const formContainer = this.shadowRoot.querySelector('form');
    if (!this.shadowRoot.querySelector('.form-default')) {
      formContainer.classList.add('form-default');
    };

    if (enabled) {
        formContainer.classList.add('dark-mode');
    } else {
        formContainer.classList.remove('dark-mode');
    }
}
emitchanges(){
  this.dispatchEvent(new CustomEvent('form-change', {
                  detail: this.getValues(),
                  bubbles: true,
                  composed: true
              }));
}
disconnectedCallback() {
    if (this.form) {
        this.form.removeEventListener('submit', this.boundHandleSubmit);
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        this.toggleDarkMode(prefersDarkScheme.matches);

        prefersDarkScheme.addListener((e) => {
            this.toggleDarkMode(e.matches);
        });

    }
}
handleFieldChange(fieldName, value) {
  const dependentFields = this.conditionalFields.get(fieldName) || [];
  this.emitchanges()
  dependentFields.forEach(({ fieldName: dependentFieldName, triggerValue }) => {
      const fieldElement = this.form.querySelector(`[data-field="${dependentFieldName}"]`);
      if (!fieldElement) return;
        // Si triggerValue es un array, verificamos si el valor está incluido
        const shouldShow = Array.isArray(triggerValue) 
          ? triggerValue.includes(value)
          : triggerValue === value;
      
          fieldElement.classList.toggle('hidden-field', !shouldShow);
          
          // Instantly add/remove 'show' class
          if (shouldShow) {
              fieldElement.classList.add('show');
          } else {
              fieldElement.classList.remove('show');
          }


        // Si el campo está oculto, limpiamos su valor
/*           if (!shouldShow) {
                  const input = fieldElement.querySelector('input, select, textarea');
                  if (input) {
                    if (input.type === 'radio') {
                        const radios = fieldElement.querySelectorAll('input[type="radio"]');
                        radios.forEach(radio => radio.checked = false);
                    }
                  if (input.type === 'checkbox') {
                      input.checked = false;
                  }
            }
      }  */
    });
}
handleSubmit(e) {
    e.preventDefault();
        
    if (this.formConfig.validateOnSubmit) {
        let isValid = true;
        const values = this.getValues();

        this.fields.forEach(field => {
            const errorMessage = this.validateField(field, values[field.name]);
            if (errorMessage) {
                isValid = false;
                const fieldElement = this.form.querySelector(`[name="${field.name}"]`);
                const errorDiv = fieldElement.parentNode.querySelector('.error-message') ||
                    document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = errorMessage;
                if (!fieldElement.parentNode.querySelector('.error-message')) {
                    fieldElement.parentNode.appendChild(errorDiv);
                }
            }
        });

        if (!isValid) return;
    }

    this.dispatchEvent(new CustomEvent('form-submit', {
        detail: this.getValues(),
        bubbles: true,
        composed: true
    }));
}

}

customElements.define('dynamic-form', DynamicForm);