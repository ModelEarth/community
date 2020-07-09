
# CensusReporter

Project 1: Document steps for deploying static portion of Wazimap to a website. Host on Github or another server.   


Since the Wazimap fork provides a Python 3 version of Census Reporter with international usage, we'll use it as a starting point for updating the US version of Census Reporter.  

Work in our [Wazimap Fork of Census Reporter]( https://github.com/modelearth/wazimap) - a Python 3.0 version of [Census Reporter](https://censusreporter.org/profiles/86000US30313-30313/).  
Wazimap is maintained by [OpenUp](https://openup.org.za/) and in used in Africa and India.  

**Future Projects:**  
2. Add ability to select country to toggle to the [US API](https://github.com/censusreporter/census-api) from [Census Report repo](https://github.com/censusreporter/censusreporter).  
3. Add [Environmentally-Enabled IO Charts](../../../io/charts/)  
4. Merge work into original Census Reporter repo   


## Virtual Environment

Venv and Django with Postgres


### Mac Users

[You may need to make Python3 the default for Mac](virtualenv-troubleshooting.html) - Install a user copy of Python3 using bash, then change your default from Python2 to Python3.   


You may want to use [virtualenv](virtualenv.html) - option for use with Python 2 virtual environment.     


To see the full range of options, run the following command:  

	python -m venv -h

More here: [Venv command (pythonise.com)](https://pythonise.com/categories/python/python-virtual-environments-with-the-venv-command)


## Wazimap Census Reporter (Setup)


Based on the [Wazimap Setup](https://wazimap.readthedocs.io/en/latest/started.html)  

Install postgres before you enter a virtual environment

	brew install postgres

Optional, if you need postgresql to be launched on login:

	To have launchd start postgresql now and restart at login:
	  brew services start postgresql
	Or, if you don't want/need a background service you can just run:
	  pg_ctl -D /usr/local/var/postgres start

## Using venv

This will install Python 3.7.3 (or latest) and create a subfolder called "env"   
--prompt is optional for showing a name before your terminal prompt.  
If your default is still python 2, then start commands with python3.  

	python -m venv ~/Documents/env1 --prompt MYTEST

Or if your are already in the folder where you're creating your environment...  
(Default directory on a mac is Users/[username].)  

	python -m venv env1

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


## django

Trying to get site to appear at: http://localhost:8000/admin
https://docs.djangoproject.com/en/3.0/intro/tutorial01/

	django-admin startproject mysite
	cd mysite
	python manage.py runserver

Stop dejango site

	Ctrl-C

When you're done with the virtual environment

	deactivate