import clsx from "clsx";
import MainContainer from "../../container/layout/main"
import styles from './experience.module.scss'
import { contentCardExperience, mode } from "../../contants/index,";
import { useMode } from "../../hook/useMode";
import useDevice from "../../hook/useDevice";

const ExperiencePage = ({ experienceRef }) => {
    const { theme } = useMode();
    const {isMobile} = useDevice();

    return (
        <MainContainer
            topic='Experience'
            title='Here is a quick summary of my most recent experiences:'
            refTopic={experienceRef}
            id='ExperienceRef'
        >
            <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobiContainer)}>
                <div className={styles.boxCard}>

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
                                        &#8901; {item.content}
                                    </span>
                                    <span>
                                        {item.descriptions && <>&#8901; {item?.descriptions}</>}   
                                    </span>
                                </div>
                                <div className={styles.right}>
                                    {item.time}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainContainer>
    )
}
export default ExperiencePage