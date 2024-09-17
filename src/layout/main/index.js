
import React, { useRef, useEffect } from 'react'
import ProfilePage from '../../component/profile/profile';
import AboutPage from '../../component/about/about';
import SkillPage from '../../component/skill/skill';
import ExperiencePage from '../../component/experience/experience';
import WorkPage from '../../component/work/work';
import Testimonials from '../../component/testimonials/testimonials';
import GetItTouch from '../../component/getItTouch/getItTouch';

const MainLayout = ({ refComponent }) => {
    const aboutRef = useRef()
    const workRef = useRef()
    const testimonialsRef = useRef()
    const contactRef = useRef()

    useEffect(() => {
        if (aboutRef || workRef || testimonialsRef || contactRef) {
            refComponent?.(aboutRef, workRef, testimonialsRef, contactRef)
        }
    }, [workRef, aboutRef, testimonialsRef, contactRef])

    return (
        <React.Fragment>
            <ProfilePage />
            <AboutPage aboutRef={aboutRef} />
            <SkillPage />
            <ExperiencePage />
            <WorkPage workRef={workRef} />
            <Testimonials testimonialsRef={testimonialsRef} />
            <GetItTouch contactRef={contactRef} />
        </React.Fragment>
    )
}
export default MainLayout;