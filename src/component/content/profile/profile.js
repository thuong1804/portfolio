import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './profile.module.scss'
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';
const ProfilePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardInfo}>
                <h1>
                    Hi, I'm Sagar <FontAwesomeIcon icon={faHandPeace} className={styles.icon}/>
                </h1>
                <p>
                    I'm a full stack developer (React.js & Node.js) with a focus on creating
                    (and occasionally designing) exceptional digital experiences that are fast, 
                    accessible, visually appealing, and responsive. Even though I have been creating
                    web applications for over 7 years, I still love it as if it was something new.
                </p>
                <div>location</div>
                <div>status</div>
            </div>
            <div className={styles.avatar}>
                <div className={styles.containerImg}>
                    <img src='/hihhi.png' height={320} width={280} alt='avatar' />
                </div>
                <div className={styles.photoShawdow}></div>

            </div>
        </div>
    )
}
export default ProfilePage;