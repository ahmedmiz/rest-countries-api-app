
import Search from './Search'
import Card from './Card';

import { useState, useEffect } from 'react';

function Home({ theme, getIndex }) {
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getRegion = (par) => {
        setSelectedRegion(par);
    }
    const getSearchText = (par) => {
        setSearchText(par);
    }

    useEffect(() => {
        setIsLoading(true);
        console.log(isLoading);
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((Data) => setData(Data)).then(() => setIsLoading(false)).catch((err) => console.log(err));

    }, [])
    return (
        <>
            {
                isLoading ? (

                    <div className="spinner-border spinner" role="status">

                    </div>
                )
                    : (
                        <>
                            <Search getRegion={getRegion} getSearchText={getSearchText} theme={theme} />
                            <div className="cards-container">
                                {data.map((item, index) => {
                                    if ((item.region === selectedRegion || selectedRegion === 'All') && (searchText === '' || item.name.common.indexOf(searchText.charAt(0).toUpperCase() + searchText.slice(1,).toLowerCase()) !== -1))

                                        return <Card
                                            key={index}
                                            name={item.name.common}
                                            population={item.population}
                                            flag={item.flags.png}
                                            region={item.region}
                                            capital={item.capital}
                                            theme={theme}
                                        />
                                })}
                            </div>
                        </>
                    )
            }
        </>
    )
}


export default Home;  