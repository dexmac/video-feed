/**
 * Fetches JSON from a given URL
 *
 * @param url
 * @returns {Promise<Response>}
 */
export const fetchJSON = async (url) => {
    return fetch(url).then(function(response) {
        if(response.ok) {
            return response.json();
        }
        else {
            throw new Error(`Error fetching JSON from ${url} - Network response was not ok.`);
        }
    }).catch(function(error) {
        throw new Error('There was a problem with the fetch operation. ' + error.message);
    });
};