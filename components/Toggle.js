export default function toggle(props) {
	const toggleFunction = props.toggleFunction;
	const toggleText = props.toggleText;

	return (
		<div>
			<input type="checkbox" onChange={(e) => toggleFunction()} />
			<label>{toggleText}</label>
		</div>
	);
}
