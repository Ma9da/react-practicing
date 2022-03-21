function Home() {
    const handelClick = () =>{
        console.log("hello there");
    }
    const printName = (name) =>{
        console.log("your name is " + name)
    }
    const handelEvent = (e) =>{
        console.log(e.target);
    }
    return (
        <>
            <div className="home">
                homepage
            </div>
            <button onClick={handelClick}>click me</button>
            <button onClick={()=>{printName("yoshi")}}>print</button>
            <button onClick={(e)=>{handelEvent(e)}}>trigger</button>
        </>
    )
}

export default Home