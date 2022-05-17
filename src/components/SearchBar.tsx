import './SearchBar.css'

const SearchBar = ({event , type , placeholder ,searchText} : any) => (
    <div className='SearchBar-container'>
        <input type={type} value={searchText} placeholder={placeholder} onChange={event} />
        <div className='logo'></div>
    </div> 
 )

export default SearchBar;