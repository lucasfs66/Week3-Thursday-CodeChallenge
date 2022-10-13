// const numPrint = number => {

// }

    let a = 1304;

    const reverse = a => {
        let b, sum = 0;
        let z = a;
        while(a > 0)
        {
        b = a % 10;
        console.log(b)
        sum = sum * 10 + b;
        console.log(sum)
        a = parseInt(a / 10);
        console.log(a)
        }
    }   

