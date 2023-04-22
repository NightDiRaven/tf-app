import {getRandomInteger} from "@/mock/utils/getRandomNumber";

export const getRandomArrayElement = <T>(elements: T[]): T => {
    return elements[getRandomInteger(0, elements.length)];
}

export const getRandomArrayElements = <T>(elements: T[], count: number): T[] => {
    const arrayShuffled = elements.slice().sort(() => Math.random() - 0.5)
    return arrayShuffled.slice(0, Math.max(count, elements.length) - 1);
}