import {useState} from 'react';
import { useDispatch } from "react-redux";
import {ADD_TODO, DELETE_TODO} from '../redux/Todos';

const Todo = () =>{
    const [inputdata,setInputdata] = useState('')
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setInputdata(e.target.value)

    }
    return(
        <>
        <div>
            <input type="text" placeholder="Add Items" value={inputdata} onChange={handleChange}></input>
            <button onClick={()=>dispatch(ADD_TODO(inputdata), setInputdata(' '))}>ADD TODOS</button>
            <button onClick={()=>dispatch(DELETE_TODO(inputdata))}>DELETE TODOS</button>
        
        </div>
        </>
    
    )
}
export default Todo;