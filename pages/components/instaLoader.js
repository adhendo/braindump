import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import styles from "../styles/main.module.css";

export const GET_INSTAGRAMS = gql`
	query {
		instagram {
			id
			imageURLs
			linkURLs
		}
	}
`;

function InstaLoader() {
	const {loading, error, data} = useQuery(GET_INSTAGRAMS);

	if (loading) return "";
	if (error) return `Error! ${error.message}`;

	return (
		<div className={styles.instaGrid}>
			{data.instagram.map(instagram => (
				<a href={instagram.linkURLs}>
					<img
						className={styles.instaGridImage}
						src={instagram.imageURLs}
						alt=""
					/>
				</a>
			))}
		</div>
	);
}

export default InstaLoader;
