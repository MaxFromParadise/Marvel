import boomboomImg from './4ce5a25d34245 1.png';
export function Catalog() {
	const tempCharacters = [
		{
			name: 'boom boom',
			img: boomboomImg,
			id: 0,
		},
		{
			name: 'boom boom 1',
			img: boomboomImg,
			id: 1,
		},
		{
			name: 'boom boom 2',
			img: boomboomImg,
			id: 2,
		},
		{
			name: 'boom boom 3',
			img: boomboomImg,
			id: 3,
		},
	];
	return (
		<main className='grid grid-cols-3 gap-6 justify-center'>
			{tempCharacters.map((item) => {
				return (
					<div key={item.name}>
						<input
							className='peer/character hidden'
							type='radio'
							name='character'
							id={item.id}
						/>
						<label
							htmlFor={item.id}
							key={item.name}
							className='bg-zinc-800 block min-h-80 w-[200px] shadow-lg transition-all peer-checked/character:shadow-red-500 peer-checked/character:translate-y-[-8px]'
						>
							<img src={item.img} alt={item.name} />
							<div className='uppercase font-bold font text-xl text-white p-4'>
								{item.name}
							</div>
						</label>
					</div>
				);
			})}
		</main>
	);
}
