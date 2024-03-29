import React, { useState } from "react";

import "./SearchBar.css"




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

     const selectInput = (result) =>{
        console.log(result+"here");
        console.log(result.name);
        setInputData(result.name);
        setFilteredData([]);
    } 


    /* Notes for later, need to edit search icons below */
    return (
        <div className="searchbar-function-container">
            <div className="input-container">
                <input
                    className="input-bar"
                    type="text" 
                    value={inputData}
                    placeholder={placeholder} 
                    onChange={handleFilter} 
                />
                <div className="searchIcon">
                    
                    {inputData.length === 0 ? (
                        <div>Clear</div>
                    ) : (
                        <div id="clearBtn" onClick={clearInput}>Clear</div>
                    )}

                </div>
            </div>



            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {!filteredData ? null : filteredData.map(result => {
                        return (<p id="clearBtn"
                         onClick={e => selectInput(result)}
                         >{result.name}</p>)
                    })}
                </div>
            )}
        </div>

    );
}

export default SearchBar;