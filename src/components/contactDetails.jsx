


function ContactDetails() {

    return (
        <>
            <section className="contactDetails grid grid-cols-2 justify-center items-center">
                <div>
                    <h1 className="text-4xl font-extrabold mb-4">Contact <span className="text-blue-600 pl-2">Me</span></h1>
                    <h2 className="text-xl font-semibold pb-4">Lets Work Together</h2>
                    <p>Together, we can turn ideas into reality.</p>
                    <div className="flex gap-4 items-center mt-8 mb-2">
                        <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>

                        <a className="hover:underline hover:text-blue-600" href="#">tsiva7878@gmail.com</a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>

                        <p>+91 6304757234</p>

                    </div>
                    <section className="flex gap-2 mt-4 mb-4">
                        <a className="p-2 border-gray-400 hover:bg-gray-50  rounded-xl transition-transform transform hover:scale-105" href="https://www.linkedin.com/in/siva-t-2329182b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"> <img width="30px" src="linkedin.png" alt="linkedin" />
                        </a>
                        <a className="p-2 border-gray-400 hover:bg-gray-50  rounded-xl transition-transform transform hover:scale-105" href="https://www.instagram.com/sivat0007/profilecard/?igsh=MWkzcjdoZnl1dHJldA==" target="blank"> <img width="30px" src="instagram.png" alt="instagram" />
                        </a>
                    </section>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 md:flex-row">
                        <input className="w-full p-3   border-gray-400 border bg-transparent rounded-lg pl-4" type="text" name="" id="" placeholder="First Name" />
                        <input className="w-full p-3   border-gray-400 border bg-transparent rounded-lg pl-4" type="text" name="" id="" placeholder="Last Name" />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <input className="w-full p-3   border-gray-400 border bg-transparent rounded-lg pl-4" type="text" name="" id="" placeholder="Email" />
                        <input className="w-full p-3   border-gray-400 border bg-transparent rounded-lg pl-4" type="text" name="" id="" placeholder="Phone No" />
                    </div>
                    <input className="w-full pb-40   border-gray-400 border bg-transparent rounded-lg pl-4 pt-2" type="text" name="" id="" />
                    <button className="submit  py-2 font-bold text-white mt-4">Submit</button>
                </div>
                <div className="flex justify-end mt-4">
                    <a href="#introduction">
                        <button className="p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/1000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                            </svg>
                        </button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default ContactDetails