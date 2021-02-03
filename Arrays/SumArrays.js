function sum (numbers) {
    if (numbers.length === 0) return 0;

    //modif test github
    let sum = 0;

    numbers.forEach(number => {
        sum += number;
    });
    
    return sum;
    
};