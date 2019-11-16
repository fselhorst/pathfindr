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
        const mock = [
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
        const value = pathfindr('0/data/images/0/url', mock);
        expect(value).toBe('/soup.png');
    })

    it('should not throw error when null or undefined encountered', () => {
        const mock = [
            {
                title: 'Soup',
                price: 10,
            }
        ];
        const value = pathfindr('0/data/images/0/url', mock, 'fallback.png');
        expect(value).toBe('fallback.png');
    })
    it('should not throw error when model is undefined or null', () => {
        expect.assertions(2)
        const mockNull = null;
        const mockUndefined = undefined;
        
        const value1 = pathfindr('0/data/images/0/url', mockNull);
        const value2 = pathfindr('0/data/images/0/url', mockUndefined);
        expect(value1).toBe(null);
        expect(value2).toBe(null);
    })

    it('should set fallback value when undefind or null encountered', () => {
        expect.assertions(1)
        const mock = null;
        const value = pathfindr('0/data/images/0/url', mock, 'fallback');
        expect(value).toBe('fallback');
    })

})
