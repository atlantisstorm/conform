const EmailHelper = require('../email-helper');

describe('EmailHelper tests', () => {
  it('should build with correct params', () => {
    const body = "{ \"email\": \"test@test.com\", \"name\": \"John Doe\", \"message\": \"This is a very short test message!\" }";
    const myEmail = "john@doe.com";
    const myDomain = "test.com";
    const myDomainTitle = "This is my domain";

    const params = EmailHelper.buildEmailParams(body, myEmail, myDomain, myDomainTitle);
    expect(params).toMatchSnapshot();
  });

  it('should throw error if account details are not supplied', () => {
    const body = "{ \"email\": \"test@test.com\", \"name\": \"John Doe\", \"message\": \"This is a very short test message!\" }";
    const myEmail = "";
    const myDomain = "";
    const myDomainTitle = "";

    expect(() => {
      EmailHelper.buildEmailParams(body, myEmail, myDomain, myDomainTitle)
    }).toThrow("Missing parameters account details, you must supply 'myEmail', 'myDomain', 'myDomainTitle'.");
  });

  it('should throw error if body does not contain expected parameters', () => {
    const body = "{}";
    const myEmail = "john@doe.com";
    const myDomain = "test.com";
    const myDomainTitle = "This is my domain";

    expect(() => {
      EmailHelper.buildEmailParams(body, myEmail, myDomain, myDomainTitle)
    }).toThrow("Missing parameters from body, make sure to add parameters 'email', 'name', 'message'.");
  });  
});