const InstaView = props => {
	return (
		<>
			<li key={i}>
				{Object.keys(row).map((key, i) => (
					<span key={i}>
						{key}: {row[key]}
						<br />
					</span>
				))}
			</li>
		</>
	);
};

export default InstaView;
