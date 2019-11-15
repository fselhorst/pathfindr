const pathfindr = require('../index');

describe('pathfindr tests', () => {
    it('should traverse correctly (happy flow)', () => {
        expect.assertions(1)
        const mock = {
            data: {
                value: 'happy'
            }
        };

        const value = pathfindr('data/value', mock);
        expect(value).toBe('happy');
    })

    it('should traverse correctly with nested arrays', () => {
        expect.assertions(1)
        const mock = {
            data: [
                {
                    user: {
                        messages:['0','1','2','3','4']
                    }
                }
            ]
        };

        const value = pathfindr('data/0/user/messages/3', mock);
        expect(value).toBe('3');
    })

    it('should traverse correctly with array as root', () => {
        const products = [
            {
                title: 'Soup',
                price: 10,
                data: {
                    images: [{
                        url: '/soup.png'
                    }]
                }
            }
        ]
        const value = pathfindr('0/data/images/0/url', products);
        expect(value).toBe('/soup.png');
    })

    it('should not throw error when null or undefined encountered', () => {
        const products = [
            {
                title: 'Soup',
                price: 10,
            }
        ];
        const value = pathfindr('0/data/images/0/url', products, 'fallback.png');
        expect(value).toBe('fallback.png');
    })
    it('should not throw error when model is undefined or null', () => {
        expect.assertions(2)
        const productsNull = null;
        const productsUndefined = undefined;
        const value1 = pathfindr('0/data/images/0/url', productsNull);
        const value2 = pathfindr('0/data/images/0/url', productsUndefined);
        expect(value1).toBe(null);
        expect(value2).toBe(null);
    })

    it('should set fallback value when undefind or null encountered', () => {
        expect.assertions(1)
        const products = null;
        const value = pathfindr('0/data/images/0/url', products, 'fallback');
        expect(value).toBe('fallback');
    })

})