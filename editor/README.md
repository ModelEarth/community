# Crowdsouce Editor Setup

1. Go to: [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)
2. Create a Project
3. Follow below screenshot to get your Auth IDs.  

<a href="img/google-setup.png"><img src="img/google-setup.png" style="width:100%; max-width:1000px"></a>

4. Make note of your GOOGLE\_CLIENT\_ID and GOOGLE\_CLIENT\_SECRET.  


1. Install Python3.7.
1. From root directory run these commands:
```
python3 -m venv env
pip install -r requirements.txt
```
1. Update client_id and client_secrete from google app in `app.py`.
1. Update the GOOGLE_SHEET_URL
1. Run/Server python app.
```
cd app
python3 app.py
```

#### TODO:
 - [x] Login/Logout with google.
 - [X] Store login details in sqlitedb,  To be changed later
 - [ ] Firebase implementation : TBD
 - [x] Show/Hide edit menu on Login/Logout
 - [ ] Edit form
