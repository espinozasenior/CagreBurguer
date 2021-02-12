import { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Food } from "../core/entities";
import { RootState } from "../store";
import { fetchAllFoods } from "../store/foods/asyncActions";

export default function useGetFoods() {
    const loading = useSelector<RootState,boolean>(state => state.foods.loading!);
    const listFoods = useSelector<RootState,Food[]>(state => state.foods.listFoods,shallowEqual);
    const dispatch = useDispatch();
    const getFoods = useCallback(() => {
        dispatch(fetchAllFoods());
    },[dispatch]);

    useEffect(() => {
        if(!listFoods.length) getFoods();
    },[getFoods,listFoods]);

    return {
        loading
    }

}
