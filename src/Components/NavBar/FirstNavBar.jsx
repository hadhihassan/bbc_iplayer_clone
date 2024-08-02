import { useState } from 'react';
import SerachInput from './SeachInput'
import Menu from './Menu'
import { FaUser } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function FirstNavBar() {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
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
                {/* Logo */}
                <div className='w-full flex justify-start items-center gap-5 text-[25px] font-bold text-[#00df9a] max-w-[289px]  '>
                    <div className='flex gap-2'>
                        <button className='border text-black bg-white h-8  w-8 text-center flex justify-center items-center'>B</button>
                        <button className='border text-black bg-white h-8  w-8 text-center flex justify-center items-center'>B</button>
                        <button className='border text-black bg-white h-8  w-8 text-center flex justify-center items-center'>C</button>
                    </div>
                    <div className="border-b-2 border-black duration-300 hover:border-b-2 hover:border-blue-500 w-full flex justify-start h-10 py-5">
                        <span className='flex justify-center items-center gap-2 '>
                            <FaUser />
                            <span className='text-xs font-sans text-gray-100'>
                                Sign in
                            </span>
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
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

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden  left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out   duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

                    {/* Mobile Navigation*/}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
