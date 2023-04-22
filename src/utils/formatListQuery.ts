export const fromListQuery = (value: string) => {
    return value.split(",").filter(i => i !== '')
}

export const toListQuery = (value: string[]) => {
    return value.join(",")
}