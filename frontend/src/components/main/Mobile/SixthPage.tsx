import React, { useEffect } from 'react';
import Image from 'next/image';
import greeting from '@/images/greeting.png';
import styles from './Mobile.module.scss';
import classNames from 'classnames';
import useInView from '../Mobile/useInView';

function SixthPage() {
    const [ref, isInView] = useInView(0.5);
    useEffect(() => {
        console.log('Visibility status:', isInView ? 'Second Visible' : '');
    }, [isInView]);
    return (
        <div className={styles.boxContainer} ref={ref}>
            <div className={classNames('w-full', styles.fadeUp, isInView ? styles.fadeUpVisible : styles.fadeUp)}>
                <div className="text-2xl font-bold">
                    <p>가지고 있는 물건으로</p>
                    <p>짭짤한 수입을</p>
                    <p>만들 수 있고</p>
                </div>
                <Image src={greeting} alt="greeting" className="p-4 pt-8 pb-8" />
                <div className="text-2xl font-bold text-right">
                    <p>잠깐 필요한 물건을</p>
                    <p>사지 않아 지출을</p>
                    <p>줄일 수 있고</p>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;