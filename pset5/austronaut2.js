function checkLifeSpan(hoursUsed){
    const maxLifeSpan = 1000;
    
    if (typeof hoursUsed != number) { return "please enter valid number" } 

    if(hoursUsed < 800){
        return("suit in working condition");
    } else if(1000 < hoursUsed >= 800 ){
        return("suit needs replacement soon");
    } else if(hoursUsed >= 1000){
        return("suit no longer safe to use");
    }
}

let hoursUsed = prompt("How long have you been using it?");
print(checkLifeSpan(hoursUsed));