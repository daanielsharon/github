import { useContext } from 'react';
import { ContextWrapper } from '../helper/context';
import '../Style/sort.css';

const Sort = () => {
	const { state, setState } = useContext(ContextWrapper);
	console.log(state.limit);
	return (
		<div className="sort-container">
			<div className="text">Tampilkan: </div>
			<select onChange={(e) => setState({ ...state, limit: e.target.value })} className="select">
				<option value={5}>5 data</option>
				<option value={10}>10 data</option>
				<option value={20}>20 data</option>
			</select>
		</div>
	);
};

export default Sort;
