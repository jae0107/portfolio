import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(featuredPortfolio);
    }, []);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                {data.map(datum => (
                    <div key={datum.id} className="item">
                        <img src={datum.img} alt="" />
                        <h3>{datum.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
