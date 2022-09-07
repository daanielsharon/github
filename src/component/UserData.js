import { useContext } from 'react';
import { ContextWrapper } from '../helper/context';
import '../Style/userdata.css';

const UserData = () => {
	const { state, setState } = useContext(ContextWrapper);
	const suggestHandler = (text) => {
		setState({ ...state, fetch: false, suggestions: [], query: text });
	};
	return (
		<div className="suggestion-container">
			{state.suggestions.length > 0 &&
				state.suggestions.map((suggestion, index) => (
					<div key={index} onClick={() => suggestHandler(suggestion.login)} className="suggestion">
						{suggestion.login}
					</div>
				))}
		</div>
	);
};

export default UserData;
