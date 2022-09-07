import { useContext } from 'react';
import { ContextWrapper } from '../helper/context';
import '../Style/search.css';
import UserData from './UserData';

const Search = () => {
	const { state, setState } = useContext(ContextWrapper);

	const sendQuery = (e) => {
		setState({ ...state, fetch: true, query: e.target.value });
	};

	return (
		<div className="search-container">
			<div className="suggestion-container">
				<input value={state.query} onChange={sendQuery} className="input"></input>
				<UserData />
			</div>

			<svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" fill="currentColor">
				<path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
			</svg>
		</div>
	);
};

export default Search;
