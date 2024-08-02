import { useState } from 'react';
import CategoryDropDown from './CategoryDropDown';
import ChannelsDropDown from './ChannelsDropDown';
import { RiArrowDropDownFill } from "react-icons/ri";

export default function SecondNavBar() {

    const [nav, setNav] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [channelOpen, setChannelOpen] = useState(false)


    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Channels' },
        { id: 2, text: 'Categories' },
        { id: 3, text: 'A-Z' },
        { id: 4, text: 'TV Guide' },
        { id: 5, text: 'Watchlist' },
    ];

    const openCategoryDropDown = () => {
        setCategoryOpen(!categoryOpen)
        if (channelOpen) {
            setChannelOpen(!channelOpen)
        }
    }
    const openChannleDropDown = () => {
        setChannelOpen(!channelOpen)
        if (categoryOpen) {
            setCategoryOpen(!categoryOpen)
        }
    }
    return (
        <>
            <div className=' border-gray-800 py-8 flex justify-between items-center h-10 w-full border-b px-12 text-white '>
                {/* Logo */}
                <div className='w-full flex justify-start items-center gap-5 text-[25px] font-bold text-[#00df9a] max-w-[289px]  '>
                    <span className='text-[#ff4c98] text-4xl max-w-[148px] font-'>
                        iPLAYER
                    </span>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex  w-full text-[13px] font-semibold  md:justify-end md:items-center'>
                    <li
                        className={`flex justify-center items-center cursor-pointer text-sm text-gray-200 text-inherit font-normal  text-pretty ${channelOpen && 'bg-[#141414]'} hover:text-rose-400  py-3 px-2 text-center w-[94px]`}
                        onClick={openChannleDropDown}
                    >
                        Channels
                        <RiArrowDropDownFill color='white' size={38} />
                    </li>
                    <li
                        className={`flex justify-center items-center cursor-pointer text-sm text-gray-200 text-inherit font-normal  text-pretty ${categoryOpen && 'bg-[#141414]'} hover:text-rose-400  py-3 px-2 text-center w-[94px]`}
                        onClick={openCategoryDropDown}
                    >
                        Categories
                        <RiArrowDropDownFill color='white' size={38} />
                    </li>
                    <li className=' cursor-pointer text-sm text-gray-200 text-inherit font-normal  text-pretty hover:text-rose-400  h-full py-5 px-2 text-center w-[94px]'>
                        A-Z
                    </li>
                    <li className=' cursor-pointer text-sm text-gray-200 text-inherit font-normal  text-pretty hover:text-rose-400  h-full py-5 px-2 text-center w-[94px]'>
                        TV Guide
                    </li>
                    <li className=' cursor-pointer text-sm text-gray-200 text-inherit font-normal  text-pretty hover:text-rose-400  h-full py-5 px-2 text-center w-[94px]'>
                        Whatchlist
                    </li>
                </ul>
                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    Menu
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
            {
                categoryOpen && <CategoryDropDown />
            }
            {
                channelOpen && <ChannelsDropDown />
            }
        </>
    )
}