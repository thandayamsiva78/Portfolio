import { useState, useEffect } from "react";

function Introduction() {
    const text = "Frontend Developer";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isClearing, setIsClearing] = useState(false);

    useEffect(() => {
        if (!isClearing) {
            const interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1); 
                } else {
                    setIsClearing(true); 
                }
            }, 200);

            return () => clearInterval(interval);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText(""); 
                setIndex(0); 
                setIsClearing(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [index, isClearing, text]);

    return (
        <section className="introduction grid grid-cols-2 items-center">
            <div>
                <h1 className="text-3xl font-bold">Hello its me</h1>
                <h1 className="text-3xl font-bold"><span className="text-blue-600">Thandayam Siva</span></h1>
                <h1 className="text-3xl">Iam a ..<span className="font-light text-gray-600">{displayedText}</span></h1>
                <p>
                    As a passionate and dedicated Frontend Developer, I specialize in creating intuitive, user-friendly interfaces that bring ideas to life on the web. With a strong foundation in HTML, CSS, and JavaScript, I strive to craft seamless and visually appealing designs, ensuring that every project I work on delivers an exceptional user experience.
                </p>
                <div className="cv">
                <button className="mt-4  px-8 py-3 rounded-3xl text-white">
                    <a href="#" download="#">Download CV</a>
                </button>
                </div>
                <div className="social-media relative flex p-3">
                    <a className="p-2 hover:bg-slate-200 hover:rounded-xl transition-transform transform hover:scale-105" href="https://github.com/thandayamsiva78" target="blank"> <img width="40px" src="github.png" alt="github" />
                    </a>
                    <a className="p-2 hover:bg-slate-200 hover:rounded-xl transition-transform transform hover:scale-105" href="https://www.linkedin.com/in/siva-t-2329182b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"> <img width="40px" src="linkedin.png" alt="linkedin" />
                    </a>
                    <a className="p-2 hover:bg-slate-200 hover:rounded-xl transition-transform transform hover:scale-105" href="https://leetcode.com/u/tsiva_jtbb2/" target="blank"> <img width="40px" src="programming.png" alt="leetcode" />
                    </a>
                    <a className="p-2 hover:bg-slate-200 hover:rounded-xl transition-transform transform hover:scale-105" href="https://www.instagram.com/sivat0007/profilecard/?igsh=MWkzcjdoZnl1dHJldA==" target="blank"> <img width="40px" src="instagram.png" alt="instagram" />
                    </a>
                </div>
            </div>

            <div className="profile flex justify-center items-center">
                <div className="profile-image flex justify-center items-center rounded-full">
                    <img className="rounded-full w-full h-full object-cover" src="profile-image.png" alt="profile" />
                </div>
            </div>
        </section>
    );
}

export default Introduction;

