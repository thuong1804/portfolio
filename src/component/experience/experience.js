import clsx from "clsx";
import MainContainer from "../../container/layout/main"
import { useMode } from "../../context/useMode"
import styles from './experience.module.scss'

const ExperiencePage = () => {
    const {theme} = useMode();

    const contentCardExperience = [
        {
            logo: 'Upwork logo',
            title: 'Independent Freelancer',
            content: 'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
            descriptions: 'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
            time: 'Nov 2021 - Present'
        },
        {
            logo: 'Upwork logo',
            title: 'Independent Freelancer',
            content: 'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
            descriptions: 'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
            time: 'Nov 2021 - Present'
        },
        {
            logo: 'Upwork logo',
            title: 'Independent Freelancer',
            content: 'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
            time: 'Nov 2021 - Present'
        },
    ]
    return (
        <MainContainer
            topic='Experience'
            title='Here is a quick summary of my most recent experiences:'
        >
            <div className={clsx(styles.container, theme === 'dark' && styles.dark)}>
                {contentCardExperience.map((item, index) => {
                    return (
                        <div className={styles.card}>
                            <div className={styles.left}>
                                <span>{item.logo}</span>
                            </div>
                            <div className={styles.center}>
                                <h4>
                                    {item.title}
                                </h4>
                                <span>
                                    {item.content}
                                </span>
                                <span>
                                  {item?.descriptions}
                                </span>
                            </div>
                            <div className={styles.right}>
                                {item.time}
                            </div>
                        </div>
                    )
                })}
            </div>
        </MainContainer>
    )
}
export default ExperiencePage