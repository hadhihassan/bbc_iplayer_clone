export default function TopFooter() {
    return (
        <div className="border-t border-gray-900 px-12 pt-3 pb-16 flex justify-between">
            <div className="grid grid-cols-6 gap-14">
                <div className="flex col-span-3 gap-3 items-center">
                    <span className="text-sm font-normal font-sans text-gray-400">Change location: </span>
                    <select className=" font-sans font-semibold text-sm  hover:text-black text-white bg-black text- hover:bg-white" >
                        <option className="text-black" value="">India</option>
                        <option className="text-black" value="" selected>London</option>
                        <option className="text-black" value="">UAR</option>
                    </select>
                </div>
                <div className="flex col-span-3 gap-3 items-center">
                    <span className="text-sm text-gray-400 font-normal font-sans">Change language: </span>
                    <select className=" font-sans font-semibold text-sm hover:text-black text-white bg-black text- hover:bg-white" >
                        <option className="text-black" value="">Malayalam</option>
                        <option className="text-black" value="" selected>English</option>
                        <option className="text-black" value="">Hindi</option>
                    </select>
                </div>
            </div>
            <div className="text-gray-500 text-sm font-sans flex gap-3 text-center">
                <span>Parental Controls</span>
                <span className="border-l border-gray-900"></span>
                <span>Help & FAQ</span>
            </div>
        </div>
    )
}