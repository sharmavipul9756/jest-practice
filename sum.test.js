const fetchData = require('./sum');
const sum = require('./sum');

xtest('adds 1 + 2 to equal to 3', () => {
    expect(sum(1, 2)).toBe(3);

    //tobe is matcher there are other matchers like truthy, falsy
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two :2 })
})

test('null is falsy', () => {
    const n = null || 0 || false || undefined;
    expect(n).toBeFalsy();
})


test('the data is peanut butter',  done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        }
        catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})

