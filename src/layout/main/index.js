import React from 'react'
import ProfilePage from '../../component/profile/profile';
import AboutPage from '../../component/about/about';
import SkillPage from '../../component/skill/skill';
import ExperiencePage from '../../component/experience/experience';
import WorkPage from '../../component/work/work';
import Testimonials from '../../component/testimonials/testimonials';
import GetItTouch from '../../component/getItTouch/getItTouch';

const MainLayout = () => {
    return (
        <React.Fragment>
            <ProfilePage />
            <AboutPage />
            <SkillPage />
            <ExperiencePage />
            <WorkPage />
            <Testimonials/>
            <GetItTouch/>
        </React.Fragment>
    )
}
export default MainLayout;