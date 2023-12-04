import { useState } from "react";
function Search(props) {
    const [search, setSearch] = useState("");
    const onSearchChange = () => {
        props.onSearchChange(search);
    };

    const enterPressed = (e) => {
        if (e.key === "Enter") {
            onSearchChange();
        }
    };
    return (
        <>
            <div>
                Cari artikel:{" "}
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={enterPressed}
                ></input>
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>
                Ditemukan {props.totalPosts} data dengan pencarian kata {search}
            </small>
        </>
    );
}

export default Search;
