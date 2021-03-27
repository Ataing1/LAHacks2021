import styles from '../styles/teacher.module.css';

export default function teacher() {
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 1</p>
                </div>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 2</p>
                </div>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 3</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 4</p>
                </div>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 5</p>
                </div>
                <div className={styles.table}>
                    <p className={styles.tableName}>table 6</p>
                </div>
            </div>

            <div className={styles.teacherPanel}>
                <p className={styles.tableName}>Professor</p>
            </div>
        </div>
    )
}