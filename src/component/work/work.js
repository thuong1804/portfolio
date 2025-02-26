
import MainContainer from "../../container/layout/main";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from './work.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { mode } from "../../contants/index,";
import { useMode } from "../../hook/useMode";
import useDevice from "../../hook/useDevice";

const WorkPage = ({ workRef }) => {
    const {theme} = useMode();
    const {isMobile} = useDevice();

    const contentWork = [
        {
            title: 'ThnkAndGrow-Blog',
            content: 'The website specializes in posting articles related to installation, software, hardware, security, technology trends and technical instructions. This is a place to help programmers, software engineers and technology lovers stay up to date with the latest knowledge.',
            skills: ['NextJs', 'Tailwind', 'Graphql', 'CSS Module', 'Apollo client'],
            link: "https://daily.thnkandgrow.com/blog",
            img: '/blog-logo.jpg',
        },
        {
            title: 'i-Test4u',
            content: 'i-Test4u is a comprehensive online exam management platform pioneered by Dai Truong Phat Education Group with a rich database system.',
            skills: ['NextJs', 'CSS Module', 'SASS/SCSS'],
            link: "https://i-test4u.vn/",
            img: '/logo-itest.svg',
        },
        {
            title: 'Eduhomex-CMS',
            content: 'CMS is where website administrators can update and change content on the website.',
            skills: ['React', 'Ant Design', 'Redux', 'MySql', 'SASS/SCSS', 'CSS Module'],
            img: '/logo-eduhome.svg',
            link: 'https://eduhome-cms-dev.dtpsoft.vn/'
        },
        {
            title: 'i-Test-CMS',
            content: 'CMS is where website administrators can update and change content on the website.',
            skills: ['React', 'Ant Design', 'Redux', 'MySql', 'SASS/SCSS', 'CSS Module'],
            link: 'https://i-test-cms-dev.dtpsoft.vn/',
            img: '/logo-itest.svg',
        },
        {
            title: 'LMS-CMS',
            content: 'CMS is where website administrators can update and change content on the website.',
            skills: ['React', 'Ant Design', 'Redux', 'MySql', 'SASS/SCSS', 'CSS Module'],
            link: "https://lms-cms-dev.dtpsoft.vn/",
            img: '/i-con-DTP.png',
        },
    ]
    return (
        <MainContainer
            light
            topic='Work'
            title='Some of the noteworthy projects I have built:'
            id='Work'
            refTopic={workRef}
        >
            <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobiContainer)}>
                {contentWork.map((item, index) => {
                    return (
                        <div className={clsx(styles.card, {
                            [styles.reverseCard]: index === 1
                        })}>
                            <div className={styles.left}>
                                {isMobile ? (
                                    <img src={item.img} width={300} height={250} alt='avatar' className={styles.img} style={index === 0 ? {objectFit:'none'}: {objectFit:'contain'}}/>
                                ) : (
                                    <img src={item.img} width={470} height={280} alt='avatar' className={styles.img} style={index === 0 ? {objectFit:'none'}: {objectFit:'contain'}}/>
                                )}
                            </div>
                            <div className={styles.right}>
                                <h4>{item.title}</h4>
                                <span className={styles.content}>
                                    {item.content}
                                </span>
                                <div className={styles.skills}>
                                    {item.skills.map(value => {
                                        return (
                                            <div className={styles.item}>
                                                {value}
                                            </div>
                                        )
                                    })}
                                </div>
                                <a href={item.link} target="_blank">
                                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </MainContainer>
    )
}
export default WorkPage;