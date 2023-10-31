import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    const handleClick = () =>{
        console.log('Button clicked!');
    }


    return (
        <div className="home">
            <h2>Hello! This is the Home Page.</h2>
            <button onClick={handleClick}>Click Me</button>
            <br />
            <br />
            { error && <div>{ error } </div>}
            { isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Abu Bakar')} title="Abu Bakar's Blogs"/> */}
        </div>
    );
}

export default Home;