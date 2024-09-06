import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContainer from "../../container/main";
import styles from './skill.module.scss'
import { faJs, faBootstrap, faReact, faNodeJs, faSass, faFigma, faGit } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const SkillPage = () => {

    const skills = [
        {
            name: 'Javascript',
            icon: faJs
        },
        {
            name: 'Bootstrap',
            icon: faBootstrap
        },
        {
            name: 'React',
            icon: faReact
        },
        {
            name: 'Nextjs',
            icon: faJs
        },
        {
            name: 'Nodejs',
            icon: faNodeJs
        },
        {
            name: 'Database',
            icon: faServer
        },
        {
            name: 'Sass/Scss',
            icon: faSass
        },
        {
            name: 'Figma',
            icon: faFigma
        },
        {
            name: 'Git',
            icon: faGit
        },


    ]

    return (
        <MainContainer
            light
            topic='Skills'
            title='The skills, tools and technologies I am really good at:'
        >
            <div className={styles.container}>
                {skills.map((item, index) => (
                    <div className={styles.skills}>
                        <span>{item.name}</span>
                        <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                    </div>
                ))}
            </div>
        </MainContainer>
    )
}
export default SkillPage;