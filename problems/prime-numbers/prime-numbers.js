// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num) {
    const result = [];
    let array = (Array.from({length: num + 1}, (_, i) => i)).slice(2);
    const maxNumToCheck = Math.ceil(Math.sqrt(num));
    console.log(maxNumToCheck)

    while (array.length > 0) {
        const curr = array.shift();
        result.push(curr);
        if (curr <= maxNumToCheck) {
            array = array.filter(x => (x % curr));
        }
    }

    return result;
}
