import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<ul className={styles.headerLinks}>
				<Link href="/">
					<li className={styles.headerLinkItem}>
						<a>/</a>
					</li>
				</Link>
				<Link href="/from-me">
					<li className={styles.headerLinkItem}>
						<a>me</a>
					</li>
				</Link>
				<Link href="/saved-stuff">
					<li className={styles.headerLinkItem}>
						<a>saved</a>
					</li>
				</Link>
			</ul>
		</div>
	);
}
