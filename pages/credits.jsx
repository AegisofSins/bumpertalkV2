
const Credits = () => {

	const cards = [
		{
			title: "Bring Your Own Framework",
			description:
				"Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
		},
		{
			title: "100% Static HTML, No JS",
			description:
				"Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
		},
		{
			title: "On-Demand Components",
			description:
				"Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
		},
		{
			title: "Broad Integration",
			description:
				"Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
		},
		{
			title: "SEO Enabled",
			description:
				"Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
		},
		{
			title: "Community",
			description:
				"Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
		},
	];


	return(
		<main className="mt-24 md:mt-16 px-12">
			<section>
				<h2 class="text-center text-4xl lg:text-5xl font-bold lg:tracking-tight">
					Further your education
				</h2>
				<p class="text-lg mt-4 text-slate-600">
					<span class="font-bold text-blue1">Beyond</span><span class="text-red1">thebox</span> Astro renders your entire page to static HTML, removing all JavaScript from your final build by default. Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!
				</p>
			</section>
			<section class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
 				{
    			cards.map((item, index) => (
      			<div class="flex gap-4 items-start" key={index}>
        			<div>
          			<h3 class="font-semibold text-lg">{item.title}</h3>{" "}
          			<p class="text-slate-500 mt-2 leading-relaxed">{item.description}</p>
        			</div>
      			</div>
    			))
  			}
			</section>
		</main>
	)
};

export default Credits;