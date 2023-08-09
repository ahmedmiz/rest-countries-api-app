
function Search({ getRegion, getSearchText, theme }) {
    return (
        <form action="none" className=' mw-100 align-items-center form'>
            <div className='m-4 search-container'>
                <input type="text" placeholder='search for a country'
                    className={`${theme}-search search rounded w-100`} onChange={(e) => {
                        getSearchText
                            (e.target.value)
                    }} />
            </div>
            <div className='filter-container m-2 '>
                <select defaultValue="All" name="Filter by Region" placeholder='Filter by Region' className={`${theme}-filter filter p-2 rounded`} onChange={(e) => { getRegion(e.target.value) }}>
                    <option value="" disabled hidden>Filter by Region</option>
                    <option value="All" >All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </form >
    );
}

export default Search; 