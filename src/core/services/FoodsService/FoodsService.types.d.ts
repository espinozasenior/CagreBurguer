import { Food } from "../../entities";

export interface IFoods {
    getAllFoods() : Promise<Food[]>
}