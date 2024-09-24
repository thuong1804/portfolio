
import React, { useRef, useEffect } from 'react'
import ProfilePage from '../../component/profile/profile';
import AboutPage from '../../component/about/about';
import SkillPage from '../../component/skill/skill';
import ExperiencePage from '../../component/experience/experience';
import WorkPage from '../../component/work/work';
import Testimonials from '../../component/testimonials/testimonials';
import GetItTouch from '../../component/getItTouch/getItTouch';

const MainLayout = ({ refComponent }) => {
    const profileRef = useRef()
    const aboutRef = useRef()
    const workRef = useRef()
    const skillRef = useRef()
    const testimonialsRef = useRef()
    const contactRef = useRef()
    const experienceRef = useRef()

    useEffect(() => {
        if (profileRef || aboutRef || workRef || testimonialsRef || contactRef || skillRef) {
            refComponent?.(profileRef, aboutRef, workRef, testimonialsRef, contactRef)
        }
    }, [workRef, aboutRef, testimonialsRef, contactRef, skillRef, profileRef])

    return (
        <React.Fragment>
            <ProfilePage profileRef={profileRef} />
            <AboutPage aboutRef={aboutRef} />
            <SkillPage skillRef={skillRef}/>
            <ExperiencePage experienceRef={experienceRef}/>
            <WorkPage workRef={workRef} />
            <Testimonials testimonialsRef={testimonialsRef} />
            <GetItTouch contactRef={contactRef} />
        </React.Fragment>
    )
}
export default MainLayout;