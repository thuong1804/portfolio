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
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerPadding: '0px'
                }
            },
            
        ]
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