import { useState } from "react";

function Home() {
    const [name, setName] = useState("anonymous");
    const [age, setAge] = useState(0);
    const handelClick = () => {
        console.log("hello there");
    }
    const printName = (name) => {
        console.log("your name is " + name)
    }
    const handelEvent = (e) => {
        console.log(e.target);
    }
    return (
        <>
            <div className="home">
                homepage
            </div>
            <h2>User name: {name}
            </h2>
            <h2>
                age: {age}
            </h2>
            <button onClick={() => { setName("Arther") }}>change user name</button>
            <button onClick={()=>{setAge(17)}}>change user age</button>
            <button onClick={handelClick}>click me</button>
            <button onClick={() => { printName("yoshi") }}>print</button>
            <button onClick={(e) => { handelEvent(e) }}>trigger</button>
        </>
    )
}

export default Home