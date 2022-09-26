/* n = 51;
flage = true;
for(let i = 2; i < Math.sqrt(n); i++){
    if(n%i == 0){
        flage = false;
        break;
    }
}
if(flage){
    console.log("Prime");
}
else{
    console.log("Not Prime");
} */

/* n = 10;
a = [];
for(let j = 2; j < n; j++){
    for(let i = 2; i < n/2; i++){
        if(j%i == 0){
            break;
        }
        else{
            a.push(j);
            break;
        }
    }
}
console.log(a); */

count = 10;
a = [];
let j = 2;
while(a.length < count){
    let i = 2;
    while(true){
        if(j%i == 0){
            break;
        }
        else{
            a.push(j);
            break;
        }
        i++;
    }
    j++;
}
console.log(a);
