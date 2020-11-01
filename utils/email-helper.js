const html = ({ email, name, message, myDomain, myDomainTitle }) => {
  // Style declarations as email clients like these done inline.
  const padding = "padding-top: 5px; padding-bottom: 5px; padding-left: 10px; padding-right: 10px;";
  const margin = "margin-top: 5px; margin-bottom: 5px; margin-left: 5px; margin-right: 5px;";
  const spacing = `${margin} ${padding}`;
  const header_style = `background-color: #ddd; ${spacing};`;
  const data_style = `background-color: #eee; ${spacing};`;
  const p_style = `background-color: #ccc; margin: 0px; ${padding}`;
  const a_style = "color: #ff3300;";

  return `
  <table style="width: 640px;">
    <tbody>
      <tr>
        <td>
          <p style="${ p_style }">Message sent today from <b>${myDomainTitle}</b> contact page.</p>
          <table style="width: 100%;">
            <tbody>
              <tr>
                <td style="${ header_style }">Name</td>
                <td style="${ data_style }">${name}</td>
              </tr>
              <tr>
                <td style="${ header_style }">Email</td>
                <td style="${ data_style }"><a href="mailto:${email}" style="${ a_style }">${email}</a></td>
              </tr>
              <tr>
                <td style="${ header_style }" colspan="2">Message</td>
              </tr>
              <tr>
                <td style="${ data_style }" colspan="2">${message}</td>
              </tr>
            </tbody>
          </table>
          <p style="${ p_style }">Message sent from <a href="http://${myDomain}" style="${ a_style }" title="${myDomainTitle}">${myDomain}</a></p>
        </td>
      </tr>
    </tbody>
  </table>`;
}

const text = ({ email, name, message, myDomain, myDomainTitle }) => {
  return `
    Message sent today from ${myDomainTitle} contact page.

    Name:  ${name}
    Email:${email}
    Message:
    ${message}

    Message sent from ${myDomain}
  `;
}

const buildEmailParams = (body, myEmail, myDomain, myDomainTitle) => {
  if (!(myEmail && myDomain && myDomainTitle)) {
    throw new Error('Missing parameters account details, you must supply \'myEmail\', \'myDomain\', \'myDomainTitle\'.')
  }

  const { email, name, message } = JSON.parse(body);
  if (!(email && name && message)) {
    throw new Error('Missing parameters from body, make sure to add parameters \'email\', \'name\', \'message\'.')
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html({ email, name, message, myDomain, myDomainTitle })
        },
        Text: {
          Charset: "UTF-8",
          Data: text({ email, name, message, myDomain, myDomainTitle })
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Message from ${myDomainTitle}!`
      }
    }
  }
}

module.exports = {
  buildEmailParams
};