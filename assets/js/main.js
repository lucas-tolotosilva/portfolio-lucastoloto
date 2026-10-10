document.getElementById('ano').textContent = new Date().getFullYear();

const prefereMovimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefereMovimentoReduzido && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('reveal-visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observador.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('reveal-visivel'));
}

const nav = document.querySelector('.topo');
const secoesComNav = document.querySelectorAll('main section[id], #contato');
const linksNav = document.querySelectorAll('.nav-links a');

if (nav && secoesComNav.length && linksNav.length && 'IntersectionObserver' in window) {
  const observadorNav = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        linksNav.forEach((link) => {
          link.classList.toggle('ativo', link.getAttribute('href') === `#${entrada.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  secoesComNav.forEach((secao) => observadorNav.observe(secao));
}
