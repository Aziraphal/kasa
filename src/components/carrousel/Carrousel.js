import "./carrousel.css";
import ArrowRight from '../../assets/fleche_droite.png'
import ArrowLeft from '../../assets/fleche_gauche.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carrousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carrouselArrowRight' 
                        src={ArrowRight} 
                        alt="Slider suivant" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carrouselArrowLeft' 
                        src={ArrowLeft} 
                        alt="Slider précédent" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}