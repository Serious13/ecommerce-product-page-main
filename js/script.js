console.log("hello world");
$(()=> {
    console.log("DOM objects are ready");
    var $minus = $("#icon-minus"); 
    var $plus = $("#icon-plus");
    var $inputVal = $('.description__detail__buy__itemCount__number');
    var $addItems = $(".description__detail__buy__item");
    var $items = $(".description__items__item");
    var $itemsAmont = $(".items__buy");
    var $cardInfo = $(".header__card__info");
    console.log("items",$items[0]);
    $minus.click(() => $inputVal[0].value -= 1)
    $plus.click(() => $inputVal[0].value = parseInt($inputVal[0].value) + 1) 
    $addItems.click(() => console.log(""))
    $itemsAmont.click(() => $cardInfo.show())
})