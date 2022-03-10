/* function ProductsAdd (productId){
    const inputPhonePlus = document.getElementById(productId);
    const numberPhonePlus = parseInt(inputPhonePlus.value);

    inputPhonePlus.value = numberPhonePlus + 1;
}
function ProductsRemove (productId){
    const inputPhonePlus = document.getElementById(productId);
    const numberPhonePlus = parseInt(inputPhonePlus.value);

    inputPhonePlus.value = numberPhonePlus - 1;
}
 */

// Anotherway to handle it

function ProductUpdate(isIncrising) {
    const inputPhone = document.getElementById('inputPhone');
    let numberOfPhone = parseInt(inputPhone.value);

    if (isIncrising) {
        numberOfPhone = numberOfPhone + 1;
    } else if (numberOfPhone > 0) {
        numberOfPhone = numberOfPhone - 1
    }
    inputPhone.value = numberOfPhone;
    const phonePrice = document.getElementById('phone-price')
    //  const phonePriceAmount =parseFloat(phonePrice.innerText);
    phonePrice.innerText = numberOfPhone * 1200;

}

function CoverUpdate(isIncrising) {
    const inputCover = document.getElementById('inputCover');
    let numberOfCover = parseInt(inputCover.value);

    if (isIncrising) {
        numberOfCover = numberOfCover + 1;
    } else if (numberOfCover > 0) {
        numberOfCover = numberOfCover - 1
    }
    inputCover.value = numberOfCover;
    const CoverPrice = document.getElementById('cover-price')
    //  const phonePriceAmount =parseFloat(phonePrice.innerText);
    CoverPrice.innerText = numberOfCover * 60;

}


document.getElementById("phone-quantity-plus").addEventListener('click', function () {

    //Without Functions

    /* const inputPhonePlus = document.getElementById("inputPhone");
    const numberPhonePlus = parseInt(inputPhonePlus.value);

    inputPhonePlus.value = numberPhonePlus + 1;   
    
    */

    /* const phonePrice = document.getElementById("phone-price")
    const numberPhonePlus = parseFloat(phonePrice.innerText);
     ProductsAdd('inputPhone');
     console.log(numberPhonePlus) */
    /* const perUnitPhonePrice =ProductsAdd('inputPhone');
    const amountOfPhonePrice = numberPhonePlus* perUnitPhonePrice;
    
     phonePrice.innerText = amountOfPhonePrice; */

    ProductUpdate(true);

})
document.getElementById("phone-quantity-minus").addEventListener('click', function () {

    // ProductsRemove('inputPhone')

    ProductUpdate(false);

})


// Case ProductUpdate

document.getElementById("cover-plus").addEventListener('click', function () {

    // ProductsRemove('inputPhone')

    CoverUpdate(true);

})
document.getElementById("cover-minus").addEventListener('click', function () {

    // ProductsRemove('inputPhone')

    CoverUpdate(false);

})