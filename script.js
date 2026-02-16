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

  /* Carousel helpers */
  function wireCarousel(trackId, prevId, nextId) {
    const track = document.getElementById(trackId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    if (!track || !prev || !next) return;

    const step = () => {
      const first = track.querySelector(':scope > *');
      return first ? (first.getBoundingClientRect().width + 16) : 420;
    };

    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') track.scrollBy({ left: -step(), behavior: 'smooth' });
      if (e.key === 'ArrowRight') track.scrollBy({ left: step(), behavior: 'smooth' });
    });
  }

  wireCarousel('timelineTrack', 'timelinePrev', 'timelineNext');
  wireCarousel('writingTrack', 'writingPrev', 'writingNext');
});