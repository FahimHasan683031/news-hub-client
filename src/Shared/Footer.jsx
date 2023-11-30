import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div data-aos="zoom-in" className="bg-teal-100 ">

            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 p-10 max-w-screen-xl mx-auto  text-neutral-content">


                <nav className="flex justify-center mt-10">
                    <div>
                        <div className="">
                            
                            <h1 className="text-2xl text-center text-teal-600 pb-1 font-bold"><span className="text-slate-700">NEWS</span> HUB</h1>
                        </div>
                        <div className="flex justify-center gap-2 md:gap-5 my-3">
                            <FaFacebookF className="text-3xl p-1 text-white rounded-full bg-teal-600"></FaFacebookF>
                            <AiFillInstagram className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiFillInstagram>
                            <AiFillLinkedin className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiFillLinkedin>
                            <AiOutlineTwitter className="text-3xl p-1 text-white rounded-full bg-teal-600"></AiOutlineTwitter>
                        </div>
                    </div>


                </nav>
                <nav className="flex flex-col text-slate-700 font-medium text-sm gap-1 md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Popular Articles</header>
                    <a className="link link-hover">More Palestinian prisoners..</a>
                    <a className="link link-hover">Foxconn to invest $1.5..</a>
                    <a className="link link-hover">Israel-Gaza war: The Red..</a>
                    <a className="link link-hover">More Palestinian prisoners..</a>
                    <a className="link link-hover">AllPro Repairs</a>
                </nav>
                <nav className="flex flex-col gap-1 text-slate-700 font-medium text-sm md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Impotent Links</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Articles</a>
                    <a className="link link-hover">Premium Articles</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav className="flex flex-col gap-1 text-slate-700 font-medium text-sm md:gap-3">
                    <header className="font-bold text-lg text-teal-600">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

            <div className="py-4 border-t border-slate-300 ">
                <p className="text-[15px] font-medium text-center text-slate-600">&copy; {currentYear} NEWS HUB. All rights reserved.</p>

            </div>

        </div>

    );
};

export default Footer;