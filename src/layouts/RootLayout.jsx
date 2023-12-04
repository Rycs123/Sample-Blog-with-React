import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";
function RootLayout() {
    return (
        <>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                }
                style={{
                    marginRight: "5px",
                }}
                to="/"
            >
                Home
            </NavLink>
            |
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                }
                style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                }}
            >
                About
            </NavLink>
            |
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                }
                style={{
                    marginLeft: "5px",
                }}
            >
                Blog
            </NavLink>
            <p />
            <Outlet />
        </>
    );
}
export default RootLayout;
