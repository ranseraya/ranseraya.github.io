const aboutMeBtn = document.querySelectorAll('.about-btn');
const aboutContent = document.querySelectorAll('#about-detail div');

const projectItem = document.querySelectorAll('.project-item');
const projectBtn = document.querySelectorAll('.project-btn');
const projectMoreBtn = document.getElementById('load-more-btn');

aboutMeBtn.forEach(button => {
  button.addEventListener('click', function() {

    const target = button.getAttribute('data-target');
    aboutMeBtn.forEach(btn => btn.classList.remove('active'));
    aboutContent.forEach(content => content.classList.add('hidden'));
    this.classList.add('active');
    document.getElementById(target).classList.remove('hidden');
    AOS.refresh();
  });
});

projectBtn.forEach(button =>{
  button.addEventListener('click', function() {
    projectBtn.forEach(btn => btn.classList.remove('active'));

    this.classList.add('active');
  })
})


let visibleProjects = 6; 
let currentFilter = 'all';
function showProjects(filter) {
  let count = 0;
  projectItem.forEach(project => {
      if (filter === 'all' || project.classList.contains(filter)) {
          if (count < visibleProjects) {
              project.classList.add('show');
          } else {
              project.classList.remove('show');
          }
          count++;
      } else {
          project.classList.remove('show');
      }
  });

  if (count > visibleProjects) {
      projectMoreBtn.style.display = 'block';
  } else {
      projectMoreBtn.style.display = 'none';
  }
}

projectBtn.forEach(button => {
  button.addEventListener('click', () => {
      visibleProjects = 6;

      projectBtn.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      currentFilter = button.getAttribute('data-filter');
      showProjects(currentFilter);
  });
});

projectMoreBtn.addEventListener('click', () => {
  visibleProjects += 6;
  showProjects(currentFilter);
});

showProjects(currentFilter);





// Typing animation Home
let txt = ["Hi! I'm Ayala", "Informatic Student"]; 
let currentTextIndex = 0;
let currentCharIndex = 0;
let speed = 200;
let delayBetweenTexts = 1000;

function typeWriter() {
  if (currentCharIndex < txt[currentTextIndex].length) {
    document.getElementById("greeting").innerHTML += txt[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      currentCharIndex = 0;
      currentTextIndex = (currentTextIndex + 1) % txt.length;
      document.getElementById("greeting").innerHTML = '';
      typeWriter();
    }, delayBetweenTexts); 
  }
}

document.getElementById("greeting").innerHTML = '';
typeWriter(); 


// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});


// navbar menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show'); 
  navbar.classList.toggle('expanded'); 
});

