import { db } from '@/firebase.config';
import { collection, getDocs } from "firebase/firestore";

import 'animate.css'
import { useEffect, useRef, useState } from 'react';


const Credits =  () => {

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
					let credits = doc.data().creds
					let path = doc.data().path
					const newCard = new card (title, des, credits, path);
					newCard.addCard()
						
				}));	
			}
			fetchData();
		
			console.log(cardsLibrary);
			
			return () => { firebaseRan.current = true}
		}
	});

	return(
		<main className="animate__animated animate__fadeInUp mt-24 mb-24 md:mt-16 px-12">
			<section>
				<h2 className="text-center text-4xl lg:text-5xl font-bold lg:tracking-tight">
					Approved CME Credits
				</h2>
				<p className=" text-center text-lg mt-8 text-slate-600">
					<span className="font-bold text-blue1">Bumper</span><span className="text-red1">Talk</span> gives you access to most CME credits approved by the EMALB. Listed below are various credits that you can do and submit to contribute to your minimum required for the year. 
				</p>
			</section>
			<section className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
 				{
    			cardsLibrary.map((item, index) => (
        		<a href={item.path} key={index} target="_blank">
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