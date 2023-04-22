import type {LocationQuery} from "vue-router";
import {fromListQuery, toListQuery} from "@/utils/formatListQuery";

export const getToggleQuery = (currentQuery: Record<string, string> | LocationQuery, queryName: string, forId: string) => {
    const { [queryName]: itemsRow = '', ...query } = currentQuery;
    const items = fromListQuery(String(itemsRow));
    const itemIndex = items.indexOf(forId)
    let isActive = false

    if (itemIndex > -1) {
        isActive = true
        items.splice(itemIndex, 1)
    } else {
        items.push(forId)
    }
    if (items.length) {
        query[queryName] = toListQuery(items)
    }
    return {isActive, query}
};