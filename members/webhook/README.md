<a style="float:right" href="https://docs.google.com/forms/d/e/1FAIpQLScXSX0_myDcB4_Z32hpGC71PXVsMmgy_dyZPY0aPEWamyzV-w/viewform" class="btn btn-success">New Member Signup</a>

# Webhook

**Coming Soon**

[Our membership page](../) welcome letter uses a [webhook app](https://github.com/modelEarth/webhook) that runs in Google App Engine and sends emails using MailTrap's free plan, which provides up to 200 outbound emails per day. 

Our SMTP secrets reside in Google Cloud Secret Manager. We securely store the secrets for the email service and import them into our Flask application through Cloud Computing Services (GCP).

The Flask application's outbound email uses MailTrap with CNAME and TXT records added to our registered domain in [Cloudflare](../../../localsite/start/cloudflare/). The setup requires turning off Proxy on the CNAME records.