/* eslint-disable react/prop-types */
import './Bottle.css'

const Bottle = ({battle,bottleHandle}) => {


const {name , img , price} = battle ;

    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price : $ {price}</p>
            <button onClick={() => bottleHandle(battle)}>Purchase</button>
        </div>
    );
};

export default Bottle;