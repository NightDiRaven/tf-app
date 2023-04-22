
export const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
}

export const getRandomInteger = (min: number, max: number) => Math.floor(getRandomNumber(min, max))