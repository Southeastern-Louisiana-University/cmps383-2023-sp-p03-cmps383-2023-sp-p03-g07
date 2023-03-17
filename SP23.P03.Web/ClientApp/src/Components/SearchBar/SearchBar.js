import React, { useState } from "react";
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";




function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [inputData, setInputData] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInputData(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setInputData("");
    }



    return (
        <div className="search">
            <div className="SearchInputs">
                <input
                 type="text" 
                 value={inputData}
                 placeholder={placeholder} 
                 onChange={handleFilter} 
                />

                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}

                </div>


            </div>



            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {!filteredData ? null : filteredData.map(result => {
                        return (<p>{result.name}</p>)
                    })}
                </div>
            )}
        </div>

    );
}

export default SearchBar;