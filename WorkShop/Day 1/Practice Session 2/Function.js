function add(a,b){
    return a+b;
}
function oddOrEven(a){
    if(a%2 == 0){
        document.write(a + " is a even number.");
    }
    else{
        document.write(a + " is a odd number.");
    }
}
function gretestNumber(a,b,c){
    if(a > b && a > c){
        document.write(a + " is largest number");
    }
    else if(b > a && b > c){
        document.write(b + " is largest number");
    }
    else if(c > a && c > b){
        document.write(c + " is largest number");
    }
    else if(a == b && a > c){
        document.write(a + " and "+ b + " both is largest number");
    }
    else if(b == c && b > a){
        document.write(b + " and "+ c + " both is largest number");
    }
    else if(a == c && a > b){
        document.write(a + " and "+ c + " both is largest number");
    }
    else{
        document.write(a + ", "+ b + " and " + c + " all are equal number.");
    }
}
function fibonacci(n){
    first = 0;
    second = 1;
    next = null;
    document.write(first + "<br>" + second + "<br>");
    for(i = 0;i < n-2;i++){
        next = first + second;
        document.write(next + "<br>");
        first = second;
        second = next;
    }
}
function prime(n){
    flag = true;
    if(n == 0 || n == 1){
        document.write(n + " dose not prime number.");
    }
    else{
        for(i = 2;i < n;i++){
            if(n%i == 0){
                flag = false;
                break;
            }
        }
        if(flag == true){
            document.write(n + " is a prime number.");
        }
        else{
            document.write(n + " dose not prime number.");
        }
    }
    
}
function givePrimeNumber(n){
    count  = 1;
    for(i = 2;count <= n;i++){
        flag = true;
        for(j = 2;j < i; j++){
            if(i%j == 0){
                flag = false;
                break;
            }
        }
        if(flag == true){
            document.write(i + "<br>");
            count++;    
        }
    }
}
function patternFirst(n){
    for(i = 1;i <= n;i++){
        for(j = 0;j < i;j++){
            document.write("* ");
        }
        document.write("<br>");
    }
}
function patternSecond(n){
    for(i = 0;i < n;i++){
        for(j = 0;j < n-1;j++){
            if(i == 0 || i == n-1 || j == 0 || j == n-2){
                document.write("# ");
            }
            else{
                document.write(" &nbsp;");
            }
        }
        document.write("<br>");
    }
}
function patternThird(n){
    for (i= n-1; i>= 0; i--) {  
        for (j=0; j<i; j++) {  
            document.write("&nbsp;")  
        }  
        for (k=i; k<=n-1; k++) {  
            document.write("*" + " ")  
        }  
        document.write("<br>")  
    } 
}