# pathfindr

safely traverse objects or arrays without breaking your application.

```typescript
pathfindr(path: string, model: any, fallbackValue?: any) : result | fallbackValue

```

### Example
```javascript
const data = {
    users: {
        images: [
            {
                url: '/image.png'
            }
        ]
    }
};
```

```javascript
const result = pathfindr('users/images/0/url', data); // => /image.png
```
---

### This will not break the application
```javascript
const data = {};
```

```javascript
const result = pathfindr('data/images/0/url', data); // => null
```

### This will not break the application and set fallback value
```javascript
const data = {};
```

```javascript
const result = pathfindr('data/images/0/url', data, '/fallback.png'); // => /fallback.png
```
