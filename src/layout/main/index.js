import React from 'react'
import ProfilePage from '../../component/profile/profile';
import AboutPage from '../../component/about/about';
import SkillPage from '../../component/skill/skill';
const MainLayout = () => {
    return (
        <React.Fragment>
            <ProfilePage />
            <AboutPage />
            <SkillPage />
        </React.Fragment>
    )
}
export default MainLayout;