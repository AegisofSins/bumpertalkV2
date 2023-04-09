import Topofpage from '@/components/topofpage';
import { db } from '@/firebase.config';
import { collection, getDocs } from "firebase/firestore";
import 'animate.css'
import { useEffect, useRef, useState } from 'react';


const Credits =  () => {

	const title = 'Approved CME Credits'
	const text = 'gives you access to most CME credits approved by the EMALB. Listed below are various courses or group of courses that you can do and submit for credits towards your minimum required for the year.'
	const [cardsLibrary, setCardsLibrary] = useState([]);

	class card {
		constructor(title, des, credits, path){
			this.title = title;
			this.des = des;
			this.credits = credits
			this.path = path
		}
		addCard() {
			setCardsLibrary(cardsLibrary => [...cardsLibrary, this]);
		}
	};

	const firebaseRan = useRef(false)

	useEffect(()=> {
		if(firebaseRan.current == false){
			const fetchData = async () => {
			const docRef = collection(db, 'credits')
			const docSnap = await getDocs(docRef);
				docSnap.forEach((doc=>{
					let title = doc.data().title
					let des = doc.data().des
					let credits = doc.data().credit
					let path = doc.data().path
					const newCard = new card (title, des, credits, path);
					newCard.addCard()
						
				}));	
			}
			fetchData();
			
			return () => { firebaseRan.current = true}
		}
	});
	cardsLibrary.sort((a,b) => a.credits - b.credits)

	return(
		<main className= "mt-24 mb-24 md:mt-16 px-12">
			<Topofpage title={title} text={text} />
			<section className="animate__animated animate__fadeInUp grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
 				{
    			cardsLibrary.map((item, index) => (
        		<a href={item.path} key={index} target="_blank" className='h-fit'>
      				<div className="creditCards">
          			<h3 className="font-semibold text-lg">{item.title}</h3>
          			<p className="text-slate-500 mt-2 leading-relaxed">{item.des}</p>
								<p className= "text-red1 mt-2 leading-relaxed">Credits: {item.credits}</p>
      				</div>
						</a>
    			))
  			}
			</section>
		</main>
	)
};

export default Credits;