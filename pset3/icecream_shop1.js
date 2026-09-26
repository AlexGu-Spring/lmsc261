const priceOfIceCream = 5;
let paymentRecieved = prompt("Please pay");
isPaymentEnough = paymentRecieved >= priceOfIceCream;
if(isPaymentEnough){
    print("Thanks! Enjoy the Ice Cream!")
} else{
    print("Not enough cash!")
}