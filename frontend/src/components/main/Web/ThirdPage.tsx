import React from 'react';
import Image from 'next/image';
import img_earth from '@/images/img_earth.jpg';
import styles from './Web.module.scss';
import classNames from 'classnames';

function ThirdPage(props: any) {
    return (
        <div className={styles.parent}>
            <div className={classNames(styles.textContainer, 'text-center')}>
                <p className={classNames(styles.text, styles.blue)}>불필요한 낭비를 줄여</p>
                <p className={styles.text}>환경 보호에도 좋습니다.</p>
                <div className="rounded-xl bg-blue-400">
                    <Image src={img_earth} alt="img_earth" className="w-full" />
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;