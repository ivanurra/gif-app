import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory />
            <hr />

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
