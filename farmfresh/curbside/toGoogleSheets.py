import gspread
from oauth2client.service_account import ServiceAccountCredentials

import urllib3
from bs4 import BeautifulSoup as bs

ARTICLE_URL = "https://atlanta.eater.com/2020/3/13/21178168/atlanta-restaurants\
  -offering-curbside-pick-up-food-delivery"

http = urllib3.PoolManager()
page = http.request("GET", ARTICLE_URL).data.decode("utf-8")

restaurants = []

# select all paragraphs containing links after the first level3 header
for a in bs(page).select("h3 ~ p > a:nth-child(1)"):
    restaurants.append((a["href"], "".join(str(i) for i in a.contents)))

print(restaurants)

# TODO doesn't work (error = Request had insufficient authentication scopes)
# followed this guide: https://www.twilio.com/blog/2017/02/an-easy-way-to-read-and-write-to-a-google-spreadsheet-in-python.html

scope = ["https://spreadsheets.google.com/feeds"]
creds = ServiceAccountCredentials.from_json_keyfile_name("client_secret.json", scope)
client = gspread.authorize(creds)

sheet = client.open("Georgia-mapsfor.us").sheet1
