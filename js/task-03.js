const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const listImagesEl = document.querySelector(".gallery");

const makeGaleryEl = ({ url, alt }) => {
  return `<li> <img src ="${url}" alt ="${alt}" width ="400" height ="400"></li>`;
  
};

const addingTags = images.map(makeGaleryEl).join("");
listImagesEl.insertAdjacentHTML("beforebegin", addingTags);




// const listImagesEl = document.querySelector(".gallery");

// const makeGaleriEl = ({ url, alt }) => {
//   const addingTags = `<li> <img src ="${url}" alt ="${alt}" width ="400" height ="400"></li>`;

//   listImagesEl.insertAdjacentHTML("beforebegin", addingTags);
// };

// const addingGaleryImg = images.forEach(makeGaleriEl);