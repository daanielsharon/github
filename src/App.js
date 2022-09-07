import './Style/app.css';
import Search from './component/Search';
import Sort from './component/Sort';
import Repository from './component/Repository';
import { useEffect, useState } from 'react';
import http from './helper/interceptor';
import { ContextWrapper } from './helper/context';

function App() {
	const [state, setState] = useState({
		query: '',
		fetch: true,
		suggestions: [],
		repository: [],
		page: 0,
		totalPage: 0,
		limit: 5,
	});

	useEffect(() => {
		setTimeout(() => {
			fetchSuggestions();
		}, 500);
		fetchRepo();
		// eslint-disable-next-line
	}, [state.query, state.fetch, state.limit, state.page]);

	const fetchSuggestions = async () => {
		if (state.fetch) {
			const response = await http.get(`/search/users?q=${state.query}`);
			// 30 nilai default row github API
			const totalPage = Math.ceil(30 / state.limit);
			const fiveUser = (data) => {
				return data.splice(0, 5);
			};
			setState({ ...state, totalPage: totalPage, suggestions: fiveUser(response.data.items) });
		}
	};

	const fetchRepo = async () => {
		if (!state.fetch) {
			const response = await http.get(`/users/${state.query}/repos?per_page=${state.limit}&page=${state.page}`);
			setState({ ...state, repository: response.data });
		}
	};

	return (
		<ContextWrapper.Provider value={{ state, setState }}>
			<div className="app">
				<div className="search-bar">
					<Search />
					<Sort />
				</div>
				<Repository />
			</div>
		</ContextWrapper.Provider>
	);
}

export default App;
