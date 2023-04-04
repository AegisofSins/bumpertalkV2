import Image from 'next/image';
import HeroImage from '../public/ambulance.svg';
import 'animate.css'

        
export default function welcomeHeader() {
	

  return (
		<section className="relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="animate__animated animate__fadeInUp text-center pb-12 md:pb-16">
						<h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
							Welcome to  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue1 to-red1">BumperTalk</span>
						</h1>
						<div className="max-w-3xl mx-auto">
							<p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
								The center for everything from CME credits to medical snippets to expand your knowledge.
							</p>
							<div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
							</div>
						</div>
					</div>
					{/* Hero image */}
					<div>
						<div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
							<div className="flex flex-col justify-center">
								<Image className=" animate__animated animate__slideInLeft mx-auto z-10" src={HeroImage} width="768" height="432" alt="Hero" priority />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>		
	)
};
