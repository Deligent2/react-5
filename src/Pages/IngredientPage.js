import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";

const IngredientPage=()=>{
const {name}=useParams()
    const [ingredient, SetIngredient]=useState([])
    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data})=>
            SetIngredient(data.drinks)
            )
    }, []);

return(
    <div className={'container'}>
<CocktailList drinks={ingredient}/>
    </div>
)
}
export default IngredientPage