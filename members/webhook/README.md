<a style="float:right" href="https://docs.google.com/forms/d/e/1FAIpQLScXSX0_myDcB4_Z32hpGC71PXVsMmgy_dyZPY0aPEWamyzV-w/viewform" class="btn btn-success">New Member Signup</a>

# Webhook

**Coming Soon**

[Our membership page](../) welcome letter uses a [webhook app](https://github.com/modelEarth/webhook) that runs in Google App Engine which merges member fields from our Google Form into our Word Doc welcome template. The merged welcome letter Word Doc is sent to new members using MailTrap's free outbound email plan, which sends up to 200 emails per day. 

Our SMTP secrets reside in Google Cloud Secret Manager. We securely store the secrets for the email service and import them into our Flask application through Cloud Computing Services (GCP).

For our Flask application's use of MailTrap outbound email, we added CNAME and TXT records to our registered domain in [Cloudflare](../../../localsite/start/cloudflare/). The setup requires turning off Proxy on the CNAME records.