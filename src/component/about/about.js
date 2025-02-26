import clsx from 'clsx';
import MainContainer from '../../container/layout/main';
import styles from './about.module.scss'
import { mode } from '../../contants/index,';
import { useMode } from '../../hook/useMode';
import useDevice from '../../hook/useDevice';

const AboutPage = ({ aboutRef }) => {
    const {theme} = useMode();
    const { isMobile} = useDevice();

    return (
        <MainContainer
            topic='About me'
            refTopic={aboutRef}
            id='About'
        >
            <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobiContainer)}>
                <div className={styles.card}>
                    <div className={styles.containerImg}>
                        <div className={styles.imgItem}>
                            {isMobile ? (
                                <img src='/avatar-2.jpg' height={280} width={240} alt='avatar' />
                            ) : (
                                <img src='/avatar-2.jpg' height={480} width={400} alt='avatar' />
                            )}
                            <div className={styles.photoShawdow}></div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h1>Curious about me? Here you have it:</h1>
                        <p>
                        I am a front-end developer with 2 years of experience, specializing in React, Next.js, JavaScript, and Node.js. Passionate about blending design and technology, I focus on user experience, crafting pixel-perfect interfaces, and writing clean, maintainable, and high-performance code. 
                        I believe that the combination of creative thinking and technical expertise is the key to delivering real value to digital products.
                        </p>
                        <p>
                        I am always exploring, learning, and striving to grow, keeping up with new technologies like TypeScript, 
                        Tailwind CSS, Next.js, and more. Staying up to date and applying modern technologies allows me to optimize performance, enhance user experience, and deliver high-quality products.
                        </p>
                        <p>
                            I am very much a progressive thinker and enjoy working on products end to end,
                            from ideation all the way to development.
                        </p>
                        <p>Finally, some quick bits about me.</p>
                        <div className={styles.titleDescription}>
                            <div>
                                <p>&#8226; Front-end Developer with 2 years of experience</p>
                                <p>&#8226; Passionate about building beautiful, performant UIs</p>
                            </div>
                            <div>
                                <p>&#8226; Always exploring new technologies </p>
                                <p>&#8226; Constantly experimenting</p>
                            </div>
                        </div>
                        <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello 😉</p>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}
export default AboutPage;