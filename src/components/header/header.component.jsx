import styles from './header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<span>Marvel</span> information portal
			</h1>
			<div className={styles['page-info']}>
				<span className={styles['page-info__active']}>Characters</span>/
				<span>Comics</span>
			</div>
		</header>
	);
}
