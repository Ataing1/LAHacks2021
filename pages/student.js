import React, {useState} from 'react';
import styles from '../styles/student.module.css';

export default function student() {
    return (
        // should it be a html video element?
        <div>
            <div className={styles.teacherPanel}>
                <p className={styles.userName}>Professor</p>
            </div>

            <div className={styles.row}>
                <div className={styles.user}>
                    <p className={styles.userName}>Amy</p>
                </div>
                <div className={styles.user}>
                    <p className={styles.userName}>Ben</p>
                </div>
                <div className={styles.user}>
                    <p className={styles.userName}>Cain</p>
                </div>
                <div className={styles.user}>
                    <p className={styles.userName}>David</p>
                </div>
            </div>

            <div className={styles.toolbar}>
                <button className={styles.action}>shout</button>
                <button className={styles.action}>mute</button>
                <button className={styles.action}>chat</button>
                <button className={styles.action}>switch</button>
                <button className={styles.leave}>leave</button>
            </div>
        </div>
    )
}