let arr = [
  {
    card_title: "Solar system",
    card_text: "I creat all type of animation",
    link: "https://mateen2311.github.io/solar/",
    image: "./img/sun.png",
  },
  {
    card_title: "WEATHER APP",
    card_text: "This is my weather-app i creat this using API'S",
    link: "https://mateen2311.github.io/weather-app/",
    image: "./img/weather.png",
  },
  {
     card_title: "Add to cart",
     card_text: "I creat all type of ecommerce site",
     link: "https://mateen2311.github.io/addtocart/",
     image: "./img/addToCart.png",
   },
   {
     card_title: "API USING Movies list",
     card_text: "I used all types of api's and creat all types of dynamic site",
     link: "https://mateen2311.github.io/apiMovies/",
     image: "./img/api.png",
   },
];
function displayCards(){
     let str = '';
     arr.forEach(function (data, index){
          str+= `
          <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <div class="card my-3" style="width: 18rem;">
          <img style="height:150px" src=${data.image} class="card-img-top" alt="...">
          <div style="height:200px;" class="card-body">
            <h3 class="card-title">${data.card_title}</h3>
            <p class="card-text">${data.card_text}</p>
            <a href=${data.link} target="_blank" class="btn btn-secondary">see this animation</a>
          </div>
        </div>
      </div>
      `
     })
     document.querySelector('.row').innerHTML = str;
}
displayCards()