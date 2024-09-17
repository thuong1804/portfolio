import clsx from 'clsx'
import styles from './main.module.scss'
import { useMode } from '../../context/useMode';

const MainContainer = ({
    children,
    light,
    topic,
    title,
    refTopic,
    id,
}) => {
    const {theme} = useMode();

    const handelChangeModeTheme = () => {
        if (theme === 'dark') {
            if (light) {
                return styles.black
            } else {
                return styles.blue
            }
        } else {
            if (light) {
                return styles.light
            } else {
                return styles.gray
            }
        }
    }

    return (
        <div className={clsx(styles.container, handelChangeModeTheme())}>
            <div className={clsx(styles.content, theme === 'dark' && styles.dark)} id={id} ref={refTopic}>
                {(topic || title) && (
                    <div className={styles.topic}>
                        <div className={styles.description}>
                            <span>{topic}</span>
                            <span>{title}</span>
                        </div>
                    </div>
                )}
                {children}
            </div>
        </div>
    )
}
export default MainContainer;