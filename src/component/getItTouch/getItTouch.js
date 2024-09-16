import React from 'react'
import MainContainer from '../../container/main'
import { faEnvelope, faCopy, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './getItTouch.module.scss'

const GetItTouch = () => {
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

    return (
        <MainContainer
            light
            topic='Get in touch'
            title='What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.'
        >
            <div className={styles.container}>
                <div className={styles.info}>
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className={styles.icon}
                    /> 
                    thuong123tvt@gmail.com 
                    <FontAwesomeIcon 
                        icon={faCopy} 
                        className={styles.icon}
                    />
                </div>
                <div className={styles.info}>
                     <FontAwesomeIcon 
                        icon={faPhone} 
                        className={styles.icon}
                    /> 
                    +91 8980500565 
                    <FontAwesomeIcon 
                        icon={faCopy} 
                        className={styles.icon}
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
