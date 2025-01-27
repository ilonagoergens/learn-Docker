const axios = require('axios');

exports.handler = async (event) => {
    console.log("Lambda wurde aufgerufen mit Event: ", event);

    try {
        // Beispiel: HTTP GET-Request an die GitHub API
        const response = await axios.get('https://api.github.com/users/octocat');
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Erfolgreich von GitHub abgerufen!",
                data: response.data
            })
        };
    } catch (error) {
        console.error('Fehler bei der API-Anfrage: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Fehler bei der API-Anfrage" })
        };
    }
};

