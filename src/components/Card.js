import './components.css'
import { useNavigate } from 'react-router-dom'

function Card({ name, population, flag, region, capital, theme }) {
    const route = useNavigate();
    const handleClickOnCard = () => {
        route(`/Country/${name}`);
    }
    return (
        <div className={`card ${theme}-card d-flex rounded m-3`} onClick={handleClickOnCard}>
            <div className='img-container'>
                <img src={flag} alt="none" loading="lazy" className="rounded card-img" />
            </div>
            <h3 className='p-2'>{name}</h3>
            <p className='pad-10'><span className='key-info'>capital: </span>  {capital}</p>
            <p className='pad-10'><span className='key-info'>population: </span>{population}</p>
            <p className='pad-10'><span className='key-info'>region: </span>{region}</p>
        </div>


    );
}


export default Card;