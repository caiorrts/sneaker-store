import React from 'react'
import 'css/Filter.css'
// import StarIcon from '@material-ui/icons/Star';
// import SvgIcon from '@material-ui/core/SvgIcon';


const Filters = () => {
    return (
        <form className="filters">
            <h2>Filters</h2>

            <div className="filter-options">

                <fieldset>
                    <legend>Colour</legend>
                    <ul className="filter-list">
                        <li> <input type="checkbox" name="colour" value="black" id="black"   /> <label for="black">Black</label>   </li>
                        <li> <input type="checkbox" name="colour" value="white" id="white"   /> <label for="white">White</label>   </li>
                        <li> <input type="checkbox" name="colour" value="grey"  id="grey"    /> <label for="grey">Grey</label>     </li>
                        <li> <input type="checkbox" name="colour" value="red"   id="red"     /> <label for="red">Red</label>       </li>
                        <li> <input type="checkbox" name="colour" value="blue"  id="blue"    /> <label for="blue">Blue</label>     </li>
                        <li> <input type="checkbox" name="colour" value="green" id="green"   /> <label for="green">Green</label>   </li>
                        <li> <input type="checkbox" name="colour" value="yellow" id="yellow" /> <label for="yellow">Yellow</label> </li>
                        <li> <input type="checkbox" name="colour" value="orange" id="orange" /> <label for="orange">Orange</label> </li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Sizes</legend>
                    <ol className="filter-list">
                        <li><input type="checkbox" name="size" value="5"  id="5"  /> <label for="5"  >5</label></li>
                        <li><input type="checkbox" name="size" value="6"  id="6"  /> <label for="6"  >6</label></li>
                        <li><input type="checkbox" name="size" value="7"  id="7"  /> <label for="7"  >7</label></li>
                        <li><input type="checkbox" name="size" value="8"  id="8"  /> <label for="8"  >8</label></li>
                        <li><input type="checkbox" name="size" value="9"  id="9"  /> <label for="9"  >9</label></li>
                        <li><input type="checkbox" name="size" value="10" id="10" /> <label for="10">10</label></li>
                        <li><input type="checkbox" name="size" value="11" id="11" /> <label for="11">11</label></li>
                        <li><input type="checkbox" name="size" value="12" id="12" /> <label for="12">12</label></li>
                        <li><input type="checkbox" name="size" value="13" id="13" /> <label for="13">13</label></li>
                        <li><input type="checkbox" name="size" value="14" id="14" /> <label for="14">14</label></li>
                    </ol>
                </fieldset>


                <fieldset className="sort">
                    <label for="sort">Sort By</label>
                    <select name="sort" id="sort">
                        <option value="price-high">Price: High-Low</option>
                        <option value="price-low">Price: Low-High</option>
                        <option value="newest">Newest</option>
                    </select>
                </fieldset>

            </div>
        </form>
    )
}

export default Filters