
function* range(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}


const myRange = range(1, 10, 2);

console.log("Example 1: Simple Range Iterator");
for (const value of myRange) {
    console.log(value);
}
// Output: 1, 3, 5, 7, 9


function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });
}

function* asyncGenerator() {
    console.log("Start");
    const result1 = yield fetchData();
    console.log(result1);

    const result2 = yield fetchData();
    console.log(result2);

    console.log("End");
}


const asyncGen = asyncGenerator();
const promise1 = asyncGen.next().value;

promise1.then(data1 => {
    const promise2 = asyncGen.next(data1).value;
    promise2.then(data2 => {
        asyncGen.next(data2);
    });
});
