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

   /*  const selectInput = (event) =>{
        setInputData();
    } */


    /* Notes for later, need to edit search icons below */
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
                    {inputData.length === 0 ? (
                        <div>Open</div>
                    ) : (
                        <div id="clearBtn" onClick={clearInput}>Close</div>
                    )}

                </div>


            </div>



            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {!filteredData ? null : filteredData.map(result => {
                        return (<p id="clearBtn"
                         //onClick={selectInput}
                         >{result.name}</p>)
                    })}
                </div>
            )}
        </div>

    );
}

export default SearchBar;