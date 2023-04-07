function Topofpage ({ title, text }) {
	

	return(
		<section className="animate__animated animate__fadeInUp">
				<h2 className="text-center text-4xl lg:text-5xl font-bold lg:tracking-tight">
					{title}
				</h2>
				<p className=" text-center text-lg mt-8 text-slate-600">
					<span className="font-bold text-blue1">Bumper</span><span className="text-red1">Talk</span> {text}
				</p>
			</section>
	)
}

export default Topofpage;