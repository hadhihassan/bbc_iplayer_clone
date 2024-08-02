import React from 'react'

const channels = ["ONE", "TWO", "THREE", "FOUR", "RADIO1", "CBBC", "CBeebies", "SCOTLAND", "NEWS", "PARLIAMENT", "ALBA", "S4C"];


function CategoryDropDown() {


    return (
        <div className="px-16 py-5 bg-[#161618] text-white flex gap-28">
            <div className="flex justify-between w-full">
                {channels.map((channel, index) => (
                    <React.Fragment key={index}>
                        <p className="font-sans font-semibold">{channel}</p>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default CategoryDropDown;
