console.log("Hello World!");


// 1. Selecionando todas as imagens
const images = document.querySelectorAll('img');

// 4. Quando é feito um click na imagem a roundImage é executada
const roundImage = (event) => {
  const img = event.currentTarget;
  img.classList.toggle('img-circle');
};

// 3. Para cada imagem escutamos o evento de click
const bindImage = (image) => {
  // debugger;
  image.addEventListener('click', roundImage);
};

// 2. Para cada imagem chamamos o bindImage
images.forEach(bindImage);

// ===================================================================


// O mesmo que o exemplo anterior, usando funções anônimas
//const images = document.querySelectorAll('img');

// images.forEach((image) => {
//   image.addEventListener('click', (event) => {
//     const img = event.currentTarget;
//     img.classList.toggle('img-circle');
//   });
// });


// =======================================================================


// Selecionando apenas uma imagem e escutando o evento de click

// const romain = document.getElementById('romain');
// romain.addEventListener('click', (event) => {
//   const img = event.currentTarget;

//   img.classList.toggle('img-circle');
// });


// ==========================================================================

// Prefira sempre arrow functions
// function teste() {}
// const teste = () => {}


// ==========================================================================


// Exemplos com ES6 e Ruby

// ES6
// const add = (num) => {
// }
// [1,2,3,4].forEach(add)

// // Ruby
// def add(num)
// end

// [1,2,3,4].each do |num|
//   add(num)
// end
