# pathfindr

Example:

Let's say this is the data you have,

```javascript
const product = {
    data: {
        images: [
            {
                url :'image.png'
            }
        ]
    }
}
```

 and want to get the image you would do something like this:

```javascript
const imageUrl = product.images[0].url
```

but what if the object doesn't have the *data* field or doesn't have an *images* field? Right the application would crash.

if you use pathfinder this will never be an issue anymore!

You can use it like this (given we use the data from above):

```javascript
const imageUrl = pathfinder('data/images/0/url')
```

no need for the ugly

```javascript
product.data && product.data.images
```



