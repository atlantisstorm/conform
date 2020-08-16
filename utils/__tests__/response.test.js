const Response = require('../response');

describe('Response tests', () => {
  it('should give correct 200 response', () => {
    const domain = "test.com";
    const expectedResponse = {
      headers: {
        'Access-Control-Allow-Origin': domain,
        'Access-Control-Allow-Headers': 'x-requested-with',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 200,
      body: "\"fishbone is redhot!\""
    };

    const resp = Response.success(200, "fishbone is redhot!", domain);
    expect(resp).toEqual(expectedResponse);
  });

  it('should give correct 500 error response', () => {
    const domain = "test.com";
    const expectedResponse = {
      headers: {
        'Access-Control-Allow-Origin': domain,
        'Access-Control-Allow-Headers': 'x-requested-with',
        'Access-Control-Allow-Credentials': true
      },
      statusCode: 500,
      body: "\"Something has gone very wrong!\""
    };

    const err = {
      message: "Something has gone very wrong!"
    };

    const resp = Response.error(500, err, domain);
    expect(resp).toEqual(expectedResponse);
  });
});