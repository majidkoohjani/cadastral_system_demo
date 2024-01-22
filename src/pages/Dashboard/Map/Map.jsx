import { useRef, useState } from "react";
import mapItems from "../../../core/constants/mapItems";
import map from "../../../assets/images/map.png";
import "./Map.scss";
import { translate } from "../../../core/helpers/Translator";

export default function Map(props) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const mapTooltipRef = useRef();

    const handleAreaHover = (e) => {
        let hoveredId = +e.target.alt;
        setHoveredItem({...mapItems[hoveredId]});
        mapTooltipRef.current.style = `display: flex; top: ${e.clientY + 3}px; left: ${e.clientX + 3}px;`;
    }

    const handleAreaLeave = (e) => {
        setHoveredItem(null);
        mapTooltipRef.current.style = `display: none;`;
    }

    return (
        <div className="map">
            <img src={map} useMap="#image-map" />
            <map name="image-map">
                <area target="" alt="1" href="#" coords="0,110,23,68" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="2" href="#" coords="44,110,24,69" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="3" href="#" coords="67,110,44,69" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="4" href="#" coords="36,70,3,38" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="5" href="#" coords="67,107,67,68,97,68,99,79" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="6" href="#" coords="36,38,5,7" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="7" href="#" coords="36,6,99,22" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="8" href="#" coords="37,36,98,22" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="9" href="#" coords="37,68,100,37" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="10" href="#" coords="16,195,2,157" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="11" href="#" coords="42,180,28,194,17,194,15,157,26,157,26,181" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="12" href="#" coords="42,180,27,157" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="13" href="#" coords="43,180,43,157,62,158" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="14" href="#" coords="53,243,64,229,27,195,16,209" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="15" href="#" coords="28,194,62,156,82,173,46,212" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="16" href="#" coords="82,173,46,211,64,228,100,189" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="17" href="#" coords="72,219,99,219,101,190" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="18" href="#" coords="99,242,55,242,72,220,99,221" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="19" href="#" coords="159,239,197,220" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="20" href="#" coords="158,218,198,200" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="21" href="#" coords="159,199,159,194,188,168,199,199" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="22" href="#" coords="198,240,221,200" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="23" href="#" coords="187,167,199,158,221,157,221,199,199,199" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="24" href="#" coords="222,199,251,241" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="25" href="#" coords="251,199,220,157" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="26" href="#" coords="252,199,279,241" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="27" href="#" coords="279,199,251,158" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="28" href="#" coords="308,241,279,199" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="29" href="#" coords="280,157,308,199" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="30" href="#" coords="339,241,309,200" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="31" href="#" coords="337,199,309,158" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="32" href="#" coords="366,241,339,200" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="33" href="#" coords="338,158,367,200" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="34" href="#" coords="366,200,395,241" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="35" href="#" coords="367,158,395,199" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="36" href="#" coords="402,12,372,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="37" href="#" coords="402,61,372,109" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="38" href="#" coords="371,12,340,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="39" href="#" coords="308,110,277,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="40" href="#" coords="371,61,341,110" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="41" href="#" coords="276,61,247,109" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="42" href="#" coords="340,61,309,110" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="43" href="#" coords="215,109,246,61" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="44" href="#" coords="309,12,339,61" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="45" href="#" coords="214,61,162,60,161,76,198,109,214,110" shape="poly" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="46" href="#" coords="277,12,308,59" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="47" href="#" coords="215,12,245,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="48" href="#" coords="246,12,276,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="49" href="#" coords="163,1,214,33" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                <area target="" alt="50" href="#" coords="163,34,213,60" shape="rect" onMouseLeave={(e) => handleAreaLeave(e)} onMouseMove={(e) => handleAreaHover(e)} />
                {
                    hoveredItem && 
                    <div className="map-tooltip" ref={mapTooltipRef}>
                        <div className="icon" style={{backgroundColor: hoveredItem.color}}>
                            <img src={`/metacadicons/${hoveredItem?.icon}`} width="32" height="32" />
                        </div>
                        <div className="text">
                            <span>{ translate(hoveredItem?.title) }</span>
                            <br />
                            <span>{ translate(hoveredItem?.desc) }</span>
                        </div>
                    </div>
                }
            </map>
        </div>
    );
}
