
let item = localStorage.getItem("product-list");
console.log(item);
if (item === null || item === "") {
    item = [];
} else {
    item = JSON.parse(item);
    if (item.length > 0) {
        item = item;
    } else {
        item = [];
    }
}



let itemCount = document.getElementById('item-count');
itemCount.innerHTML = item.length;
// console.log(itemCount);
let totalAmount = 0;

for (let i = 0; i <= item.length; i++) {
    let currentItem = item[i];
    // console.log(currentItem)


    let itemElement = document.createElement('div');
    itemElement.className = "itemElementDiv";

    let itemElementImage = document.createElement('img');
    itemElementImage.src = currentItem.preview;
    itemElementImage.className = "checkoutImage";
    // console.log(itemElementImage)

    let itemTotal = currentItem.price * currentItem.count;
    totalAmount += itemTotal;
    let lastDigit = totalAmount;
    document.getElementById("total-amount").innerHTML = lastDigit;

    console.log(totalAmount);

    itemElement.innerHTML = currentItem.name + ' <br> ' + currentItem.brand + ' <br>  ' + " X " + currentItem.count + '<br>' + "Amount: Rs  " + itemTotal;
    itemElement.append(itemElementImage);
    document.getElementById('card-list').append(itemElement)
}
