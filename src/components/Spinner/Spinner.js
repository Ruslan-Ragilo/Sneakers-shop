import styles from './Spinner.module.scss'

function Spinner() {
    return ( 
        <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
     );
}

export default Spinner;