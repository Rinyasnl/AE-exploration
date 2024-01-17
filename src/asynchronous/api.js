function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data received');
        }, 1000);
    });
}

module.exports = { fetchData };