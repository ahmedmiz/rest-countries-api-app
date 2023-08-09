import { useState, useEffect, useRef } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, Spin } from 'antd';



function Country({ theme }) {
    const route = useNavigate();
    let { name } = useParams()
    let lowerCaseName = name.toLowerCase()
    const [data, setData] = useState({})
    const [pageLoading, setPageLoading] = useState(true)
    const FIRST_TIME_REF = useRef(null)
    const handleClickOnBorder = (borderName) => {
        fetch(`https://restcountries.com/v3.1/alpha/${borderName}`).then((response) => response.json()).then((data) => {
            route(`/Country/${data[0].name.common}`)
            setData(data[0]);
            setPageLoading(false)
        });


    }

    useEffect(() => {

        if (FIRST_TIME_REF.current == null) {
            fetch(`https://restcountries.com/v3.1/name/${lowerCaseName}`)
                .then((response) => response.json()).then((data) => setData(data[0])).then(() => setPageLoading(false));
            FIRST_TIME_REF.current = false;

        }

    }, [name])

    return (

        <>
            {(data.flags?.png) &&
                (

                    <div>
                        {
                            pageLoading ? (

                                <div className="spinner-border spinner" role="status">

                                </div>
                            ) : (
                                <>
                                    <button className={`${theme}-button  rounded back-button shadow-sm p-2 m-4`} onClick={() => { route('/') }}><BiArrowBack />back</button>
                                    <div className=' country-container'>
                                        <div className='img-container'>
                                            <img src={data.flags.png} alt="none" />
                                        </div>
                                        <div className='info-container'>
                                            <div className="up-container">
                                                <div>
                                                    <h2 className='pt-3 pb-3'>{data.name.common}</h2>
                                                    <div><span className='key-info '>Native Name: </span> <span>{data.name.nativeName[Object.keys(data.name.nativeName)[0]].common}</span></div>
                                                    <div className='pt-1'><span className='key-info '>Population: </span> <span>{data.population}</span></div>
                                                    <div className='pt-1'><span className='key-info'>Region: </span> <span >{data.region}</span></div>
                                                    <div className='pt-1'><span className='key-info'>Sub Region: </span> <span>{data.subregion}</span></div>
                                                    <div className='pt-1 pb-3'><span className='key-info'>Capital: </span> <span>{data.capital}</span></div>
                                                </div>
                                                <div className='right-container'>
                                                    <div><span className='key-info'>Top Level Domain </span> <span>{data.tld}</span></div>
                                                    <div className='pt-1'><span className='key-info'>currencies: </span> <span>{data.currencies[Object.keys(data.currencies)[0]].name}</span></div>
                                                    <div className='pt-1 pb-3'><span className='key-info'>Languages:</span>
                                                        {
                                                            Object.values(data.languages)?.map((item, index) => {
                                                                return (
                                                                    <span key={index}>{item}   </span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border-container'>
                                                <div className='key-info pb-2 '>Border Countries:</div>
                                                {
                                                    data?.borders?.map((item, index) => {
                                                        return (
                                                            <button className={`${theme}-button  rounded back-button shadow-sm p-2 m-2 `}
                                                                onClick={() => { handleClickOnBorder(item) }}
                                                                key={index}>{item}</button>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        }

                    </div>
                )
            }
        </>



    )
}

export default Country; 