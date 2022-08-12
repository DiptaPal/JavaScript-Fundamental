// 1. radian to degree conversion

function radianToDegree(radian){
    //checking input validity
    if(typeof radian !== "number"){
        return ("Please give valid input.");
    }

    //convert radain to degree( 1 radien = 1 radien × 180/π = 57.296°)
    const degree = radian * (180 / Math.PI);

    //string to number conversion
    const degreeInNumber = parseFloat(degree.toFixed(2)); 

    return degreeInNumber;
}


// 2. check whether the given file name is a javaScript file or not

function isJavaScriptFile(fileName){
    //checking input validity
    if(typeof fileName !== "string"){
        return ("Please give the valid input");
    }

    //file name lower case conversion
    const file = fileName.toLowerCase();

    //checking .js at the end of the file name
    const isJavaScript = file.endsWith(".js");

    //return boolean result
    return isJavaScript;
}


// 3. calculate the total oil price that i have to pay

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    //checking input validity
    if((typeof dieselQuantity !== "number") || (typeof petrolQuantity !== "number") ||(typeof octaneQuantity !== "number") || ((dieselQuantity < 0) || (petrolQuantity < 0) || (octaneQuantity < 0))){
        return ("Please give the valid input");
    }

    //if input is valid then else will be work
    else{
        //price of different oil
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        //calculate the total price of different oils
        const totalDieselPrice = dieselQuantity * dieselPrice;
        const totalPetrolPrice = petrolQuantity * petrolPrice;
        const totalOctanePrice = octaneQuantity * octanePrice;

        //calculate the total price of overall oil
        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

        return totalOilPrice;
    }
}

//4. public bus fare

function publicBusFare(passengers){
    //checking input validity
    if((typeof passengers !== "number") || (passengers < 0)){
        return ("Please give the valid input.");
    }

    //number of seats
    const reservedBusSeat = 50;
    const microBusSeat = 11;
    
    //ticket price of public bus
    const ticketPrice = 250;

    //passengers for micro bus 
    const microBusPassengers = passengers % reservedBusSeat;

    //passengers for public bus 
    const publicBusPassengers = microBusPassengers % microBusSeat;

    //total ticket cost of public bus
    const totalCost = publicBusPassengers * ticketPrice; 
    
    return totalCost;
}


//5. best friend checking

function isBestFriend(person1, person2){
    //checking input validity
    if(((typeof person1 !== 'object') || (typeof person2 !== 'object')) || ((typeof person1.name !== 'string') || (typeof person1.friend !== 'string') || (typeof person2.name !== 'string') || (typeof person2.friend !== 'string')) || ((person1.name === '') || (person1.friend === '') || (person2.name === '') || (person2.friend === ''))){
        return ("Please give the valid input.");
    }
    else{
        //checking friend with lowercase conversion
        if((person1.name.toLowerCase() === person2.friend.toLowerCase()) && (person2.name.toLowerCase()) === (person1.friend.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    }
}
