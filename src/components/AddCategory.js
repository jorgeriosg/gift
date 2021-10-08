import React from 'react';
import {useState} from 'react';
import  propTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
     const [input, setInput] = useState("");

        const handleInput = (e) => {
            setInput(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setCategories(c =>[ input,...c]);
            setInput('');
        }

    return (
        <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={input}
         onChange={handleInput}
        />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: propTypes.func.isRequired
}