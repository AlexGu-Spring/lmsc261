const priceOfIceCream = 5;
let paymentRecieved = prompt("Please pay");
isPaymentEnough = priceOfIceCream >= paymentRecieved;
if(isPaymentEnough){
    print("Thanks! Enjoy the Ice Cream!")
} else{
    print("Not enough cash!")
}