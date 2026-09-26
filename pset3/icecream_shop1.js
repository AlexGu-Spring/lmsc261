const priceOfIceCream = 5;
let paymentRecieved = prompt("Please pay");
isPaymentEnough = paymentRecieved >= priceOfIceCream;
if(isPaymentEnough){
    print("Thanks! Enjoy the Ice Creamm");
    let change = paymentRecieved - priceOfIceCream;
    print("you change is: " + change);
} else{
    print("Not enough cash!");
}