import {ApolloProvider} from "@apollo/react-hooks";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";
import "cross-fetch/polyfill";
import Header from "./components/header";
import InstaLoader from "./components/instaLoader";
import RedditLoader from "./components/redditLoader";
import YoutubeLoader from "./components/youtubeLoader";
import styles from "./styles/main.module.css";

function Saved() {
	const httpLink = new HttpLink({
		uri: "https://braindumpp.herokuapp.com/v1/graphql",
		options: {
			headers: {
				"x-hasura-admin-secret": "raiders20"
			}
		}
	});

	const client = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache()
	});

	return (
		<ApolloProvider client={client}>
			<div style={{height: "100vh", overflow: "hidden"}}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.mainAlt}>
					<div className={styles.savedComponent}>
						<InstaLoader />
					</div>
					<div className={styles.savedComponent}>
						<RedditLoader />
					</div>
					<div className={styles.savedComponent}>
						<YoutubeLoader />
					</div>
				</div>
			</div>
		</ApolloProvider>
	);
}
export default Saved;
