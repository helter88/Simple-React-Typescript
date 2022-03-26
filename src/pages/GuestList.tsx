import { useRef, useState } from "react";
import './GuestList.css';

const GuestList = () =>{
    const [list, setList] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const guestHandler= () =>{
        if(!inputRef.current){
            return;
        }
        let addingGuest = inputRef.current.value;
        setList(prevGuests => {
            return [...prevGuests, addingGuest]
        })
        inputRef.current.value = '';
    }

    let guests = list.map(el=> <li key={el}>{el}</li>)
    return (
    <>
        <h1>Party Guest List</h1>
        <ul>
            {guests}
        </ul>
        <input type="text" placeholder="Write name and lastname" ref={inputRef}/>
        <button onClick={guestHandler}>Add Guest</button>
    </>)
}
export default GuestList