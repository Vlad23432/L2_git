function cache(fn) {
    const cacheStore = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (Object.prototype.hasOwnProperty.call(cacheStore, key)) {
            return cacheStore[key];
        }

        const result = fn.apply(this, args);
        cacheStore[key] = result;
        return result;
    };
}
