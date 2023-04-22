
export const getNextIdGenerator = () => {
    let id = 0

    return () => id++
}