import styles from './button-main.module.scss';
export function ButtonMain({ color, maxWidth, text }) {
	return (
		<button
			className={`${styles.button} ${color === 'red' ? styles.red : ''} ${
				maxWidth === 'big' ? styles.big : ''
			}`}
		>
			{text}
		</button>
	);
}
