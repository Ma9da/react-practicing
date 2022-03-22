import React from 'react';

const Create = () => {
    return (
        <>
            <h2>add a new blog</h2>
            <form>
                <label htmlFor="title">blog title:</label>
                <input type="text" name="title" id="title" required />
                <label htmlFor="body">blog body:</label>
                <textarea name="body" id="body" cols="30" rows="10" required>

                </textarea>
                <label htmlFor="author">blog author:</label>
                <select name="authors" id="author">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
            </form>
        </>
    );
}

export default Create;
