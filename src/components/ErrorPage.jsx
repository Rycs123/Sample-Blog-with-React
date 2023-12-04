import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            {error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>Oh, ada error</div>
            )}
        </div>
    );
}

export default ErrorPage;
