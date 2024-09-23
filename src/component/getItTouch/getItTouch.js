import React, { useState, useEffect } from 'react'
import MainContainer from '../../container/layout/main'
import { faEnvelope, faCopy, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './getItTouch.module.scss'
import clsx from 'clsx'
import { mode } from '../../contants/index,'
import { useMode } from '../../hook/useMode'
import useDevice from '../../hook/useDevice'

const GetItTouch = ({ contactRef }) => {
    const { theme } = useMode();
    const [isCopyInfo, setIsCopyInfo] = useState(false);
    const [isCopyNumber, setIsCopyInfoNumber] = useState(false);
    const {isMobile} = useDevice();

    const item = [
        {
            key: 'github',
            icon: faGithub,
            link: 'https://github.com/thuong1804'
        },
        {
            key: 'facebook',
            icon: faFacebook,
            link: 'https://github.com/thuong1804'
        },
        {
            key: 'skype',
            icon: faSkype,
            link: 'https://github.com/thuong1804'
        },
    ]
    
    const handelClickCopy = (e, id) => {
        if (id === 'info') {
            setIsCopyInfo(pre => !pre)
        } else {
            setIsCopyInfoNumber(pre => !pre)
        }
        const textInfo = document.getElementById(id).outerText
        const tempInput = document.createElement('input');
        tempInput.value = textInfo;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(tempInput);
    }

    useEffect(() => {
        if (isCopyInfo) {
            const timer = setTimeout(() => {
                setIsCopyInfo(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setIsCopyInfoNumber(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isCopyInfo, isCopyNumber]);

    return (
        <MainContainer
            light
            topic='Get in touch'
            id='Contact'
            refTopic={contactRef}
            title='What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.'
        >
            <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobiContainer)}>
                <div className={styles.info} id='info'>
                    {isCopyInfo && (<span>Copied</span>)}
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.icon}
                    />
                    thuong123tvt@gmail.com
                    <FontAwesomeIcon
                        icon={faCopy}
                        className={styles.icon2}
                        onClick={(e) => handelClickCopy(e, 'info')}
                    />
                </div>
                <div className={styles.info} id='number'>
                    {isCopyNumber && (<span>Copied</span>)}
                    <FontAwesomeIcon
                        icon={faPhone}
                        className={styles.icon}
                    />
                    +91 8980500565
                    <FontAwesomeIcon
                        icon={faCopy}
                        className={styles.icon2}
                        onClick={(e) => handelClickCopy(e, 'number')}
                    />
                </div>
                <span>You may also find me on these platforms!</span>
                <div className={styles.containerLink}>
                    {item.map(item => {
                        return (
                            <a
                                href={item.link}
                                className={styles.link}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={item.icon} />
                            </a>
                        )
                    })}
                </div>
            </div>
        </MainContainer>
    )
}

export default GetItTouch
