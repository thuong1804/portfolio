import Navbar from '../navbar';
import styles from './index.module.scss';
import { useState } from 'react';
import useDevice from '../../hook/useDevice';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderLayout = ({ onClick, setIsOpen }) => {
    const { isMobile } = useDevice();

    return (
        <div className={clsx(styles.container, isMobile && styles.mobiHeader)}>
            <div className={styles.navbarHeader}>
                <div className={styles.title}>Hello</div>
                {isMobile ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => setIsOpen(pre => !pre)}
                    />
                ) : (
                    <Navbar onClick={onClick} />
                )}
            </div>
            
        </div>
    );
};

export default HeaderLayout;
