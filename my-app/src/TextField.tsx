import React, {useState} from "react";

interface Props{
    text:string;
}

export const TextField:React.FC<Props> = ({text})=>{
    //React.FC stands for function component.
    let [count,setCount] = useState(0);
    //regular hook
    let [someText, setText] = useState<{text:string}>({text:"From hook."});
    //using interfaves in hooks
    let [userInput, setInput] = useState("");
    return (
        <div>
            <p>{someText.text}</p>
            <input onChange={(event)=>setInput(event.target.value)}/>
            <p>Count {count}</p>
            <button onClick={()=>setCount(count+=1)}>+</button>
            <button onClick={()=>alert(`current value of input is: ${userInput}`)}>value</button>
        </div>
    )
}