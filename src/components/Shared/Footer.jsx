import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content md:justify-between items-center p-4 flex flex-col md:flex-row">
            <aside className="grid-flow-col items-center">
                <div className="inline-flex items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md text-heading-6 font-bold text-4xl bg-white text-black">
                        t
                    </span>
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.facebook.com/tariqul.islam.fb" target="_blank">
                    <FaFacebook size={25} />
                </a >
                <a href="https://github.com/tariqul420" target="_blank">
                    <FaGithub size={24} />
                </a>
                <a href="https://wakatime.com/@tariqul420" target="_blank">
                    <SiWakatime size={24} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;