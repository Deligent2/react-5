import React from "react";
import CocktailCard from "./CocktailCard"

const CocktailList=({drinks})=>{
    return(
        <div className={'row'}>
            {
drinks.map(drink=>
<div key={drink.idDrink} className={'col-3'}>
<CocktailCard drink={drink}/>
</div>
)
            }
        </div>
    )
}
export default CocktailList;