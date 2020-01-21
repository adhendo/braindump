import {ApolloProvider} from "@apollo/react-hooks";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";
import "cross-fetch/polyfill";
import Header from "./components/header";
import VscoLoader from "./components/vscoLoader";
import YoutubeMeLoader from "./components/youtubeMeLoader";
import styles from "./styles/main.module.css";

function FromMe() {
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
			<div style={{height: "100vh"}}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.mainAlt}>
					<VscoLoader />
					<YoutubeMeLoader />
				</div>
			</div>
		</ApolloProvider>
	);
}
export default FromMe;
