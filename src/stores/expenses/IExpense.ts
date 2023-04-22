export interface IExpense {
    id: number,
    title: string,
    description?: string,
    categories: number[],
    total: number
}