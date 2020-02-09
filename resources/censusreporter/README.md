
Steps for installing pip on Mac.

https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/

Use the system pip to bootstrap a user installation of pip:

python3 -m pip install --user --upgrade pip

Skip on new mac: virtualenv
venv (for Python 3) and virtualenv (for Python 2)

SKIP THESE if you are using Python3:
>> mkvirtualenv census --no-site-packages
>> workon census


If you are planning to use python 3 install the related python 3 versions

sudo pip3 install virtualenv
sudo pip3 install virtualenvwrapper

Source with more:
https://stackoverflow.com/questions/13855463/bash-mkvirtualenv-command-not-found


Or you can instead use the following (but you'll need virtualenvwrapper later):

> python3 -m venv env

This will create a subfolder called "env"

Exclude your virtual environment directory from your version control system by adding "env" to .gitignore

Then activate

> source env/bin/activate

> pip install -r requirements.txt

You are using pip version 19.0.3, however version 20.0.2 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.

> pip install --upgrade pip

> pip install add2virtualenv

> add2virtualenv ./censusreporter

If you want to switch projects or otherwise leave your virtual environment, simply run:

> deactivate


It is preferable to install big packages (like Numpy), or packages you always use (like IPython) globally. All the rest can be installed in a virtual env.