# conform introduction

A simple serverless form submission 'app'.  Requires field name, email and message.

# Config files.

Setup .secret.json in root directory, required for deployment and should be of the following form where NODE_ENV is dev, staging or prod.
{
  "NODE_ENV": <env>,
  "EMAIL": <email>,
  "DOMAIN": <domain>,
  "DOMAIN_TITLE": <domain title>
}

# Testing.

You'll need to setup a ".env" file in the project root directory.  This is required for local jest testing and should be for the form:
EMAIL=<email>
DOMAIN=<domain>
DOMAIN_TITLE=<domain title>