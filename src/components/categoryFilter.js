import React from 'react';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const categoryFilter = () => {
    return (
        <select id="filter">
            <option value={cat} key={cat}>{cat}</option>
        </select>

    )
};
export default categoryFilter;