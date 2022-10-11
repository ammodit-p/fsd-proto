import {marketApi, isLoading, selectors} from './model/store'

export const Market = {
    ...marketApi,
    isLoading,
    ...selectors
}
