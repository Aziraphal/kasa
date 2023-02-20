import './card.css';
import { Link } from 'react-router-dom';

export default function Card({id, title, cover}) {

	return (
		<Link to={`/Hebergement/${id}`} className="galleryCard">
			<img className='cardImage' src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}