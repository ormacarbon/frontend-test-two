import { Table, Tr, Th, Td, Overflow } from "../styles/componentStyles";

export default function UniversitiesTable(props) {
	const list = props?.list;

	return (
		<div>
			{list.length == 0 && <h2>No Results</h2>}
			{list.length > 0 && (
				<Overflow>
					<Table>
						<thead>
							<Tr>
								<Th>Name</Th>
								<Th>Country</Th>
								<Th>Webpage</Th>
								<Th>Domain</Th>
							</Tr>
						</thead>
						<tbody>
							{list?.map((item, index) => (
								<Tr key={index}>
									<Td>{item?.name}</Td>
									<Td>{item?.country}</Td>
									<Td>{item?.web_pages[0]}</Td>
									<Td>{item?.domains[0]}</Td>
								</Tr>
							))}
						</tbody>
					</Table>
				</Overflow>
			)}
		</div>
	);
}
