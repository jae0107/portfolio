import React, { useEffect, useState } from 'react'
import "./projects.scss";
import { featuredPortfolio } from "../../data";
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

const Projects = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(featuredPortfolio);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    const [isOpen, setOpen] = useState(false);
    const [video_src, setVideo] = useState('');

    const videoPlayer = (src) => {
        setOpen(true);
        setVideo(src);
        console.log(src);
    }    

    return (
        <div className="projects" id="projects">
            <ModalVideo channel='custom' isOpen={isOpen} url={video_src} onClose={() => setOpen(false)} />
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((datum) => (
                    <div className="container" key={datum.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={datum.icon} alt="" />
                                    </div>
                                    <h2>{datum.title}</h2>
                                    <p>{datum.desc}</p>
                                    <p>{datum.usage}</p>
                                    <button className="btn btn-primary" onClick={()=> videoPlayer(datum.video)}>Video Instruction</button>
                                    {datum.link !== "" ? <Link to={{ pathname: datum.link }} target="_blank">Link</Link> : <></>}
                                    <Link to={{ pathname: datum.detail }} target="_blank">Detail</Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src={datum.content} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    )
}

export default Projects
