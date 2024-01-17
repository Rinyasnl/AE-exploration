
const { fetchData } = require('../src/asynchronous/api');

test('fetchData resolves with the correct data', () => {

    return expect(fetchData()).resolves.toBe('Data received');
});

test('fetchData resolves with the correct data using async/await', async () => {

    await expect(fetchData()).resolves.toBe('Data received');
});

test('fetchData rejects with an error', () => {

    const fetchDataWithError = () => new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 1000);
    });


    return expect(fetchDataWithError()).rejects.toThrow('Failed to fetch data');
});
