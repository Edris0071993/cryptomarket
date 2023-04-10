import React ,{ useEffect, useState } from 'react';
import {getCoin} from '../API/Api';
import Loader from './Loader';
import Coin from './Coin';
import styles from './landing.module.css';

const Landing = () => {
    const [coins,setCoins] = useState([])
    const [search,setSearch] = useState("")
    
    useEffect(() =>{
      const fetchApi = async() =>{
        const data = await getCoin();
        setCoins(data);
      }
      fetchApi()
    },[])

    const searchHandler = event =>{
        setSearch(event.target.value)
    }

    const searchCoin = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={styles.container}>
            <input className={styles.search} type="text" placeholder='search' value={search} onChange={searchHandler}/>
           <div className={styles.content}>
           
           {
                coins.length ?
                <div>
                    {
                    searchCoin.map(coin => <Coin 
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        price={coin.current_price}
                        market={coin.market_cap}
                        rank={coin.market_cap_rank}
                        />)
                    }
                </div> :
                <Loader/>


            }
           </div>
            

            
        </div>
    );
};

export default Landing;