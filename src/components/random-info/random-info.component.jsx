import { ButtonMain } from '../button-main/button-main.component';
import styles from './random-info.module.scss';
import imgThor from './Thor.jpg';

export function RandomInfo() {
	const characters = [
		{
			name: 'Thor',
			description:
				"As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...",
			img: imgThor,
		},
	];
	return (
		<div className={styles['random-info']}>
			<div className={styles.character}>
				<div className={styles['character__img']}>
					<img src={characters[0].img} alt='characterImg' />
				</div>
				<div className={styles['character__content']}>
					<div className={styles['character__name']}>{characters[0].name}</div>
					<div className={styles['character__descr']}>
						{characters[0].description}
					</div>
					<div className={styles['character__actions']}>
						<ButtonMain color='red' text='Homepage' />
						<ButtonMain text='wiki' />
					</div>
				</div>
			</div>
			<div className={styles.action}>
				<div className={styles.action__title}>
					Random character for today!
					<span>Do you want to get to know him better?</span>
				</div>
				<div className={styles.action__title}>Or choose another one</div>
				<ButtonMain color='red' text='try it' />
			</div>
		</div>
	);
}
