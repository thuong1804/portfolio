
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
            title: 'Title',
            content: 'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks',
            skills: ['React', 'Typescript', 'React Bootstrap', 'Firebase', 'Express.js', 'MySql', 'Styled Components'],
            img: '/hihhi.png',
            link: <FontAwesomeIcon icon={faUpRightFromSquare} />
        },
        {
            title: 'Title',
            content: 'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks',
            skills: ['React', 'Typescript', 'React Bootstrap', 'Firebase', 'Express.js', 'MySql', 'Styled Components'],
            link: <FontAwesomeIcon icon={faUpRightFromSquare} />,
            img: '/hihhi.png',
        },
        {
            title: 'Title',
            content: 'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks',
            skills: ['React', 'Typescript', 'React Bootstrap', 'Firebase', 'Express.js', 'MySql', 'Styled Components'],
            link: <FontAwesomeIcon icon={faUpRightFromSquare} />,
            img: '/hihhi.png',
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
                                    <img src={item.img} width={300} height={250} alt='avatar' className={styles.img} />
                                ) : (
                                    <img src={item.img} width={470} height={280} alt='avatar' className={styles.img} />
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
                                <div>{item.link}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </MainContainer>
    )
}
export default WorkPage;