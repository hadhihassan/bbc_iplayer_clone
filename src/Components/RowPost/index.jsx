import { useState, useEffect } from 'react';
import HorizontalCarousel from './Carousel'
import { getShows1 } from '../../api/apiService'
import useHighResolutionImages from '../../hooks/useHighResulutionImage';
import { defaultImageUrl } from '../../constants/url'

export default function RowPost({ title, generes, bigPost }) {
    const [shows, setShows] = useState([]);
    const { shows: newShows } = useHighResolutionImages(shows);

    const getAllShows = async () => {
        const data = await getShows1(generes);
        if (data.data) {
            setShows(data.data.slice(0, 20));
        }
    };

    useEffect(() => {
        getAllShows();
    }, [generes]);

    return (
        <div className="pl-12 ">
            <div className="w-full flex justify-between pr-12 ">
                <h2 className="mb-5 font-sans font-bold text-2xl">{title}</h2>
                <h2 className="font-sans font-bold h-auto text-center">View all</h2>
            </div>
            <HorizontalCarousel >
                {
                    (bigPost ? shows : newShows)?.map((show, index) => (
                        <>
                            <div className={`${bigPost ? 'h-[40rem]' : 'h-[15rem]'} bg-black`}>
                                <div
                                    key={show?.id || index}
                                    className={`${bigPost ? 'h-[28rem]' : 'h-[11rem]'} overflow-y-hidden   bg-black w-[20rem]`}
                                >
                                    <div className='max-h-full w-full'>
                                        <img
                                            className={` cursor-pointer transition-transform duration-300 ease-in-out w-[100] object-fill`}
                                            src={show?.show?.image?.original || show?.image?.original || defaultImageUrl}
                                            alt="poster"
                                        />
                                    </div>
                                </div>
                                <p className="py-2 font-sans font-semibold">
                                    {show?.name || show?.show?.name}
                                </p>
                            </div>
                        </>
                    ))
                }
            </HorizontalCarousel>
        </div>
    )
}