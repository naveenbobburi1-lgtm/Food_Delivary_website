import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext)
    
    const filteredFoodList = category === "All" 
        ? food_list 
        : food_list.filter(item => item.category === category)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
        </div>
    )
}

export default FoodDisplay
