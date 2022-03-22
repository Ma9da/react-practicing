import React, { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const handelSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("new blog added");
            })
    }
    return (
        <>
            <h2>add a new blog</h2>
            <form onSubmit={handelSubmit}>
                <label htmlFor="title">blog title:</label>
                <input type="text"
                    name="title"
                    id="title"
                    required
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <label htmlFor="body">blog body:</label>
                <textarea name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}
                >
                </textarea>
                <label htmlFor="author">blog author:</label>
                <select name="authors" id="author" value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button type="submit">submit</button>
            </form>
            <article className="blog">
                <h2>{title}</h2>
                <p>{body}</p>
                <span>{author}</span>
            </article>
        </>
    );
}

export default Create;
