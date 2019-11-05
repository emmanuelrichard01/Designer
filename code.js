const logo = document.querySelectorAll('#logo path');
const line = document.querySelector('#logo line');
const animate = document.querySelector('button');
const fill = document.querySelector('#logo');
const reload = document.querySelector('.reload');

for (let i = 0; i < logo.length; i++) {
  const element = logo[i];
  console.log(`letter ${i} is ${element.getTotalLength()}`);
}
console.log(`line is ${line.getTotalLength()}`);
//Animate

animate.addEventListener('click', () => {
  fill.classList.toggle('active');
  line.classList.toggle('line-active');
  //animate
  logo.forEach((link, index) => {
    console.log(index);
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `lineMove 1.2s ease-in-out forwards ${index / 8 +
        0.3}s`;
    }
  });
  x;
});

// reload page
reload.addEventListener('click', () => {
  window.location.reload();
});
/*------------Another----------*/
const navSlide = () => {
  const buger = document.querySelector('.buger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Nav Toggle
  buger.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Buger Animation
    buger.classList.toggle('toggle');
    //Links Animations
    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  });
};

navSlide();
