import {useQuery} from "@apollo/react-hooks";
import {faKiwiBird} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import styles from "../styles/main.module.css";

export const GET_SAVED_REDDITS = gql`
	query {
		reddit {
			id
			title
			url
			subreddit
			subreddit_link
			thumbnail
		}
	}
`;

function RedditLoader() {
	const {loading, error, data} = useQuery(GET_SAVED_REDDITS);

	if (loading) return "";
	if (error) return `Error! ${error.message}`;

	return (
		<div className={styles.redditScrollr}>
			{data.reddit.map(reddit => (
				<a
					href={reddit.url}
					className={`${styles.redditContainer} ${styles.linkParent}`}>
					{reddit.thumbnail ? (
						<img className={styles.thumbnail} src={reddit.thumbnail} alt="" />
					) : (
						<div className={styles.iconContainer}>
							<FontAwesomeIcon icon={faKiwiBird} className={styles.iconNail} />
						</div>
					)}
					<div className={styles.linkThing}>
						<span>{reddit.title}</span>
					</div>

					<div className={styles.subLinkThing}>
						<a className={styles.subLink} href={reddit.subreddit_link}>
							<span>{reddit.subreddit}</span>
						</a>
					</div>
				</a>
			))}
		</div>
	);
}

export default RedditLoader;
