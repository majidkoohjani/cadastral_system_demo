import { useState } from "react";
import magnifier from "../../assets/images/magnifier.svg";
import "./SearchBox.scss";
import { translate } from "../../core/helpers/Translator";

const SearchBox = () => {
    const [searchText, setSearchText] = useState("");

    const onChangeSearchText = (event) => {
        setSearchText(event.target.value);
    }

    const onSearchButtonClicked = () => {
        alert("Search action must be implemented!!!");
    }

    return (
        <div className="search-box">
            <div className="search-box__button">
                <button type="button" onClick={onSearchButtonClicked}>
                    <img src={magnifier} alt="Magnifier" className="magnifier-icon" />
                </button>
            </div>
            <div className="search-box__input">
                <input type="text" placeholder={translate("search-website")} value={searchText} onChange={onChangeSearchText} />
            </div>
        </div>
    );
}

export default SearchBox;
