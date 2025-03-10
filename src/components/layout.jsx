import { useState } from "react";
import Introduction from "./introduction";
import About from "./about";
import SkillSet from "./skillSet";
import Projects from "./projects";
import ContactDetails from "./contactDetails";

function Layout() {
    const [menuBtn, setMenuBtn] = useState(false)

    const [active , setActive] = useState(false);

    function handleMenuToggle() {
        setMenuBtn((prevState) => !prevState)
    }

    function handleDarkMode () {
        setActive(!active)
        if (!active) {
            document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }

    }

    return (
        <>
            <main id="layout">
                <header className="navbar top-0 sticky w-full z-10 rounded-sm pl-2 pr-2 shadow-md">
                    {!menuBtn ? (
                        <section className="flex justify-between items-center h-16 font-bold">
                            <div className="flex gap-6 items-center" >
                            <h1 className="text-2xl">Portfolio.</h1>
                            <div  className="hover:bottom-2 border-gray-200 rounded-md p-1 cursor-pointer">
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${ active ? "text-white" : "text-black"}`}  onClick={()=> handleDarkMode()}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            </div>
                            </div>
                            <nav className="hidden md:flex gap-6">
                                <a href="#introduction" className="hover:border-b-2 hover:border-red-500 rounded-md p-2">Home</a>
                                <a href="#about" className="hover:border-b-2 hover:border-red-500 rounded-md p-2">About</a>
                                <a href="#skillset" className="hover:border-b-2 hover:border-red-500 rounded-md p-2">Skills</a>
                                <a href="#projects" className="hover:border-b-2 hover:border-red-500 rounded-md p-2">Projects</a>
                                <a href="#contactDetails" className="hover:border-b-2 hover:border-red-500 rounded-md p-2">Contact</a>
                            </nav>
                            {/*Menu Button  */}
                            <div className="md:hidden cursor-pointer"
                                onClick={() => handleMenuToggle()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/1000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.4"
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </div>

                        </section>
                    ) : (
                        <section className="navbar flex flex-col rounded-lg top-0 pb-4 text-center">
                            <div
                                className="self-end mt-4 p-1 rounded-md hover:border cursor-pointer"
                                onClick={handleMenuToggle}
                            >
                                <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>


                            </div>
                            <a onClick={handleMenuToggle} href="#introduction" className="hover:bg-red-500 hover:text-white rounded-md p-2 w-full ">Home</a>
                            <a onClick={handleMenuToggle} href="#about" className="hover:bg-red-500 hover:text-white rounded-md p-2 w-full">About</a>
                            <a onClick={handleMenuToggle} href="#skillset" className=" hover:bg-red-500 hover:text-white rounded-md p-2 w-full">Skills</a>
                            <a onClick={handleMenuToggle} href="#projects" className=" hover:bg-red-500 hover:text-white rounded-md p-2 w-full">Projects</a>
                            <a onClick={handleMenuToggle} href="#contactDetails" className=" hover:bg-red-500 hover:text-white rounded-md p-2 w-full bg-red-700 mb-4 text-white">Contact</a>

                        </section>
                    )}
                </header>
                <section id="introduction"> <Introduction /> </section>
                <section id="about"> <About /> </section>
                <section id="skillset"> <SkillSet /> </section>
                <section id="projects"> <Projects /> </section>
                <section id="contactDetails"> <ContactDetails /> </section>
            </main>
        </>
    );
}

export default Layout;
