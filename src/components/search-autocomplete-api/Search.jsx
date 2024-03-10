import { useEffect } from "react";
import { useState } from "react";
import Suggestion from "./suggestion";

const Search = () => {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);

    const handleClick = (event) => {
        setShowDropdown(false);
        setSearchParam(event.target.innerText);
        setFilteredUser([]);
    };
    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUser(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const fetchUserList = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((item) => item.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    };
    useEffect(() => {
        fetchUserList();
    }, []);
    console.log(users, filteredUser);
    return (
        <div className="search-autocomplete-container">
            {loading ? (
                <h1>Loading page... Please wait</h1>
            ) : (
                <input
                    type="text"
                    placeholder="Search users here..."
                    name="search-name"
                    value={searchParam}
                    onChange={handleChange}
                />
            )}
            {showDropdown && <Suggestion data={filteredUser} handleClick={handleClick} />}
        </div>
    );
};

export default Search;
