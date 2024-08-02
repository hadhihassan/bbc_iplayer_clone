import { useState, useEffect } from 'react'
import { getShows, getImages } from "../../../api/apiService";
import { PlayList,PlayUrl } from '../../../constants/url'
import DOMPurify from 'dompurify';

function BannerScreen() {

    const [shows, setShows] = useState([])
    const sanitizedSummary = DOMPurify.sanitize(shows[0]?.summary || '');
    useEffect(() => {
        async function fetchShows() {
            try {
                const data = await getShows("Breaking");
                const initialShows = data.data.slice(0, 4);
                const updatedShows = await getQualityImage(initialShows);
                setShows(updatedShows);
            } catch (error) {
                console.error("Error fetching shows:", error);
            }
        }
        async function getQualityImage(initialShows) {
            try {
                const updatedShows = await Promise.all(initialShows.map(async (show) => {
                    const images = await getImages(`${show?.id}`);
                    if (images.data) {
                        for (let index = 0; index < images?.data.length; index++) {
                            if (images.data[index]?.type === "background") {
                                return {
                                    ...show,
                                    image: {
                                        original: images.data[index]?.resolutions?.original?.url
                                    }
                                };
                            }
                        }
                    }
                    return show;
                }));
                return updatedShows;
            } catch (error) {
                console.error("Error fetching images:", error);
                return initialShows;
            }
        }
        fetchShows();
    }, [])
    return (
        <>
            <div className="px-12 w-full h-[90vh] mb-5">
                <div className="flex-row h-[70%] flex ">
                    <div className="mt-28">
                        <h4 className=" font-sans font-bold text-3xl mb-4">{shows[0]?.name}</h4>
                        <p
                            dangerouslySetInnerHTML={{ __html: `${sanitizedSummary.substring(0, 100)}...` }}
                            className="text-gray-400 font-sans font-semibold  text-xs break-all mb-5 max-w-64"></p>
                        <p className="mb-3 font-sans font-bold text-gray-200">
                            Genres :
                            {shows[0]?.genres?.map((value) => {
                                return `${value}, `
                            })}
                        </p>
                        <div className="font-sans flex gap-3">
                            <button
                                className="bg-gray-100 text-lg font-sans font-semibold text-black py-2 px-10 flex justify-center items-center gap-2  duration-300 hover:bg-gray-400"
                            >
                                <img className="size-4" src={PlayUrl}></img>
                                Watch now

                            </button>
                            <button
                                className="font-semibold py-3 px-10 bg-[#202224] hover:bg-gray-300 hover:text-black duration-300 text-lg flex justify-center items-center gap-2"
                            >
                                <img className="size-4" src={PlayList}></img>
                                View all
                            </button>
                        </div>
                    </div>
                    <div className="w-[70%] h-[78vh] flex justify-center -z-40 absolute left-96 bg-black">
                        <div className='w-full h-[78vh]  element'></div>
                        <img
                            className="inner-shadow  h-[78vh] w-full max-w-4xl rounded-lg -z-50 absolute"
                            style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.7)" }}
                            src={shows[0]?.image?.original}
                            alt="Background Image"
                        />
                    </div>
                </div>
                <div className="h-[30%] flex justify-center items-center gap-3 ">
                    {
                        shows?.map((show, index) => (
                            <div
                                key={index}
                                className="border-[3px] border-transparent w-56 h-[7.3rem] max-w relative transition duration-300 hover:border-[3px] hover:border-teal-400">
                                <img
                                    className="max-w-56 max-h-28 w-full  " src={show?.image?.original} alt="Background Image" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default BannerScreen
