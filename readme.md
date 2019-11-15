# pathfindr

safely traverse objects or arrays without breaking your application.

```typescript
pathfindr(path: string, model: any, fallbackValue?: any) : result | fallbackValue

```

### Example
```javascript
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
const imageUrl = pathfindr('data/images/0/url', 'fallback.png')
```
---

### This will not break the application
```javascript
const product = {}
```

```javascript
const imageUrl = pathfindr('data/images/0/url', 'fallback.png')
```