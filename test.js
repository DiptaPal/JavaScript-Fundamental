//5. best friend checking

function isBestFriend(person1, person2){

    console.log(person1.name.startsWith(' '));    
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
console.log(isBestFriend({name: '', friend: 'babul'}, {name:'babul', friend: 'abul'}));