import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './slider-item.module.scss'
import clsx from "clsx";
import { mode } from "../../contants/index,";
import { useMode } from "../../hook/useMode";

export default function SimpleSlider() {
    const { theme } = useMode();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'0px',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding:'10px',
                    centerMode: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerPadding: '0px',
                    centerMode: true,

                }
            },
            
        ]
    };

    const itemCard = [
        {
            img: '/img-slide1.png',
            title: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
        {
            img: '/img-slide2.png',
            title: 'Do what you can, with what you have, where you are',
            owner: 'Mae',
            position: 'Founder - maezsc.com'
        },
        {
            img: '/img-slide1.png',
            title: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
            owner: 'Krisztian Gyuris',
            position: 'Founder - inboxgenie.io'
        },
        {
            img: '/img-slide2.png',
            title: 'Do what you can, with what you have, where you are',
            owner: 'Mae',
            position: 'Founder -  maezsc.com'
        },
        
    ]

    return (
        <Slider {...settings} className={styles.slick}>
            {itemCard.map((item, index) => {
                return (
                    <div className={clsx(styles.container, theme === mode.DARK && styles.dark)}>
                        <div className={styles.card}>
                            <img src={item.img} alt="img" className={styles.img} />
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