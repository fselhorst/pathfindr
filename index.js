module.exports = function pathfindr(path, model, fallbackValue = null) {
    if(typeof path === 'undefined' || path === null) { return fallbackValue }
    if (typeof model === 'undefined' || model === null) { return fallbackValue }
    const levels = path.split('/')
    const traversedValue = levels.reduce((acc, next) => {
        if (typeof acc === 'undefined' || acc === null) { return null }
        if (!isNaN(parseInt(next))) {
            const index = parseInt(next)
            if (typeof acc[index] === 'undefined' || acc[index] === null) { return null }
            return acc[index]
        }
        return acc[next]
    }, model)
    return traversedValue === null ? fallbackValue : traversedValue;
}