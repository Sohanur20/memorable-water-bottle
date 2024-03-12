import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../BottleStyless/Bottle";
import './Battles.css'
import { addToLs, getStorageCart } from "../utilitis/localStorage";

const Battles = () => {

    const [bottles, setBottles] = useState([]);
    const [selectCard , setSelectedCart] = useState([])

    useEffect(() => {
        fetch('Battle.json')
            .then(res => res.json())
            .then(data => setBottles(data))


    }, [])

    // load card from local storage

    useEffect(() =>{

if (bottles.length ) {
    const storedCart = getStorageCart()
    console.log(storedCart , bottles)
}
       
    },[bottles])

    const bottleHandle = (battle) =>{

        // বুঝিয়ে নিতে হবে
      const newCard = [...selectCard , battle];
      setSelectedCart(newCard)
      addToLs(battle.id)
    }

    return (
        <div>
            <h2>Bottle Availavle : {bottles.length} </h2>
            <h2>Bottle Select : {selectCard.length}</h2>


            <div className="bottle-Container">
                {
                    bottles.map(battle => <Bottle battle={battle} key={battle.id} bottleHandle={bottleHandle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Battles;