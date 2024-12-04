

function SkillSet() {
    const frontedSkills = [
        { id: 1, skillName: "HTML", icon: "html.png" },
        { id: 2, skillName: "CSS", icon: "css-3.png"},
        { id: 3, skillName: "Tailwind CSS", icon: "code.png"},
        { id: 4, skillName: "JavaScript", icon: "js.png" },
        { id: 5, skillName: "ReactJS", icon: "react.png" },
        { id: 6, skillName: "Redux", icon: "python.png" },
        { id: 6, skillName: "Vite", icon: "python.png" }
        
    ];

    const backendSkills = [
        { id: 1, skillName: "Python", icon: "python.png" }
    ]

    const otherSkills = [
        { id: 1, skillName: "DSA", icon: "python.png" },
        { id: 2, skillName: "Vs Code", icon: "python.png" },
        { id: 3, skillName: "Windows", icon: "python.png" },
        { id: 4, skillName: "Ms Office", icon: "python.png" },
        { id: 5, skillName: "Git", icon: "python.png" },
        { id: 6, skillName: "GitHub", icon: "python.png" },
        { id: 6, skillName: "Netlify", icon: "python.png" }
    ]

    return (
        <>
            <section className="min-h-screen justify-center items-center overflow-hidden mb-20">
                <h1 className="text-3xl font-bold mb-6">Skill  & Technologies</h1>
                <h1 className="font-semibold mb-4">Frontend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-gray-800">
                    {frontedSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-800">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1>{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Backend</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-gray-800">
                    {backendSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-800">
                            <img width="30px" src={item.icon} alt={item.skillName} />
                            <h1>{item.skillName}</h1>
                            </div>
                    ))}
                </div>
                <h1 className="font-semibold mb-4">Other Skills</h1>
                <div className="grid grid-cols-2 gap-4 mb-4 border p-2 rounded-lg border-gray-800">
                    {otherSkills.map((item , index)=>(
                        <div key={index} className="flex gap-4 p-2 bg-slate-800">
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

