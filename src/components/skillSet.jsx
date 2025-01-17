

function SkillSet() {
    const frontedSkills = [
        { id: 1, skillName: "HTML", icon: "html.png" },
        { id: 2, skillName: "CSS", icon: "css-3.png"},
        { id: 3, skillName: "Tailwind CSS", icon: "code.png"},
        { id: 4, skillName: "JavaScript", icon: "js.png" },
        { id: 5, skillName: "ReactJS", icon: "react.png" },
        { id: 6, skillName: "Redux", icon: "redux.png" },
        { id: 7, skillName: "Vite", icon: "Vitelogo.png" }
        
    ];

    const backendSkills = [
        { id: 1, skillName: "Python", icon: "python.png" },
        { id: 2, skillName: "SQL", icon: "sql.png" }
    ]

    const otherSkills = [
        { id: 1, skillName: "DSA", icon: "dsa.png" },
        { id: 2, skillName: "Vs Code", icon: "vsCode.png" },
        { id: 3, skillName: "Windows", icon: "windows.png" },
        { id: 4, skillName: "Ms Office", icon: "office.png" },
        { id: 5, skillName: "Git", icon: "git.png" },
        { id: 6, skillName: "GitHub", icon: "github.png" },
        { id: 6, skillName: "Netlify", icon: "Netlify.png" },
        { id: 7, skillName: "Ubuntu" , icon: "linux_logo.png"}

    ]

    return (
        <>
            <section className="skillset justify-center items-center overflow-hidden mb-20 ml-2 mr-2">
                <h1 className="text-3xl font-bold mb-6">Skills  <span className="text-blue-600 pr-2 pl-2">&</span> Technologies</h1>
                <h1 className="font-semibold mb-4">Frontend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4  p-2 rounded-lg">
                    {frontedSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-transparent hover:bg-slate-400 rounded-md border-slate-400 border">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1 className="text-wrap">{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Backend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4  p-2 rounded-lg">
                    {backendSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-transparent hover:bg-slate-400 rounded-md border-slate-400 border">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1 className="text-wrap">{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Other Skills</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 p-2 rounded-lg">
                    {otherSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-transparent hover:bg-slate-400 rounded-md border-slate-400 border">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1 className="text-wrap">{item.skillName}</h1>
                            </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default SkillSet;

