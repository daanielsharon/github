import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { ContextWrapper } from '../helper/context';
import '../Style/pagination.css';

const Pagination = () => {
	const { state, setState } = useContext(ContextWrapper);
	const pageChange = ({ selected }) => {
		setState({ ...state, page: selected + 1 });
	};
	return (
		<>
			<ReactPaginate previousLabel={'< Prev'} nextLabel={'Next >'} pageCount={state.totalPage} onPageChange={pageChange} containerClassName={'paginate-container'} />
		</>
	);
};

export default Pagination;
