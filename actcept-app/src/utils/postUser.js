
  async function postUser(name, email, password) {

    // PUT request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password})
    };
    fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/users', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}


//Export function
export default postUser

//'https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/user?email={input}