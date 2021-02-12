import { foodsMockData } from "../../data";
import { Food } from "../../entities";
import { IFoods } from "./FoodsService.types";

export default class FoodsService implements IFoods{
    async getAllFoods() : Promise<Food[]>{
        await new Promise(r=>setTimeout(r,1000));
        return foodsMockData;
    }
}