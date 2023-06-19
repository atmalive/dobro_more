export const setLocalStorage = (key, value) => {
    const currentTime = new Date().getTime()
    const item = {
        value: value,
        expiry: currentTime + 24 * 60 * 60 * 1000,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorage = (key) => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const currentTime = new Date().getTime()
    if (currentTime > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}
