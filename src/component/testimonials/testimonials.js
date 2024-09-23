import React from 'react'
import MainContainer from '../../container/layout/main'

import styles from './testimonials.module.scss'
import SimpleSlider from './slider-item';

const Testimonials = ({ testimonialsRef }) => {

    return (
        <MainContainer
            topic='Testimonials'
            title='Nice things people have said about me:'
            id='Testimonials'
            refTopic={testimonialsRef}
        >
            <div className={styles.container}>
                <SimpleSlider />
            </div>
        </MainContainer>
    )
}

export default Testimonials
