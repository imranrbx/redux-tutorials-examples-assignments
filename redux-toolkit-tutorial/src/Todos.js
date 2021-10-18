import React from 'react';
import { useSelector } from 'react-redux';
const Todos = () => {
	const { todos, loading } = useSelector((state) => state.todosApi);
	if (loading) return <h2>Loading Todos...</h2>;
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.title}</li>
			))}
		</ul>
	);
};

export default Todos;
