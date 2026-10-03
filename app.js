(() => {
  'use strict';
  const projects = [...document.querySelectorAll('[data-project-name]')];
  document.querySelectorAll('.project-count').forEach(el => {
    el.textContent = String(projects.length).padStart(2, '0');
  });
  const dialog = document.querySelector('#image-dialog');
  const enlargedImage = document.querySelector('#dialog-image');
  const caption = document.querySelector('#image-caption');
  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const picture = gallery.querySelector('.project-image');
    const opener = gallery.querySelector('[data-open-image]');
    const choices = [...gallery.querySelectorAll('.screenshot-choice')];
    choices.forEach(choice => choice.addEventListener('click', () => {
      choices.forEach(button => button.setAttribute('aria-pressed', String(button === choice)));
      picture.src = choice.dataset.src;
      picture.alt = choice.dataset.alt;
      opener.setAttribute('aria-label', 'Enlarge ' + choice.dataset.caption + ' screenshot');
    }));
    opener.addEventListener('click', () => {
      const chosen = choices.find(button => button.getAttribute('aria-pressed') === 'true');
      enlargedImage.src = picture.src;
      enlargedImage.alt = picture.alt;
      caption.textContent = chosen.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
