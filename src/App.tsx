import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from "./components/Button";

type GetType = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

function App() {
    const [get, setGet] = useState<Array<GetType>>([])

    const cleanPage = () => {
        setGet([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setGet(json))
    },[])
    return (
        <div className="App">
            <Button nickName={'cleanPage'} callback={cleanPage}/>
            <p> </p>
            <ul>
                {get.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id} -</span>
                            <span>{el.userId} -</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
