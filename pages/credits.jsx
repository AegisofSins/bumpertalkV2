import 'animate.css'

const Credits = () => {

	const cards = [
		{
			title: "Dysrhytmia Education Course",
			description:
				"The goal of this dysrhythmia education course is to provide healthcare providers with information to better assist in cardiac dysrhythmia identification and management. This course provides detailed dysrhythmia material and activities to consolidate your learning.",
				path: "https://learninghub.phsa.ca/Courses/19670",
				credits:'4'
		},
		{
			title: "100% Static HTML, No JS",
			description:
				"Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
				path: ""
		},
		{
			title: "On-Demand Components",
			description:
				"Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
				path: ""
		},
		{
			title: "Broad Integration",
			description:
				"Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
				path: ""
		},
		{
			title: "SEO Enabled",
			description:
				"Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
				path: ""
		},
		{
			title: "Community",
			description:
				"Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
				path: ""
		},
		
	];


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
    			cards.map((item, index) => (
        		<a href={item.path} key={index} target="_blank">
      				<div className="creditCards">
          			<h3 className="font-semibold text-lg">{item.title}</h3>
          			<p className="text-slate-500 mt-2 leading-relaxed">{item.description}</p>
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