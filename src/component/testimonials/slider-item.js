import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './slider-item.module.scss'

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px'
    };

    const itemCard = [
        {
            img: '/hihhi.png',
            title: 'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
        {
            img: '/hihhi.png',
            title: 'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
        {
            img: '/hihhi.png',
            title: 'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
        {
            img: '/hihhi.png',
            title: 'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
]

    return (
        <Slider {...settings} className={styles.slick}>
            {itemCard.map((item, index) => {
                return (
                    <div className={styles.container}>
                        <div className={styles.card}>
                            <img src={item.img} alt="img" className={styles.img}/>
                            <p>&#34;{item.title}&#34;</p>
                            <div className={styles.owner}>{item.owner}</div>
                            <div>{item.position}</div>
                        </div>
                        
                    </div>
                )
            })}
        </Slider>
    );
}