

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
        { id: 1, skillName: "Python", icon: "python.png" }
    ]

    const otherSkills = [
        { id: 1, skillName: "DSA", icon: "dsa.png" },
        { id: 2, skillName: "Vs Code", icon: "vsCode.png" },
        { id: 3, skillName: "Windows", icon: "windows.png" },
        { id: 4, skillName: "Ms Office", icon: "office.png" },
        { id: 5, skillName: "Git", icon: "git.png" },
        { id: 6, skillName: "GitHub", icon: "github.png" },
        { id: 6, skillName: "Netlify", icon: "Netlify.png" }
    ]

    return (
        <>
            <section className="justify-center items-center overflow-hidden mb-20">
                <h1 className="text-3xl font-bold mb-6">Skill  & Technologies</h1>
                <h1 className="font-semibold mb-4">Frontend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-slate-200  ">
                    {frontedSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-50 hover:bg-slate-200">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1>{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Backend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-slate-200">
                    {backendSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-50 hover:bg-slate-200">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1>{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Other Skills</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-slate-200">
                    {otherSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-50 hover:bg-slate-200">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1>{item.skillName}</h1>
                            </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default SkillSet;

