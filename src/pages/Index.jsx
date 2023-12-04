import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";
function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const onSearchChangeFunction = (value) => {
        console.log(value);
        const filteredPosts = postsData.filter((item) =>
            item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    return (
        <>
            <h1>Sample Blog</h1>
            <Search
                onSearchChange={onSearchChangeFunction}
                totalPosts={totalPosts}
            />
            {posts.map((props, index) => (
                <Article {...props} key={index} />
                //<Article title={title} tags={tags} date={date} key={index} />
            ))}
        </>
    );
}

export default Homepage;
