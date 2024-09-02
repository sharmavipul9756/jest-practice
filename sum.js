function sum(a, b) {
    return a + b;
}

function fetchData(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 1000);
}

module.exports = sum;
module.exports = fetchData;