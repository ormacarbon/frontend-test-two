import styled from "styled-components";

export default function UniversitiesTable(props) {
	const list = props?.list;

	return (
		<div>
			{list.length == 0 && <h2>No Results</h2>}
			{list.length > 0 && (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Country</th>
							<th>Webpage</th>
						</tr>
					</thead>
					<tbody>
						{list?.map((item, index) => (
							<tr key={index}>
								<td>{item?.name}</td>
								<td>{item?.country}</td>
								<td>{item?.web_pages[0]}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}
