
# Python3 and Django

[Recommended Python3 Configuration for Mac](python3.html)  
Install a user copy of Python3 using bash, and change the default from Python2 to Python3.   


## Wazimap Census Reporter (Setup)


Based on the [Wazimap Setup](https://wazimap.readthedocs.io/en/latest/started.html)  



## Alternative to virtualenv: python3 -m venv env

This will install Python 3.7.3 (or latest) and create a subfolder called "env"  
If your default is still python 2, then type python3 here instead.  

	python -m venv env

Exclude your virtual environment directory from your version control system by adding "env" to .gitignore

Then activate. Your commands will then start with (env):

	source env/bin/activate

Upgrade pip to 20.0.2+ since lower 19.0.3 was default:

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

Bombing due to pg_config executable not found (for PostgreSQL)

	pip install wazimap

Did not help:

	pip install psycopg2-binary

Still bombing, same error. Probably need to install PostgreSQL.

	Collecting psycopg2>=2.7.7
	  Using cached psycopg2-2.8.4.tar.gz (377 kB)
	    ERROR: Command errored out with exit status 1:
	     command: /Users/helix/Documents/mytest2/env/bin/python3 -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'/private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/setup.py'"'"'; __file__='"'"'/private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info
	         cwd: /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/
	    Complete output (23 lines):
	    running egg_info
	    creating /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info/psycopg2.egg-info
	    writing /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info/psycopg2.egg-info/PKG-INFO
	    writing dependency_links to /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info/psycopg2.egg-info/dependency_links.txt
	    writing top-level names to /private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info/psycopg2.egg-info/top_level.txt
	    writing manifest file '/private/var/folders/3m/rk27x_md7r14rv8rp44gm0900000gn/T/pip-install-ha24o1pr/psycopg2/pip-egg-info/psycopg2.egg-info/SOURCES.txt'
	    
	    Error: pg_config executable not found.
	    
	    pg_config is required to build psycopg2 from source.  Please add the directory
	    containing pg_config to the $PATH or specify the full executable path with the
	    option:
	    
	        python setup.py build_ext --pg-config /path/to/pg_config build ...
	    
	    or with the pg_config option in 'setup.cfg'.
	    
	    If you prefer to avoid building psycopg2 from source, please install the PyPI
	    'psycopg2-binary' package instead.
	    
	    For further information please check the 'doc/src/install.rst' file (also at
	    <http://initd.org/psycopg/docs/install.html>).
	    
	    ----------------------------------------
	ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.


Older version. You'll need to be in a cloned folder for this to work.
Might not need this if using "pip install wazimap" above.

	pip install -r requirements.txt


[Wazimap Census Reporter]( https://github.com/modelearth/wazimap) is maintained by [OpenUp](https://openup.org.za/), formerly Code for South Africa. 
