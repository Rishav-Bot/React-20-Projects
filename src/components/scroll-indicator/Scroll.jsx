import { useState } from 'react';
import './scroll.css';
import { useEffect } from 'react';
const Scroll = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(error.message);
        }
    }
    const handleScrollPercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }
    useEffect(() => {
        fetchData(url);
    }, [url]);
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', () => { });
        }
    })
    console.log(data, scrollPercentage);
    if (errorMsg) {
        return <div>Error ! {errorMsg}</div>;
    }

    if (loading) {
        return <div>Loading data ! Pleaae wait</div>;
    }
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>

            <div className='data-container'>
                {data && data.length > 0
                    ? data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    )
}

export default Scroll