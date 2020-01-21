import useGoogleSpreadsheet from "use-google-spreadsheet";
import Spinner from "./spinner";

const InstaSheets = ({}) => {
	const shareUrl =
		"https://docs.google.com/spreadsheets/d/1EjNYzInaZJZQwJYqTP32R5xogymGsXnr1_Clyl479kg/edit?usp=sharing";
	const {rows, isFetching} = useGoogleSpreadsheet(shareUrl);
	return isFetching ? (
		<Spinner />
	) : rows ? (
		<ul>
			<li key={i}>
				{Object.keys(row).map((key, i) => (
					<span key={i}>
						{key}: {row[key]}
						<br />
					</span>
				))}
			</li>
		</ul>
	) : null;
};

export default InstaSheets;
