import { useContext, useState } from 'react';
import { ContextWrapper } from '../helper/context';
import '../Style/repository.css';

import Pagination from './Pagination';
import Popup from './Popup';
import RepositoryDetail from './RepositoryDetail';

const Repository = () => {
	const { state } = useContext(ContextWrapper);
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([]);
	console.log(data);
	const handleClose = (repo) => {
		setData(repo);
		setIsOpen((prev) => !prev);
	};
	console.log(state.repository);
	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nama Repository</th>
						<th>Bahasa Pemrograman</th>
						<th>Detail</th>
					</tr>
				</thead>
				<tbody>
					{state.repository.length > 0 &&
						state.repository.map((repo, index) => (
							<tr key={index}>
								<td>{repo.id}</td>
								<td>{repo.name}</td>
								<td>{repo.language ? repo.language : '-'}</td>
								<td
									className="last"
									onClick={() => {
										handleClose(repo);
									}}
								>
									lihat detail
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination />
			{isOpen && <Popup handleClose={handleClose} content={<RepositoryDetail data={data} />} />}
		</div>
	);
};

export default Repository;
