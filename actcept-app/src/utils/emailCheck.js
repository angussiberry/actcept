async function checkEmail(email) {
  const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/users?email=${email}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const checkResp = await response.json();
  return checkResp
}

export default checkEmail;