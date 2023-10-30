const Home = () => {

    const handleClick = () =>{
        console.log('Button clicked!')
    }
    return (
        <div className="home">
            <h2>Hello! This is the Home Page.</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;