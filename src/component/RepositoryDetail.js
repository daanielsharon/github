import { normalizeDate } from '../helper/converter';

const RepositoryDetail = ({ data }) => {
	return (
		<div className="container">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nama Repository</th>
						<th>Bahasa Pemrograman</th>
						<th>Deskripsi</th>
						<th>Tanggal dibuat</th>
						<th>Terakhir diperbarui</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{data.id}</td>
						<td>{data.name}</td>
						<td>{data.language ? data.language : '-'}</td>
						<td>{data.description ? data.description : '-'}</td>
						<td>{normalizeDate(data.created_at)}</td>
						<td>{normalizeDate(data.updated_at)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RepositoryDetail;
