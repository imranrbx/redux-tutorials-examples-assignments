import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';
const App = () => {
	const value = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>React Redux Toolkit Series</h1>
			<h2>{value}</h2>
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
