class SES {
  sendEmail() {
    return { promise: () => {
      return "AWS.SES.sendEmail.promise was called";
    }};
  }
}

const aws = {
  SES
};

module.exports = aws;