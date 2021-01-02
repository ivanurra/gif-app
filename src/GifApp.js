import React, {useState} from 'react'

export const GifApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return (
        <div>
            <h2>GifApp</h2>
            <hr />

            <button onClick={handleAdd}>Add</button>

            <ol>
                {
                    categories.map(category =>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </div>
    )
}
