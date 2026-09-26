const conesSoldPerHour = 14;
let inventory = 168;
for(let hour = 1; hour <= 12; hour++){
    print(conesSoldPerHour * hour + " sold at hour " + hour);
    inventory = inventory - conesSoldPerHour;
    print(inventory + " left");
}
