export const TOGGLEFVRT = "TOGGLE_FVRT"
export const SETFILTERS = "SET_FILTERS"

export const tooggleFvrt = (id) => {
    return { type: TOGGLEFVRT, mealID: id }
}

export const FilterSettings = (filterSettings) => {
    return {
        type: SETFILTERS,
        filters: filterSettings
    }
}