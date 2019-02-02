# pathfindr

pathfindr is a very small library and it has no dependencies, unminified it's a total of 14 lines of code.

### Example

```javascript
// sample data
const product = {
    data: {
        images: [
            {
                url: 'image.png'
            }
        ]
    }
}
```

```javascript
					 // pathfindr in action
const productImage = pathfindr('data/images/0/url') || "fallback.png"
```



### Why? 

Let's say you are looping through data and the field could be undefined, you'd have to write all kind of checks to see if the field exists or else the application will break and throws an exception.

```javascript
const products = [
    {
        title: 'Soup',
        price: 100,
        data: {
            images: [{
                url: 'image.png'
            }]
        }
    },
    {
	    title: 'Not soup',
    	price: 50
    }
]
```

##### This is how you would map the images with pathfindr:

```javascript
const productImages = products.map(
    product => pathfindr('data/images/0/url') || "fallbackImage.png"
)
```

This won't throw an exception if the field doesn't exist, you can easily give a default value by adding double pipe symbol with whatever value it should be if it were undefined.



This code has the same result but is not using pathfindr, you have to check for existence of the fields yourself and it can easily be hard to read for someone else.

```javascript
const productImages = products.map( product => (
	(product.data && product.images) ? product.images[0].url : "fallbackImage.png"
))
```