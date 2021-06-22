import React from "react";
import MyCard from './BoardMyCard'

const CardList = ({cards}) => {
    return(
        <>
            {cards.map((card, index)=> {
                return <MyCard key={index} body={card}/>
            })}
        </>
    )
}

export default CardList;