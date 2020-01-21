import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import styles from "../styles/main.module.css";

export const GET_VSCO = gql`
	query {
		vsco {
			id
			imageURL
			linkURL
		}
	}
`;

function VscoLoader() {
	const {loading, error, data} = useQuery(GET_VSCO);

	if (loading) return "";
	if (error) return `Error! ${error.message}`;

	return (
		<div className={styles.vscoScrollr}>
			{data.vsco.map(vsco => (
				<a href={vsco.linkURL}>
					<img className={styles.vscoGridImage} src={vsco.imageURL} alt="" />
				</a>
			))}
		</div>
	);
}

export default VscoLoader;
