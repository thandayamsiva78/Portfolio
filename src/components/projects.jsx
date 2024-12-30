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
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      details: "",
    },
    {
      id: 11,
      projectName: "Recipe find App",
      image: "Screenshot from 2024-12-22 23-39-11.png",
      demoLink: "https://astounding-daifuku-faee1f.netlify.app/",
      tools: ["HTML", "CSS", "Tailwind CSS", "JavaScript" , "ReactJS"],
      details: "",
    },
  ];
  console.log(myProjects);
  return (
    <>
      <h1 className="font-bold text-3xl p-4">My  <span className="text-blue-600 pl-4">Projects</span></h1>
      <section className="projects p-4 overflow-auto">
        <article className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {myProjects.map((item, index) => (
            <div
              key={index}
              className="shadow-lg bg-transparent rounded-lg p-2 w-full h-auto flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer group relative"
            >
              <h1 className="font-bold text-lg mb-2 line-clamp-1">{item.projectName}</h1>
              <img
                className="rounded-lg w-full h-[150px] object-cover mb-2"
                src={item.image}
                alt={item.projectName}
              />
              <a
                className="font-semibold text-blue-500 hover:underline"
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Demo Link</i>
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
