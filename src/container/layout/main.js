import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import styles from './main.module.scss'
import { mode } from '../../contants/index,';
import { useMode } from '../../hook/useMode';
import useDevice from '../../hook/useDevice';

const MainContainer = ({
    children,
    light,
    topic,
    title,
    refTopic,
    id,
}) => {
    const {theme} = useMode();
    const [isVisible, setIsVisible] = useState(false);
    const {isMobile} = useDevice();

    const handelChangeModeTheme = () => {
        if (theme === mode.DARK) {
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

    useEffect(() => {
        if (refTopic) {
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
              });
          
              if (refTopic.current) {
                observer.observe(refTopic?.current);
              }
          
              return () => {
                if (refTopic.current) {
                  observer.unobserve(refTopic?.current);
                }
              };
        }
     
      }, []);

    return (
        <div className={clsx(styles.container, handelChangeModeTheme(), isVisible && styles.visible,isMobile && styles.mobiContainer )}>
            <div className={clsx(styles.content, theme === mode.DARK && styles.dark)} id={id} ref={refTopic}>
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