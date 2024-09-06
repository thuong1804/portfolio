import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './profile.module.scss'
import { faHandPeace, faLocationDot, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTelegram, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import MainContainer from '../../container/main';

const ProfilePage = () => {
    const linkIcon = [
        {
            key: 'facebook',
            value: faFacebook,
            link: 'https://www.facebook.com/Thuongpro40/'
        },
        {
            key: 'telegram',
            value: faTelegram,
            link: 'https://www.facebook.com/Thuongpro40/'

        },
        {
            key: 'skype',
            value: faSkype,
            link: 'https://www.facebook.com/Thuongpro40/'

        },
        {
            key: 'github',
            value: faGithub,
            link: 'https://www.facebook.com/Thuongpro40/'
        },
    ]

    return (
        <MainContainer
            light
        >
            <div className={styles.container}>
                <div className={styles.cardInfo}>
                    <div className={styles.headInfo}>
                        <h1>
                            Hi, I'm Sagar <FontAwesomeIcon icon={faHandPeace} className={styles.icon} />
                        </h1>
                        <p>
                            I'm a full stack developer (React.js & Node.js) with a focus on creating
                            (and occasionally designing) exceptional digital experiences that are fast,
                            accessible, visually appealing, and responsive. Even though I have been creating
                            web applications for over 7 years, I still love it as if it was something new.
                        </p>
                    </div>
                    <div className={styles.containerDetail}>
                        <div className={styles.detail}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.iconLocation} />
                            <p>location</p>
                        </div>
                        <div className={styles.detail}>
                            <FontAwesomeIcon icon={faDotCircle} className={styles.iconStatus} />
                            <p>status</p>
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
                        <img src='/hihhi.png' height={320} width={280} alt='avatar' />
                    </div>
                    <div className={styles.photoShawdow}></div>

                </div>
            </div>
        </MainContainer>
    )
}
export default ProfilePage;