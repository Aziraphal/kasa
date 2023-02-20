import './gallery.css';
import data from '../../data/data';
import Card from '../card/Card';

const Gallery = () => {
    return (
        <div className='homeGallery'>
            {data.map(data => {
                return (
            <Card 
                key={data.id}
                id={data.id}
                title={data.title}
                cover={data.cover}
                />
                )})}
        </div>
    );
};

export default Gallery;