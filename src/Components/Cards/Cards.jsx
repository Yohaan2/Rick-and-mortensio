import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards( {characters, onClose} ) {
	
	return (
		<div className={style.container}>
			{
				characters.map((persona) => {
					return (
						<Card
							key={persona.id}
							id={persona.id}
							name={persona.name}
							status={persona.status}
							species={persona.species}
							gender={persona.gender}
							origin={persona.origin.name}
							image={persona.image}
							onClose={onClose}
						/>
					);
				})
			}
		</div>
	);
}
