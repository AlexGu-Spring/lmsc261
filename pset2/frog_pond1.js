const  maxFrogCapacity = 15;
let numFrogs = prompt("How many frogs are about to jump in?");
isPondOverCapacity = numFrogs <= maxFrogCapacity;
if(isPondOverCapacity){
    let messageToPrint = "Come on in!";
    print(messageToPrint);
} else {
    let messageToPrint = "It’s too crowded!";
    print(messageToPrint);
}