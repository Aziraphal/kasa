import "./hebergement.css";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import data from "../../../data/data";
import Header from "../../../components/header/Header";
import SlideShow from "../../../components/carrousel/Carrousel";
import Collapse from "../../../components/collapse/Collapse";
import Footer from "../../../components/footer/Footer";


export default function Hebergement() {
const [imageSlider, setImageSlider] = useState([]);

	const idHebergement = useParams('id').id;
	const dataHbebergementActuel = data.filter(data => data.id === idHebergement);

    useEffect(() => {
		const dataHbebergementActuel = data.filter(data => data.id === idHebergement);
		setImageSlider(dataHbebergementActuel[0].pictures);
	}, [idHebergement]);

    return (
        <div>
            <Header />
            <SlideShow imageSlider={imageSlider} />
            <main className="hebergement">
				<div className="contenuHebergement">
					<div>
						<h1>{dataHbebergementActuel[0].title}</h1>
						<p>{dataHbebergementActuel[0].location}</p>
						<div>
							{dataHbebergementActuel[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
				</div>    
			</main>
			<Footer/>
		</div>
	)
}