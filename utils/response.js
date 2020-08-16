const coreResponse = (code, msg, domain) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': domain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: code,
    body: JSON.stringify(msg)
  }
}

const success = (code, payload, domain) => {
  return coreResponse(code, payload, domain);    
}

const error = (code, err, domain) => {
  console.log(err)
  return coreResponse(code, err.message, domain);
}

module.exports = {
  success,
  error
};