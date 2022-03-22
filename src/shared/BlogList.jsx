const Bloglist = ({blogs, title, handelDelete}) => {
    return (
        <>
        <h2>{title}</h2>
            <div className="blogs">
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <blockquote> {blog.author} </blockquote>
                        <button onClick={()=>{handelDelete(blog.id)}}>x</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Bloglist;
