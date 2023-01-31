
async function postSignUp(user_id, event_id, event_name) {

    // PUT request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user_id, event_id: event_id, event_name: event_name })
    };
    fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/userEvents', requestOptions)
        .then(async response => {
            const data = await response.json();
            console.log(data)

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
export default postSignUp

//'https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/user?email={input}