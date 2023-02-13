var slides = document.querySelectorAll('.imageSlider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}


var productHomePage = () => {



    var homePageData = new XMLHttpRequest();
    homePageData.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/product", true);
    homePageData.send();
    homePageData.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {
            // console.log(this.responseText);
            // console.log(typeof(this.responseText));
            var data = JSON.parse(this.responseText);


            for (i = 0; i < data.length; i++) {
                // console.log(data[i]);

                var anchorTag = document.createElement('a');
                anchorTag.href = "projectDetailPage.html?productId=" + data[i].id;
                anchorTag.className = "anchorLink";
                anchorTag.id = "anchorId" + [i];

                // console.log(anchorTag)


                var clothing = document.createElement('div');
                clothing.className = "clothingDiv"
                var accessories = document.createElement('div');


                var clothImage = document.createElement('img');
                clothImage.src = data[i].preview;
                clothImage.classList.add('clothImage');

                var headingName = document.createElement('h4');
                headingName.innerText = data[i].name;
                headingName.className = 'headingName';

                var brandName = document.createElement('h5');
                brandName.innerText = data[i].brand;
                brandName.className = "brandName";

                var price = document.createElement('p');
                price.innerText = "Rs " + data[i].price;
                price.className = "price";

                clothing.append(clothImage, headingName, brandName, price)

                // console.log(clothImage);

                if (data[i].isAccessory == true) {
                    document.getElementById('accessoriesId').append(clothing, anchorTag);
                }
                else {
                    document.getElementById('clothingId').append(clothing, anchorTag)

                }

                anchorTag.append(clothing);

            }
            
            // var count = document.getElementById('count');
            // let carItem = 0;
            // if(localStorage.getItem('cartCount')){
            //     carItem = parseInt(localStorage.getItem('cartCount'));
            // }
            // count.innerText = carItem;
            // let cartItem = [];
            // if (localStorage.getItem('cartItem')) {
            //     cartItem = JSON.parse(localStorage.getItem('cartItems'));
            // }
            // console.log(carItem)
        }
    }
}
productHomePage();