document.documentElement.classList.add('js');
const toc = document.querySelector('.toc');
const toggle = toc && toc.querySelector('.toc-toggle');
if (toggle) {
  toggle.hidden = false;
  const sign = toggle.querySelector('.sign');
  const setOpen = open => {
    toc.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    sign.textContent = open ? '−' : '+';
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  toc.querySelector('nav').addEventListener('click', event => {
    if (event.target.closest('a') && matchMedia('(max-width: 900px)').matches) setOpen(false);
  });
}
