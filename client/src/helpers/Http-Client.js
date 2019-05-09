const objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

const HttpClient = (token) => {
    return {
        getAsync: async (url, params) => {
            let options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            };

            if (params) {
                const urlParams = objToQueryString(params);
                return await http(`${url}?${urlParams}`, options)
            }

            return await http(url, options)
        },
        postAsync: async (url, body) => {
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            };

            return await http(url, options)
        },
        putAsync: async (url, body) => {
            const options = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            };

            return await http(url, options)
        },
        deleteAsync: async (url) => {
            let options = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            };

            return await http(url, options)
        }
    };
}

const http = async (url, options) =>
    fetch(url, options)
        .then(response => response.json())
        .then(data => Promise.resolve(data))
        .catch(error => Promise.reject(error));

export default HttpClient;