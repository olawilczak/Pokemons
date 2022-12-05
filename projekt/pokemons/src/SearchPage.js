

const SearchPage = ({name, onBack}) => {
return (
    <div>
    <button onClick={onBack}></button>
    <p>{name}</p>
    </div>
)
};


export default SearchPage;