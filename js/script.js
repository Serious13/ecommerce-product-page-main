console.log("hello world");
$(()=> {
    console.log("DOM objects are ready");
    var $minus = $("#icon-minus"); 
    var $plus = $("#icon-plus");
    var $inputVal = $('.description__detail__buy__itemCount__number');
    var $addItems = $(".description__detail__buy__item");
    var $items = $(".description__items__item");
    var $itemsAmont = $(".items__buy svg");
    var $itemsBuyNumber = $(".items__buy__number");
    var $cardInfo = $(".header__card__info");
    var $orderBasket = $(".header__card__info__main svg");
    var $cardEmpty = $(".header__card__info__main__empty");
    var $clickCounter = 0;
    var $curItemsAmount = 0;
    var style = {
        display:"grid",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"60px"
    }    
    $minus.click(() => {
        if ($inputVal[0].value == 0) {
            $($orderBasket).parent().hide();
            $($orderBasket).parent().next().hide();
        }
        if (($inputVal[0].value -1) >= 0) {
            $inputVal[0].value -= 1;
            $curItemsAmount = $inputVal[0].value;            
        }        
        if (($inputVal[0].value -1) > 0) {
            $($orderBasket).parent().show();
            $($orderBasket).parent().next().show();
        }
    })   
    $plus.click(() => {
        $inputVal[0].value = parseInt($inputVal[0].value) + 1;
        $curItemsAmount = $inputVal[0].value;
    })
    //ADD TO CARD
    console.log("Add items button",parseInt($itemsBuyNumber.html()),parseInt($curItemsAmount),$itemsBuyNumber.html()+parseInt($curItemsAmount));
    $addItems.click(() => {       
        var $curAmount =0;
        $curAmount += parseInt($itemsBuyNumber.html())+parseInt($curItemsAmount);
        console.log("Pushed button Add card",$curAmount) 
        $itemsBuyNumber.html($curAmount);
    })
    $orderBasket.click((e) => {       
        $($orderBasket).parent().hide();
        $($orderBasket).parent().next().hide();
        $cardEmpty.show().css(style);
        $itemsBuyNumber.text("0");
    })
    $itemsAmont.click(() => {
        if (($clickCounter % 2) == 0){
            $cardInfo.show();
        } 
        else  $cardInfo.hide();
        $clickCounter++;
    })
})