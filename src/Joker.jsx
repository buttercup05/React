import {useState, useEffect} from 'react';

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";
    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }

    useEffect( () => {
        async function firstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        firstJoke()
    }, []);

    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke} className="counter">Get New Joke</button>
        </div>
    )
}