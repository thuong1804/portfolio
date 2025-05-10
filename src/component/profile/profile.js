import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTelegram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import MainContainer from '../../container/layout/main';
import clsx from 'clsx';
import { mode } from '../../contants/index,';
import styles from './profile.module.scss'
import { useMode } from '../../hook/useMode';
import useDevice from '../../hook/useDevice';

const ProfilePage = ({profileRef}) => {
    const {theme} = useMode()
    const {isMobile} = useDevice();

    const linkIcon = [
        {
            key: 'facebook',
            value: faFacebook,
            link: 'https://www.facebook.com/Thuongpro40/'
        },
        {
            key: 'telegram',
            value: faTelegram,
            link: 'https://t.me/thuong2x'

        },
        {
            key: 'linkedin',
            value: faLinkedinIn,
            link: 'https://www.linkedin.com/in/l%C3%AA-ho%C3%A0i-th%C6%B0%C6%A1ng-17aa48257/'
        },
        {
            key: 'github',
            value: faGithub,
            link: 'https://github.com/thuong1804'
        },
    ]

    return (
        <MainContainer
            light
            id='Profile'
            refTopic={profileRef}
        >
            <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobiContainer)}>
                <div className={styles.cardInfo}>
                    <div className={styles.headInfo}>
                        <h1>
                            Hi, I'm Thuong Le <FontAwesomeIcon icon={faHandPeace} className={styles.icon} />
                        </h1>
                        <p>
                          I am a frontend developer with two years of experience, proficient in Next.js, React, JavaScript, and Node.js. 
                          I am eager to apply my knowledge and skills to create meaningful contributions to the company. 
                          With a strong commitment to continuous learning and innovation, I strive to bring value, efficiency, 
                          and a positive impact to the organization
                        </p>
                    </div>
                    <div className={styles.containerDetail}>
                        <div className={styles.detail}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.iconLocation} />
                            <p>Ho Chi Minh city</p>
                        </div>
                        <div className={styles.detail}>
                            <FontAwesomeIcon icon={faPhone} className={styles.iconStatus} />
                            <p>0853908398</p>
                        </div>
                        <div className={styles.detail}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.iconStatus} />
                            <p>thuong123tvt@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contactLink}>
                        {linkIcon.map((item, key) => (
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <div className={styles.itemIcon}>
                                    <FontAwesomeIcon icon={item.value} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.avatar}>
                    <div className={styles.containerImg}>
                        {isMobile ? (
                            <img src='/avatar.jpg' height={250} width={200} alt='avatar' style={{objectFit:'cover'}}/>
                        ) : (
                            <img src='/avatar.jpg' height={320} width={280} alt='avatar' style={{objectFit:'cover'}}/>
                        )}
                        <div className={styles.photoShawdow}></div>
                    </div>

                </div>
            </div>
        </MainContainer>
    )
}
export default ProfilePage;