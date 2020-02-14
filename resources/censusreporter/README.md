
# Venv and Django with Postgres

[First, make Python3 default for Mac](virtualenv-troubleshooting.html)     
- Install a user copy of Python3 using bash, then change your default from Python2 to Python3.   


You may want to use [virtualenv](virtualenv.html) - option for use with Python 2 virtual environment.     

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

	python -m venv env1

Exclude your virtual environment directory from your version control system by adding "env" to .gitignore

Then activate. Your commands will then start with (env):

	source ~/Documents/env1/bin/activate

Upgrade pip to 20.0.2+ since 19.0.3 is system default:

	pip install --upgrade pip

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

	pip install wazimap

Results with successfully installed Django-2.2.6

See [Step 6](https://wazimap.readthedocs.io/en/latest/started.html) about how to change your settings.py file.


When you're done with the virtual environment

	deactivate


To see the full range of options, run the following command:  

	python -m venv -h

More here: [Venv command (pythonise.com)](https://pythonise.com/categories/python/python-virtual-environments-with-the-venv-command)


[Wazimap Census Reporter]( https://github.com/modelearth/wazimap) is maintained by [OpenUp](https://openup.org.za/), formerly Code for South Africa. 
