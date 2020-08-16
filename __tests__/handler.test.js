jest.mock('aws-sdk');
const Handler = require('../handler');

describe('handler tests', () => {
  it('send should give correct 200 response', async () => {
    const event = { "body": "{ \"email\": \"test@test.com\", \"name\": \"John Doe\", \"message\": \"This is a very short test message!\" }" };
    const resp = await Handler.send(event);

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual("\"AWS.SES.sendEmail.promise was called\"");
  });

  it('send should give 500 error response for invalid input', async () => {
    const event = { "body": "{}" };
    const resp = await Handler.send(event);

    expect(resp.statusCode).toBe(500);
    expect(resp.body).toEqual( "\"Missing parameters from body, make sure to add parameters 'email', 'name', 'message'.\"");
  });
});