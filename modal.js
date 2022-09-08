const projects = [
  {
    id: 1,
    name: 'React Reserve',
    technologies: 'MERN Stack',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './project-1.gif',
    linktoliveserver: 'https://reactbootcamp.com',
    linktosource: 'https://reactbootcamp.com',
  },
  {
    id: 2,
    name: 'Js Reserve',
    technologies: 'Js Stack',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './project-1.gif',
    linktoliveserver: 'https://reactbootcamp.com',
    linktosource: 'https://reactbootcamp.com',
  },
  {
    id: 3,
    name: 'html Reserve',
    technologies: 'MERN Stack',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './project-1.gif',
    linktoliveserver: 'https://reactbootcamp.com',
    linktosource: 'https://reactbootcamp.com',
  },
  {
    id: 4,
    name: 'css Reserve',
    technologies: 'css Stack',
    description: 'rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    featuredimage: './project-1.gif',
    linktoliveserver: 'https://reactbootcamp.com',
    linktosource: 'https://reactbootcamp.com',
  },
];
const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container');
// function assignValue(itemId) {
  const found = projects.find((element) => element.id === itemId);
  document.getElementById('greeting').innerHTML = found.name;
  document.getElementById('say').innerHTML = found.technologies;
  document.getElementById('hey').innerHTML = found.description;
  document.getElementById('hi').innerHTML = found.featuredimage;
  document.getElementById('sayy').innerHTML = found.linktoliveserver;
  document.getElementById('sayyy').innerHTML = found.linktosource;
  modalContainer.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});