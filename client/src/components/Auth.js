const loginServer = 'http://localhost:8080/verify';

async function authenticate(username, password, requestType, firstName = '', lastName = '') {
  const body = {
    user: username,
    pass: password,
    type: requestType,
  };

  if (requestType === 'create') {
    body.firstName = firstName;
    body.lastName = lastName;
  }

  const response = await fetch(loginServer, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => {
      console.log(error);
      return { message: 'Error Connecting to the Server' };
    });

  return response;
}

export default authenticate;