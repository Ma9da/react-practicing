function Home() {
    const handelClick = () =>{
        console.log("hello there");
    }
    return (
        <>
            <div className="home">
                homepage
            </div>
            <button onClick={handelClick}>click me</button>
        </>
    )
}

export default Home