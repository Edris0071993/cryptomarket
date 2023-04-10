import React from 'react';
import styles from './coin.module.css';

const Coin = ({image,name,price,market,rank}) => {
    return (
        <div className={styles.container}>
            <table className={styles.customer}>
                   
                   <tr>
                        <td><img src={image} alt={name} /></td>
                        <td><span className={styles.content1}>{name.toUpperCase()}</span></td>
                        <td><span className={styles.content2}>{price.toLocaleString()}</span></td>
                        <td><span className={styles.content3}>{market.toLocaleString()}</span></td>
                        <td><span className={styles.content4}>{rank}</span></td>
                   </tr>
            </table>
                    
        </div>
    );
};

export default Coin;