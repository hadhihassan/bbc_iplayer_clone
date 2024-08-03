import { useCallback, useState } from 'react';
import SerachInput from './SeachInput'
import Logo from './Logo'
import Menu from './Menu'
import { FaUser } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function FirstNavBar() {

    const [nav, setNav] = useState(false);
    const handleNav = useCallback(() => {
        setNav(prevNav => !prevNav);
    }, []);


    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'News' },
        { id: 3, text: 'Sport' },
        { id: 4, text: 'Business' },
        { id: 5, text: 'Innovation' },
        { id: 6, text: 'Culture' },
        { id: 7, text: 'Travel' },
    ];

    return (
        <>
            <div className=' border-gray-800 py-8 flex justify-between items-center h-10 w-full border-b px-12  text-white '>
                <div className='w-full flex justify-start items-center gap-5 text-[25px] font-bold text-[#00df9a] max-w-[289px]  '>
                    <Logo />
                    <div className="border-b-2 border-black duration-300 hover:border-b-2 hover:border-blue-500 w-full flex justify-start h-10 py-5">
                        <span className='flex justify-center items-center gap-2 '>
                            <FaUser />
                            <span className='text-xs font-sans text-gray-100'>
                                Sign in
                            </span>
                        </span>
                    </div>
                </div>

                <ul className='hidden md:flex  w-full ml-1 text-[13px] font-semibold gap-1 md:justify-center md:items-center'>
                    <span className='border-l  border-gray-800  h-5'></span>

                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='m-auto cursor-pointer border-b-2 hover:border-white duration-300 border-black   p-2 '
                        >
                            {item.text}
                        </li>
                    ))}

                    <li className='hover:border-white border-black border-b-2 p-3  hover:cursor-pointer'>
                        <Menu />
                    </li>
                    <li>
                        <SerachInput />
                    </li>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

            </div>

            <ul
                className={
                    nav
                        ? 'md:hidden   w-[60%] h-[15rem]  border-r-gray-900 bg-[#000300] ease-in-out duration-500 grid grid-cols-3 '
                        : 'ease-in-out   duration-500 fixed top-0 bottom-0 left-[-100%] '
                }
            >

                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='cursor-pointer font-sans font-semibold border-b-2 p-5 hover:border-white duration-300 border-black'
                    >
                        {item.text}
                    </li>
                ))}
                
            </ul>
        </>
    )
}