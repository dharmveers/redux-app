import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo} from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <div><h1>Todos</h1></div>
            <div class="table-responsive p-5">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#SN</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            todos.map((todo) => (
                                <tr>
                                    <th scope="row">{todo.id}</th>
                                    <td>{todo.text}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeTodo(todo.id))} className='btn btn-danger'>Delete</button>
                                        <button className="btn btn-warning ms-1">Update</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todos
