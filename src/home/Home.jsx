function Home() {
    const handelClick = () =>{
        console.log("hello there");
    }
    const printName = (name) =>{
        console.log("your name is " + name)
    }
    return (
        <>
            <div className="home">
                homepage
            </div>
            <button onClick={handelClick}>click me</button>
            <button onClick={()=>{printName("yoshi")}}>print</button>
        </>
    )
}

export default Home