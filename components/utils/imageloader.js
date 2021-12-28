export const fleekloader= ({ src, width, quality }) =>{
    return `https://storageapi.fleek.co/84dc0e7b-8b23-41fb-9baa-14f5116bd3a8-bucket/${src}?w=${width}&q=${quality || 75}`
}
