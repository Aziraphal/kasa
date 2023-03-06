import "./hebergement.css";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import data from "../../../data/data.json";
import Header from "../../../components/header/Header";
import SlideShow from "../../../components/carrousel/Carrousel";
import Collapse from "../../../components/collapse/Collapse";
import Footer from "../../../components/footer/Footer";
import greyStar from '../../../assets/grey_star.png';
import redStar from '../../../assets/red_star.png';
import Error from "../error/Error";

export default function ValidateHebergement(){
    const idHebergement = useParams('id').id;
    const dataHebergementActuel = data.filter(data => data.id === idHebergement);
    if(dataHebergementActuel.length === 0){
    return <Error />}
    else{
        return <Hebergement />
    }
     
}
export function Hebergement() {
const [imageSlider, setImageSlider] = useState([]);
    const idHebergement = useParams('id').id;
    const dataHebergementActuel = data.filter(data => data.id === idHebergement);
    

    useEffect(() => {
        const dataHebergementActuel = data.filter(data => data.id === idHebergement);
        
        setImageSlider(dataHebergementActuel[0].pictures);
    }, [idHebergement]);
   
    const name = dataHebergementActuel[0].host.name.split(' '); 
    const rating = dataHebergementActuel[0].rating;
    const description  = dataHebergementActuel[0].description;
    const equipments = dataHebergementActuel[0].equipments;

    return (
        <div>
            <Header />
            <SlideShow imageSlider={imageSlider} />
            <main className="hebergement">
                <div className="contenuHebergement">
                    <div className="infoHebergement">
                        <h1>{dataHebergementActuel[0].title}</h1>
                        <p>{dataHebergementActuel[0].location}</p>
                        <div>
                            {dataHebergementActuel[0].tags.map((tag, index) => {
                                return (
                                    <button key={index}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                    <div className="hoteHebergement">
                        <div>
                            <div className='infoHoteHebergement'>
                                <span>{name[0]}</span>
                                <span>{name[1]}</span>
                            </div>
                            <img src={dataHebergementActuel[0].host.picture} alt="Hôte de l'hébergement" />
                        </div>
                            
                        <div className="hoteHebergementNote">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="hebergementCollapse">
                    <div className="hebergementCollapseItem">
                        <Collapse title={'Description'} content={description} />    
                    </div>
                    <div className="hebergementCollapseItem">
                        <Collapse title={'Équipements'} content={equipments}/>
                    </div>  
                </div>
            </main>
            <Footer/>
        </div>
    )
}