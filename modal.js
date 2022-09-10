const projects = [
  {
    id: '1',
    name: 'task tracker',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omniadipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/desktop-images/SnapshootPortfolio.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '2',
    name: 'Js Reserve',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praerem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnisentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/desktop-images/SnapshootPortfolio1.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '3',
    name: 'Piggy Bank Html',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerumrem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omni laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/desktop-images/SnapshootPortfolio2.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '4',
    name: 'Ecommerce',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sinrem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnit nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/desktop-images/SnapshootPortfolio3.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '5',
    name: 'Food tracker',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptatrem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnie exercitationem eius?',
    featuredimage: './assets/Snapshoot.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '6',
    name: 'Animal Reserve',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eirem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnius?',
    featuredimage: './assets/snapshoot1.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '7',
    name: 'Music Place Website',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnirem ipsum dolor sit amet consectetur adipisicirem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omning elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './assets/snapshoot2.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
  {
    id: '8',
    name: 'Face Recognition Project',
    technologies: 'html',
    technologiess: 'css',
    technologiesss: 'javaScript',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eirem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnius?',
    featuredimage: './assets/snapshoot3.png',
    linktoliveserver: 'https://lolashot.github.io/My-Complete-Portfolio',
    linktosource: 'https://github.com/lolashot/My-Complete-Portfolio/',
  },
];

const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container');

const nodeList = document.querySelectorAll('.open-modal');
nodeList.forEach((element) => element.addEventListener('click', (event) => {
  const found = projects.find((element) => element.id === event.target.id);
  document.getElementById('name').innerHTML = found.name;
  document.getElementById('technology1').innerHTML = found.technologies;
  document.getElementById('technology2').innerHTML = found.technologiess;
  document.getElementById('technology3').innerHTML = found.technologiesss;
  document.getElementById('description').innerHTML = found.description;
  document.getElementById('image').src = found.featuredimage;
  document.getElementById('live').href = found.linktoliveserver;
  document.getElementById('source').href = found.linktosource;
  modalContainer.style.display = 'block';
}));

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});