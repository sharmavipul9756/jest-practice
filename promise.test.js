const fetchPromise = require('./promise');


test('test the data is to be peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
})

test('test fails with an error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
})