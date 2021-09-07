[Display Datasets](../../../localsite/info/data) 

# Census Reporter  

We could upgrade [Census Reporter zipcode demographic maps](https://censusreporter.org/profiles/86000US30308-30308/) to include [environmentally-extended input-output](../../../io/charts/) widgets 
and [social safety net tools](https://www.codeforamerica.org/features/bringing-social-safety-net-benefits-online/).  

[Our Python 3 Fork](https://github.com/modelearth/map)  

### CensusReporter Frontend with Google Data Commons API
 
Using the [frontend](https://censusreporter.org/profiles/16000US1304000-atlanta-ga/) from the Python 3 fork of CensusReporter, we'll point demographics charts at the Google Data Commons API (retain support for PostgreSQL).  

**Goal**

Allow any country to integrate their demographic, industry and environmental data for analysis by machine learning algorithms using a common Schema within the Google Data Commons API.  

The Wazimap fork provides a Python 3 version of Census Reporter with international usage.  
We're aiming to bring it in sync with the Python 2 version used by [CensusReporter.org](https://CensusReporter.org).  

Start from our [github.com/modelearth/map](https://github.com/modelearth/map) fork of Wazimap Census Reporter.  
Wazimap is maintained by [OpenUp](https://openup.org.za/) and in used in Africa and India.  

<!--
Place Wazimap fork of CensusReporter into a [Python Docker container](https://hub.docker.com/_/python) for easier install.  
Place Census Reporter database into [PostgreSQL Docker container](https://hub.docker.com/_/postgres) with files for Docker secrets.
-->

Set up Docker to [deploy to Heroku](https://github.com/datamade/how-to/blob/master/heroku/deploy-a-django-app.md) using a [containerization template](https://github.com/datamade/how-to/tree/master/docker/templates) (includes Django and Gatsby). Learn more [about using Heroku or AWS](https://datamade.us/blog/why-were-switching-to-heroku/).  

**Challenge**  

How can demographics data, maps and machine learning be integrated with [social safety net programs](https://www.codeforamerica.org/features/bringing-social-safety-net-benefits-online/)?
 
**Pages to Compare**  
[CensusReporter.com Atlanta](https://censusreporter.org/profiles/16000US1304000-atlanta-ga/) - [GitHub repo](https://github.com/censusreporter/censusreporter) - [Our Python 3 Fork](https://github.com/modelearth/map)  
[Data.Census.gov Atlanta](https://data.census.gov/cedsci/profile?g=1600000US1304000)  

**Areas for improvements**  
Zip and county maps  
Fast loading from pre-processed static files  
International contributions  
Sortable tables and lists below maps  

**React Interface**  
Expand upon the [EPA's Environmentally-Extended IO Charts](../../../io/charts/) and integrate with community data portals.  



## Postgres Setup


Based on the [Wazimap Setup](https://wazimap.readthedocs.io/en/latest/started.html)  

Install postgres before you enter a virtual environment

	brew install postgres

Optional, if you need postgresql to be launched on login:

	To have launchd start postgresql now and restart at login:
	  brew services start postgresql
	Or, if you don't want/need a background service you can just run:
	  pg_ctl -D /usr/local/var/postgres start



## Virtual Environment Setup

Venv and Django with Postgres

These steps have not yet been tried here. Copied from PyAtl. These were successful with our [farmfresh scrapper](../../farmfresh/).  

### Setup

Setup the environment:

`python3 -m venv .venv`

OSX / Linux:

`source .venv/bin/activate`

Windows:

`\.venv\Scripts\activate.bat`


### Using venv

These are the original instrucions:  


This will install Python 3.7.3 (or latest) and create a subfolder called "env"   
--prompt is optional for showing a name before your terminal prompt.  
If your default is still python 2, then start commands with python3.  
<!-- Loren added 3 to python 3 below, just in case -->

	python3 -m venv ~/Documents/env1 --prompt MYTEST

Or if your are already in the folder where you're creating your environment...  
(Default directory on a mac is Users/[username].)  

	python3 -m venv env1

Exclude your virtual environment directory from your version control system by adding "env1" to .gitignore

Then activate. Your commands will then start with (env1):

	source ~/Documents/env1/bin/activate

Command above differs for bash/zsh. Note that \~/Documents/ is not included here:  

See: https://docs.python.org/3/library/venv.html  

Upgrade pip to 20.0.2+ since 19.0.3 is system default:

	pip install --upgrade pip

## Django

Installs Django 3.0.3

	pip install django
	django-admin startproject wazimap_ex
	cd wazimap_ex
	rm wazimap_ex/urls.py wazimap_ex/wsgi.py

Install GDAL

	brew install gdal --HEAD

Had one error out of many successful. Appears to have built from mpc-1.1.0.tar.gz source:

	==> Pouring mpfr-4.0.2.catalina.bottle.tar.gz
	🍺  /usr/local/Cellar/mpfr/4.0.2: 28 files, 4.7MB
	==> Installing gdal dependency: libmpc
	==> Downloading https://homebrew.bintray.com/bottles/libmpc-1.1.0.catalina.bottle.tar.gz
	-=O=-    #    #    #    #                                                     
	curl: (22) The requested URL returned error: 504 Gateway Time-out
	Error: Failed to download resource "libmpc"
	Download failed: https://homebrew.bintray.com/bottles/libmpc-1.1.0.catalina.bottle.tar.gz
	Warning: Bottle installation failed: building from source.
	==> Downloading https://ftp.gnu.org/gnu/mpc/mpc-1.1.0.tar.gz

You'll need to have PostgreSQL installed first above.  

**Question:** Can we modify so it's not necessary to install PostgreSQL, and only use the API?  

	pip install wazimap

Results with successfully installed Django-2.2.6

See [Step 6](https://wazimap.readthedocs.io/en/latest/started.html) about how to change your settings.py file.

Step 7 - If "createuser -P wazimap" results in error, restart postgresql in another terminal:  

	brew services restart postgresql


<!-- superuser helix p: helix1 -->

You may want to [install DBeaver](https://dbeaver.io/download/) SQL Database tools.  

On Mac, first  install the latest version of Java:  

	brew cask install adoptopenjdk --no-quarantine
	brew cask install dbeaver-community

<!--
	If unable to open DBeaver app, try
	brew cask install adoptopenjdk --no-quarantine

	Source:
	https://github.com/AdoptOpenJDK/homebrew-openjdk/issues/267
-->

DBeaver shortcuts

	Run SQL script: Alt+X
	Run only part of a SQL script: Ctrl+Enter
	You can turn on/off the right panels: F7

	You can generate SQL statements (SELECT/INSERT/UPDATE/DELETE) based on selected rows. To generate SQL, right-click the selected rows, then click Generate SQL and select one of the SQL commands you see.


## Django Troubleshooting

Trying to get site to appear at: http://localhost:8000/admin  
[Django Tutorial](https://docs.djangoproject.com/en/3.0/intro/tutorial01/)

	django-admin startproject mysite
	cd mysite
	python3 manage.py runserver

Stop dejango site

	Ctrl-C

When you're done with the virtual environment

	deactivate