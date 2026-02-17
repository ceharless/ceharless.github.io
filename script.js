document.addEventListener('DOMContentLoaded', () => {

  /* Hero "cool reveal" */
  document.body.classList.add('hero-animate');

  /* Flip cards: click (no hover) */
  document.querySelectorAll('.js-flip').forEach(card => {
    const toggle = () => card.classList.toggle('is-flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
