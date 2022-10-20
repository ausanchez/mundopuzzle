export const getArray = (arrayPuzzles) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(arrayPuzzles)
        },2000);
    })
}