import DOMPurify from 'dompurify';
import { getShows1 } from "../../../api/apiService";
import { useEffect, useState } from "react";
import useHighResolutionImages from "../../../hooks/useHighResulutionImage";
import { PlayUrl } from '../../../constants/url'

export default function SecondBanner() {

    const [shows, setShows] = useState([]);
    const { shows: newShows } = useHighResolutionImages(shows);
    const sanitizedSummary = DOMPurify.sanitize(newShows[0]?.show.summary || '');
    const getAllShows = async () => {
        const data = await getShows1("marvel");
        if (data.data) {
            setShows(data.data.slice(0, 1));
        }
    };
    useEffect(() => {
        getAllShows();
    }, []);
    return (
        <div className="px-12 w-full h-[58vh] mb-5 ">
            <div className="flex-row h-[70%] flex border-t border-gray-900 ">
                <div className="mt-20 ">
                    <h4 className=" font-sans font-bold text-3xl mb-4">{newShows[0]?.show.name}</h4>
                    <p
                        dangerouslySetInnerHTML={{ __html: `${sanitizedSummary.substring(0, 100)}...` }}
                        className="text-gray-400 font-sans font-semibold  text-xs break-all mb-5 max-w-64"></p>
                    <div className="font-sans flex gap-3">
                        <button
                            className=" flex justify-center items-center gap-3 font-bold py-3 font-sans px-10 bg-gray-100 hover:bg-gray-300 text-black duration-300 text-lg"
                        >
                            <img className="size-4 " src={PlayUrl}></img>
                            Explore collection
                        </button>
                    </div>
                </div>
                <div className="w-[70%] h-[68vh] flex justify-center -z-40 absolute left-96 bg-black">
                    <img
                        className="h-[68vh]  object-fill max-w-4xl rounded-lg -z-50 absolute"
                        src={newShows[0]?.show?.image?.original || newShows[0]?.resolutions?.original?.url}
                        alt="Background Image"
                        />
                        {console.log(newShows[0]?.show?.image?.original , newShows[0]?.resolutions?.original?.url, newShows)}
                </div>
            </div>
        </div>
    )
}
