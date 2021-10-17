import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	addTodo,
	remTodo,
	upTodo,
} from './store';
const App = () => {
	const value = useSelector((state) => state.counter.value);
	const { todos } = useSelector((state) => state.todos);
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	return (
		<div>
			<h1>React Redux Toolkit Series</h1>
			<h2>{value}</h2>
			<br />
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<br />
			{todos.length > 0 && (
				<ul>
					{todos.map((todo, index) => (
						<li key={todo.id}>
							{todo.text} -{' '}
							{todo.completed
								? 'Completed'
								: 'Not Completed'}
							|
							<button
								onClick={() =>
									dispatch(remTodo(todo.id))
								}>
								X
							</button>
							|
							<button
								onClick={() =>
									dispatch(upTodo(todo.id))
								}>
								U
							</button>
						</li>
					))}
				</ul>
			)}
			<button
				onClick={() => text !== '' && dispatch(addTodo(text))}>
				Add Todo Item
			</button>
			<button
				onClick={() => {
					dispatch(increment());
				}}>
				+
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}>
				-
			</button>
		</div>
	);
};

export default App;
