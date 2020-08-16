'use strict';

const aws = require('aws-sdk');
const ses = new aws.SES();
const EmailHelper = require('./utils/email-helper');
const Response = require('./utils/response');

const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;
const myDomainTitle = process.env.DOMAIN_TITLE;

module.exports.send = async (event) => {
  try {
    const emailParams = EmailHelper.buildEmailParams(event.body, myEmail, myDomain, myDomainTitle);
    const data = await ses.sendEmail(emailParams).promise();
    return Response.success(200, data, myDomain);
  } catch (err) {
    return Response.error(500, err, myDomain);
  }
}