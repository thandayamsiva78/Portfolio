function Projects() {
  const myProjects = [
    {
      id: 1,
      projectName: "Demo Portfolio",
      image: "demo-portfolio.png",
      demoLink: "https://thandayamsiva78.github.io/POTFOLIO-DEMO/",
      tools: ["HTML", "CSS", "JavaScript"],
      details: "",
    },
    {
      id: 2,
      projectName: "Boat E-commerce",
      image: "boat.png",
      demoLink: "https://thandayamsiva78.github.io/boat-eCommerce-website/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Aos Library"],
      details: "",
    },
    {
      id: 3,
      projectName: "To-Do App",
      image: "to-do-list.png",
      demoLink: "https://thandayamsiva78.github.io/TO-DO-LIST/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      details: "",
    },
    {
      id: 4,
      projectName: "Spotify-UI-Clone",
      image: "spotify-clone.png",
      demoLink: "https://thandayamsiva78.github.io/Spotify-homepage-clone/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      details: "",
    },
    {
      id: 5,
      projectName: "E-Commerce Website",
      image: "e-commerce.png",
      demoLink: "https://silver-queijadas-beb652.netlify.app",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJs", "ShadCN", "Redux"],
      details: "",
    },
    {
      id: 6,
      projectName: "Movie Search App",
      image: "movie-app.png",
      demoLink: "https://helpful-sorbet-dacaad.netlify.app",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
    {
      id: 7,
      projectName: "Music Player",
      image: "music-app.png",
      demoLink: "https://stately-cocada-44b7ef.netlify.app/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
    {
      id: 8,
      projectName: "Personal Financial Tracker",
      image: "personal_financial-tracker.png",
      demoLink: "https://thandayamsiva78.github.io/Personal-Financial-Tracker/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
    {
      id: 9,
      projectName: "Expense Splitter",
      image: "expense-splitter.png",
      demoLink: "https://voluble-cupcake-b8d117.netlify.app/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
    {
      id: 10,
      projectName: "Memory Card Game",
      image: "memory-game.png",
      demoLink: "#",
      tools: ["HTML", "CSS", "JavaScript"],
      details: "",
    },
    {
      id: 11,
      projectName: "Recipe find App",
      image: "Screenshot from 2024-12-22 23-39-11.png",
      demoLink: "https://astounding-daifuku-faee1f.netlify.app/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
    {
      id: 12,
      projectName: "BCT Website",
      image: "Screenshot from 2025-01-14 13-33-03.png",
      demoLink: "https://bct-website-homepage.vercel.app/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS"],
      details: "",
    },
  ];
  console.log(myProjects);
  return (
    <>

      <section className="projects p-4 overflow-auto">
        <h1 className="font-bold text-3xl p-4">My  <span className="text-blue-600 pl-4">Projects</span></h1>
        <article className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {myProjects.map((item, index) => (
            <div
              key={index}
              className="shadow-md bg-slate-100 hover:bg-slate-50 text-black rounded-lg p-2 w-full h-full flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer group relative"
            >
              <h1 className="font-bold mb-2 line-clamp-1 border-b">{item.projectName}</h1>
              <img
                className="rounded-lg h-[130px] object-cover mb-2"
                src={item.image}
                alt={item.projectName}
              />
              <a
                className="font-semibold text-blue-500 hover:underline hover:text-violet-600"
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="flex items-center gap-2 text-sm">
                  <p>View Project</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </p>
                </i>
              </a>
              <div
                className="p-1 absolute top-0 left-0 right-0 opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-300 z-10 bg-gradient-to-b from-blue-600/0 to-blue-200/0  mt-10 pt-10"
              >
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {item.tools.map((details, index) => (
                    <div
                      className="text-sm bg-blue-500 px-2 rounded-3xl text-white"
                      key={index}
                    >
                      {details}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>

    </>
  );
}

export default Projects;
