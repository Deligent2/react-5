import React, {useEffect, useState} from "react";
import axios from "axios";
import CocktailList from "../components/CocktailList";

const HomePage=()=>{
    const [drinks, setDrink]=useState([])

    useEffect(() => {
axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
    .then(({data})=>setDrink(data.drinks))
    }, []);

    return(
        <div className={'container'}>
<h1>Все коктейли</h1>
<CocktailList drinks={drinks}/>
        </div>
    )
}

export default HomePage