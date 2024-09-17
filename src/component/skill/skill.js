import MainContainer from "../../container/layout/main";
import styles from './skill.module.scss'
import JS from "../../../src/assets/images/js.svg";
import BootStrap from "../../../src/assets/images/bootstrap.svg";
import React from "../../../src/assets/images/react.svg";
import Nextjs from "../../../src/assets/images/nextjs.svg";
import Nodejs from "../../../src/assets/images/node.svg";
import DB from "../../../src/assets/images/db.svg";
import Sass from "../../../src/assets/images/sass.svg";
import Figma from "../../../src/assets/images/figma.svg";
import Gitlab from "../../../src/assets/images/gitlab.svg";
import Tailwind from "../../../src/assets/images/tailwind.svg";
import NextDark from "../../../src/assets/images/next-dark.svg";

import clsx from "clsx";
import { useMode } from "../../context/useMode";

const SkillPage = () => {
    const {theme} = useMode();

    const skills = [
        {
            name: 'Javascript',
            icon: JS,
            link :'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'Bootstrap',
            icon: BootStrap,
            link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'
        },
        {
            name: 'React',
            icon: React,
            link: 'https://react.dev/'
        },
        {
            name: 'Nextjs',
            icon:  theme === 'dark' ? NextDark : Nextjs,
            link: 'https://nextjs.org/',
        },
        {
            name: 'Nodejs',
            icon: Nodejs,
            link: 'https://nodejs.org/en'
        },
        {
            name: 'Database',
            icon: DB,
            link: 'https://www.mysql.com/'
        },
        {
            name: 'Sass/Scss',
            icon: Sass,
            link: 'https://sass-lang.com/'
        },
        {
            name: 'Figma',
            icon: Figma,
            link: 'https://www.figma.com'
        },
        {
            name: 'Git',
            icon: Gitlab,
            link: 'https://about.gitlab.com/'
        },
        {
            name: 'Tailwind',
            icon: Tailwind,
            link: 'https://tailwindcss.com/'
        },
    ]

    return (
        <MainContainer
            light
            topic='Skills'
            title='The skills, tools and technologies I am really good at:'
        >
            <div className={clsx(styles.container, theme === 'dark' && styles.dark)}>
                {skills.map((item, index) => (
                    <div className={styles.skills}>
                        <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <img src={item.icon} alt="icon" className={clsx(styles.img, theme === 'dark' && item.style)}/>
                        </a>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </MainContainer>
    )
}
export default SkillPage;