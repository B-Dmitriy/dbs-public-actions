import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import useDebounce from "./hooks/useDebounce";
import useThrottle from './hooks/useThrottle';

function App() {
	const [sort, setSort] = useState('');
	const debValue = useDebounce(sort);
	const [value, setValue] = useState('hello')
	const throttledValue = useThrottle(value)

	useEffect(() => console.log(`throttledValue changed: ${throttledValue}`), [
		throttledValue,
	])
	const makeRequest = (value: string) => {
		console.log('Request: ', value);
	}

	useEffect(() => {
		makeRequest(debValue)
	}, [debValue]);

	const changeSort = (e: ChangeEvent<HTMLInputElement>) => {
		setSort(e.target.value);
	}

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value)
	}

	return (
		<div className="App">
			<div>
				Debounce: <input type="text" value={sort} onChange={changeSort}/>
			</div>
			<div>
				Throttle: <input value={value} onChange={onChange}/>
				<p>Throttled value: {throttledValue}</p>
			</div>
		</div>
	);
}

export default App;

