import {CoffeeGroup} from "./coffee-group";

export interface CoffeeGroupStore {
    coffeeGroupsList: {
        coffeeGroups: Array<CoffeeGroup>,
        loading: boolean
    }
}