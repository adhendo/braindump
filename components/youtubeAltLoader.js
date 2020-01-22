import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import styles from "../styles/main.module.css";

export const GET_YOUTUBE_VIDEOS = gql`
	query {
		youtube {
			id
			videoTitle
			videoURL
		}
	}
`;

function YoutubeAltLoader() {
	const {loading, error, data} = useQuery(GET_YOUTUBE_VIDEOS);

	if (loading) return "";
	if (error) return `Error! ${error.message}`;

	return (
		<div className={styles.youtubeScrollr}>
			{data.youtube.map(youtube => (
				<iframe
					width="389"
					height="205"
					src={youtube.videoURL}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
			))}
		</div>
	);
}

export default YoutubeAltLoader;
