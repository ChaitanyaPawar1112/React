//code for counter increament,decrement and recet
import React ,{useState} from "react"
function Counter()
{
let[value,setValue]=useState(0);

const incrementByOne=()=>
{
    setValue(value+1);

};
const decrementByOne=()=>
{
    setValue(value-1);

};

const recet=()=>
{
    setValue(value=0);
}
    return(
        <div>
            <h2>count:{value}</h2>
            <button onClick={incrementByOne}>+</button>
             <button onClick={decrementByOne}>-</button>
              <button onClick={recet}>recet</button>

        </div>


    );
}
export default Counter;
