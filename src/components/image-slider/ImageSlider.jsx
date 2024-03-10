import { useEffect, useState } from 'react';
import './slider.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const ImageSlider = ({ url, page = 1, limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (url !== "") {
            const fetchImages = async (getUrl) => {
                try {
                    setLoading(true);
                    const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
                    const data = await response.json();
                    if (data) {
                        setImages(data);
                        setLoading(false);
                    }
                } catch (e) {
                    setErrorMsg(e.message);
                    setLoading(false);
                }
            };
            
            fetchImages(url);
        }
    }, [url, page, limit]);
    
    const handlePrevious = () => {
        if (currentSlide === 0) setCurrentSlide(images.length - 1);
        else setCurrentSlide(currentSlide - 1);
    }
    const handleNext = () => {
        if (currentSlide === images.length - 1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
    }

    if (loading) {
        return (
            <div>Loading data!!! Please wait...</div>
        )
    }
    if (errorMsg !== null) {
        return (
            <div>Error occured! {errorMsg}</div>
        )
    }
    return (
        <div className='slider-wrapper'>
            <FaAngleLeft onClick={handlePrevious} className='arrow arrow-left' />
            {images && images.length ?
                images.map((imageItem, index) => (
                    <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.download_url} className={(currentSlide === index) ? 'current-image' : 'hide-current-image'} />
                )) : null}
            <FaAngleRight onClick={handleNext} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {images && images.length ?
                    images.map((_, index) => (
                        <button key={index} className={currentSlide === index ? 'current-indicator' : 'inactive-indicator'} onClick={() => setCurrentSlide(index)}></button>
                    )) : null}
            </span>
        </div>
    )
}

export default ImageSlider