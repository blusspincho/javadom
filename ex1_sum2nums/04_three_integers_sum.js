function sum(numbers){

    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
    let c = Number(numbers[2]);

    if(a+b==c)
        console.log(a + " + " + b +" = " + c);

    else if (a+c==b)
        console.log(a + " + " + c +" = " + b);
    else if(b+c==a)
        console.log(b + " + " + c +" = " + a);

    else
        console.log("No");


}




