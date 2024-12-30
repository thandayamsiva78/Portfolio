



function About() {

    return (
        <>
            <section className="introduction grid grid-cols-2 items-center">
            <div className="profile hidden lg:flex">
                <div className="profile-image flex w-[400px] h-[400px] justify-center items-center  rounded-full">
                    <img className="rounded-full w-full h-full object-cover" src="Screenshot from 2024-12-03 11-34-27.png" alt="profile" />
                </div>
            </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">About <span className="text-blue-600 pl-2">Me</span></h1>
                    <p >I am Thandayam Siva, a passionate and dedicated Frontend Developer with a strong foundation in creating interactive and visually appealing web applications.</p>
                    <p>My background in Python and DSA enhances my problem-solving abilities, enabling me to approach challenges with versatility. Having pursued a Bachelor of Science in Botany, Zoology, and Chemistry from Government Degree College, Nagari, I bring a unique analytical perspective to my work.</p>
                    <p>In addition to my technical skills, I am proficient in MS Office tools, which strengthens my ability to document and present projects effectively. Beyond coding, I am a creative individual who enjoys reading, drawing, and exploring new ideas, blending technical precision with artistic flair in my projects.</p>
                    <p>I am excited to contribute to impactful projects and collaborate with teams to bring innovative ideas to life.</p>
                </div>
            </section>
        </>
    )
}

export default About