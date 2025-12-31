function toggleSubscription(type) {
  const singleCard = document.getElementById('single-card');
  const doubleCard = document.getElementById('double-card');

  if (type === 'single') {
    singleCard.classList.add('active');
    doubleCard.classList.remove('active');
    // Ensure the proper header/badge appears on top
    singleCard.insertAdjacentHTML('afterbegin', '<div class="promo-header" id="dynamic-promo">Most Popular</div>');
    const existingPromo = doubleCard.querySelector('.promo-header');
    if (existingPromo) existingPromo.remove();
  } else {
    doubleCard.classList.add('active');
    singleCard.classList.remove('active');
    // Move the 'Most Popular' badge to the double card
    doubleCard.insertAdjacentHTML('afterbegin', '<div class="promo-header" id="dynamic-promo">Most Popular</div>');
    const existingPromo = singleCard.querySelector('.promo-header');
    if (existingPromo) existingPromo.remove();
  }
}