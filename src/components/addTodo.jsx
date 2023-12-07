import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addTodo(input));
        setInput("");
    }
    return (
        <div>
            <div className="todo m-2">
                <form onSubmit={handleSubmit} action="" className='todo-form'>
                    <input onChange={(e) => setInput(e.target.value)} type="text" name="todo" id="todo" value={input}/>
                    <button type='submit'>AddTodo</button>
                </form>
            </div>
        </div>

    )
}

export default AddTodo;