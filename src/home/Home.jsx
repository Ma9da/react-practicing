import { useEffect, useState } from "react";
import Bloglist from "../shared/BlogList";

function Home() {
    const [name, setName] = useState("anonymous");
    const [age, setAge] = useState(0);
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error("couldn't fetch data for that resource")
            }
            return res.json()
        })
        .then((data)=>{
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
    }, []);
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
                <h2>
                    User name: {name}
                </h2>
                <h2>
                    age: {age}
                </h2>
                <button onClick={() => { setName("Arther") }}>change user name</button>
                <button onClick={() => { setAge(17) }}>change user age</button>
                <button onClick={handelClick}>click me</button>
                <button onClick={() => { printName("yoshi") }}>print</button>
                <button onClick={(e) => { handelEvent(e) }}>trigger</button>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {blogs && <Bloglist blogs={blogs} title="all blogs!"/>}
            </div>
        </>
    )
}

export default Home