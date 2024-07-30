<a style="float:right" href="https://docs.google.com/forms/d/e/1FAIpQLScXSX0_myDcB4_Z32hpGC71PXVsMmgy_dyZPY0aPEWamyzV-w/viewform" class="btn btn-success">New Member Signup</a>

# Webhook

The webhook app runs in Google App Engine and sends emails using MailTrap's free plan for up to 200 emails per day. 

Coming soon: We securely storing the secrets to the email service and import them into our Flask application through GCP.

To move the Flask application with email capability into production, our MailTrap account will use a registered domain.