import { useState } from "react";

function Home() {
    const [name, setName] = useState("anonymous");
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
            <h2>User name: {name}</h2>
            <button onClick={()=>{setName("Arther")}}>change user name</button>
            <button onClick={handelClick}>click me</button>
            <button onClick={() => { printName("yoshi") }}>print</button>
            <button onClick={(e) => { handelEvent(e) }}>trigger</button>
        </>
    )
}

export default Home