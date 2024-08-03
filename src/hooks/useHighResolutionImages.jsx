import { useState, useEffect } from 'react';
import { getImages } from '../api/apiService';
import { toast } from 'react-hot-toast'
const useHighResolutionImages = (initialShows) => {
    const [shows, setShows] = useState(initialShows);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHighResolutionImages = async () => {
            try {
                const updatedShows = await Promise.all(
                    initialShows.map(async (show) => {
                        let id = show.id || show.show.id
                        const images = await getImages(`${id}`);
                        if (images.data) {
                            for (let index = 0; index < images?.data.length; index++) {
                                if (images.data[index]?.type === 'background') {
                                    return {
                                        ...show,
                                        image: {
                                            original: images?.data[index]?.resolutions?.original.url,
                                        },
                                    };
                                } else if (images.data[index]) {
                                    return {
                                        ...show,
                                        image: {
                                            original: images?.data[index]?.resolutions?.original.url,
                                        },
                                    };
                                } else {
                                    return {
                                        ...show,
                                        image: {
                                            original: images?.data[index]?.show?.resolutions?.original.url,
                                        },
                                    };
                                }
                            }
                        }
                        return show;
                    })
                );
                setShows(updatedShows);
            } catch (error) {
                toast.error(`Error fetching images: ${error.message}`)
                setError(error);
            }
        };

        fetchHighResolutionImages();
    }, [initialShows]);

    return { shows, error };
};

export default useHighResolutionImages;
