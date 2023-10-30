import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const handleClick = () =>{
        console.log('Button clicked!');
    }


    return (
        <div className="home">
            <h2>Hello! This is the Home Page.</h2>
            <button onClick={handleClick}>Click Me</button>
            <br />
            <br />
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Abu Bakar')} title="Abu Bakar's Blogs"/> */}
        </div>
    );
}
 
export default Home;