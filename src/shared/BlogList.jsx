const Bloglist = (props) => {
    const blogs = props.blogs
    const title = props.title
    return (
        <>
        <h2>{title}</h2>
            <div className="blogs">
                {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <blockquote> {blog.author} </blockquote>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Bloglist;
