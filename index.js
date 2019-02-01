exports.pathfindr = function (path, model) {
    const levels = path.split('/')
    return levels.reduce((acc, next) => {
        if (typeof acc === 'undefined') { return undefined }
        if (!isNaN(parseInt(next))) {
            const index = parseInt(next)
            if (typeof acc[index] === 'undefined') {
                return undefined
            }
            return acc[index]
        }
        return acc[next]
    }, model)
}