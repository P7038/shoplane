var productDetail = () => {

    var locationPage = location.search;
    var productId = locationPage.substring(locationPage.lastIndexOf('=') + 1);
    // console.log(locationPage);

    var url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId;
    var homePageData = new XMLHttpRequest();
    homePageData.open("GET", url, true);
    homePageData.send();
    homePageData.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {
            // console.log(this.responseText);
            // console.log(typeof(this.responseText));
            var data = JSON.parse(this.responseText);


            var main_div = document.getElementById('main_div');
            var main_div2 = document.getElementById('details');


            var photo = document.getElementById('photo');
            var preview = document.createElement("img");
            preview.src = data.preview;
            preview.className = "singleImage";
            preview.id = "leftImage";
            photo.append(preview);

            // for (var i in data) {

            var title = document.createElement('h1');
            title.innerHTML = data.name;
            title.className = "title";

            // console.log(title)


            var brand = document.createElement('h3');
            brand.innerHTML = data.brand;
            brand.className = "brand";

            // console.log(brand)

            var price = document.createElement('h3');
            price.innerHTML = "Price : Rs " + data.price;
            price.className = "price";

            // console.log(price)

            var description_div = document.createElement('div');
            var description = document.createElement('h3');
            description.innerHTML = "Description";
            description.className = "description";
            description.id = "brand1";

            var description_para = document.createElement('p');
            description_para.innerHTML = data.description;
            description_para.className = "para";
            description_div.append(description, description_para);

            var product_heading = document.createElement('h3');
            product_heading.innerHTML = "Product Preview";
            product_heading.className = "product_heading";
            // }
            details.append(title, brand, price, description_div, product_heading);


            for (j = 0; j < "photos".length; j++) {

                var images = document.createElement('img');
                images.src = data.photos[j];
                images.className = "images";

                images.addEventListener("click", function () {
                    preview.src = this.src;
                    images.style.border = "2px solid gray";
                    images.style.padding = "10px";
                });
                details.append(images);
            }

            var button = document.createElement('button');
            button.innerText = "ADD TO CART";
            button.id = "cart_btn";
            document.getElementById('btn_div').append(button);


            // Add to cart listener
            // console.log(cartItems)
            button.addEventListener('click', () => {
                
                let item = localStorage.getItem('product-list');
                if (item === null || item === '') {
                    item = [];
                    console.log(item);
                  } else {
                    item = JSON.parse(item);
                  }
                var foundAtPos = -1;
                for (var i = 0; i < item.length; i++) {
                    console.log(item[i].id);
                    if (parseInt(item[i].id) == parseInt(data.id)) {
                        foundAtPos = i;
                    }
                }

                if (foundAtPos > -1) {
                    item[foundAtPos].count = item[foundAtPos].count + 1;
                    // console.log(item[foundAtPos].count);
                    window.localStorage.setItem('product-list', JSON.stringify(item));
                } else {
                    data.count = 1;
                    item.push(data);
                    // console.log(item);
                    window.localStorage.setItem('product-list', JSON.stringify(item));
                }

                var totalCount = 0;
                for (var i = 0; i < item.length; i++) {
                    totalCount = totalCount + item[i].count;
                    console.log(totalCount)
                }
                $('#count').html(totalCount);
            });
        }
    }
}

productDetail();
