async function checkReview(user_id, event_id) {
    return false
    // const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/getreviewsbyuserideventid/${user_id}/${event_id}`, {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //     },
    // })

    // if (!response.ok) {
    //     const message = `An error has occured: ${response.status}`;
    //     throw new Error(message);
    // }

    // const checkResp = await response.json();

    // if (checkResp.length !== 0) {
    //     console.log(checkResp[0].user_id)
    //     return true
    // }
}

export default checkReview;