import React from 'react'
import MainContainer from '../../container/main'

import styles from './testimonials.module.scss'
import SimpleSlider from './slider-item';

const Testimonials = () => {
    
    return (
        <MainContainer
            topic='Testimonials'
            title='Nice things people have said about me:'
        >
            <div className={styles.container}>
                <SimpleSlider />
            </div>
        </MainContainer>
    )
}

export default Testimonials
