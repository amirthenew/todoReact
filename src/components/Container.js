import React from 'react';
import Todos from './Todos';
import styles from '../components/Container.module.css'


const Container = () => {
    return (
        <div className={styles.container}>
        <Todos className={styles.box}/>
        
        </div>

      );
}
 
export default Container;