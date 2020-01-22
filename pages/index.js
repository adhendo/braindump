import {ApolloProvider} from "@apollo/react-hooks";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";
import "cross-fetch/polyfill";
import Header from "../components/header";
import InstaLoader from "../components/instaLoader";
import RedditLoader from "../components/redditLoader";
import VscoLoader from "../components/vscoLoader";
import YoutubeLoader from "../components/youtubeLoader";
import YoutubeMeLoader from "../components/youtubeMeLoader";
import styles from "../styles/main.module.css";

function HomePage() {
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

				<div className={styles.main}>
					<InstaLoader />
					<div className={styles.rightSideContainer}>
						<div className={styles.rightSide}>
							<RedditLoader />
							<VscoLoader />
							<YoutubeLoader />
							<YoutubeMeLoader />
						</div>
					</div>
				</div>
			</div>
		</ApolloProvider>
	);
}

export default HomePage;
