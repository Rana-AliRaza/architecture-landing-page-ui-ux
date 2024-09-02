import React, { useState } from 'react';
import logo from "../asset/img/galleriansLogo.png";
import { HomeIcon, MailIcon, ProjectIcon, ClientReviewIcon, BarIcon, ClosedIcon } from '../constants/Svgs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { id: 1, icon: HomeIcon, path: "/", title: "Home" },
        { id: 2, icon: ProjectIcon, path: "/project", title: "Projects" },
        { id: 4, icon: ClientReviewIcon, path: "/client-feedback", title: "Client Feedback" },
        { id: 5, icon: MailIcon, path: "/contact", title: "Contact Us" },
    ];

    const getLinkClasses = ({ isActive }) => {
        return `duration-300 whitespace-nowrap flex items-center w-full gap-x-8 p-2 
        ${isActive ? 'text-yellow-500' : 'text-green-500'}`;
    };

    return (
        <nav className='w-full py-1 bg-slate-800 flex items-center justify-center px-4 md:px-6 lg:px-16'>
            <section className="w-full flex justify-between items-center h-20 ">
                <div className="logo">
                    <img src={logo} className='w-[80px] h-[76px]' alt="logo" />
                </div>
                <div className="hidden md:flex justify-between items-center h-[56px]  gap-4 lg:gap-6">
                    {links.map(({ id, icon: Icon, path, title }) => (
                        <NavLink key={id} to={path} className={({ isActive }) => getLinkClasses({ isActive })}>
                            {({ isActive }) => (
                                <div className={`flex gap-x-2 ${isActive ? 'text-yellow-500' : 'text-white'} duration-300 hover:text-yellow-500 border-0 hover:border-yellow-500 hover:border-b-2 py-1`}>
                                    {Icon && <Icon />}
                                    <h4>{title}</h4>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
                <div className="flex md:hidden items-center gap-x-2 w-8 h-8 text-white">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? '' : <span className='-ml-8 flex items-center gap-x-2'> Menu <BarIcon /></span> }
                    </button>
                </div>
            </section>

            {/* Full-Screen Menu for Mobile */}
            {menuOpen && (
                <section className="fixed inset-0 bg-slate-700 z-50 flex flex-col items-center gap-4 py-4 ">
                    <div className="flex justify-center items-center flex-col mt-20">
                    {links.map(({ id, icon: Icon, path, title }) => (
                        <NavLink key={id} to={path} onClick={() => setMenuOpen(false)} className={({ isActive }) => getLinkClasses({ isActive })}>
                            {({ isActive }) => (

                                <div className={`flex gap-x-2 ${isActive ? 'text-yellow-500' : 'text-white'} duration-300 hover:text-yellow-500 border-0 hover:border-yellow-500 hover:border-b-2 py-1 text-2xl items-center mt-4  `}>
                                    {Icon && <Icon />}
                                    <h4>{title}</h4>
                                </div>
                            )}
                        </NavLink>
                    ))}

                    </div>
                </section>
            )}
        </nav>
    );
};

export default Navbar;
