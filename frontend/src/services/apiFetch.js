const xsrfToken = document.cookie
    ?.split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];

const apiFetch = (method, path, body = null) => {
    const options = {
        method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": xsrfToken
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(path, options);
};

export default apiFetch; 