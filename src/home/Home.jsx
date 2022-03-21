import { useState } from "react";
import Bloglist from "../shared/BlogList";

function Home() {
    const [name, setName] = useState("anonymous");
    const [age, setAge] = useState(0);
    const [blogs, setBlogs] = useState([
        { title: "my new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "welcome party", body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: "web dev top tip", body: "lorem ipsum...", author: "mario", id: 3 },
    ])
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
                <Bloglist blogs={blogs} title="all blogs!" />
                <Bloglist blogs={blogs.filter((blog) => blog.author === "mario")} title="mario's blogs" />
            </div>
        </>
    )
}

export default Home