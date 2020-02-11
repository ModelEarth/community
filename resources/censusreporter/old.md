
## Enable Virtual Environment (Mac)

Attempting to follow [Census Reporter Github setup steps](https://github.com/censusreporter/censusreporter).  

### Not yet successful at running add2virtualenv

You may need to add (edit) a .zshrc file to load settings in a .bash_profile  
[https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac](https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac)  

Steps for installing pip on Mac. (Pip is the Python peackage installer.)

[https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)  

Use the system pip to bootstrap a user installation of pip:

> python3 -m pip install --user --upgrade pip

> python3 -m pip install --user virtualenvwrapper

> python3 -m venv env

> python3 -m pip install add2virtualenv


censusreporter instructions assume you're using virtualenv and virtualenvwrapper  
[https://github.com/censusreporter/censusreporter](https://github.com/censusreporter/censusreporter)  

Might skip on new mac: virtualenv
venv (for Python 3) and virtualenv (for Python 2)

Might SKIP THESE if you are using Python3:
>> mkvirtualenv census --no-site-packages
>> workon census


If you are planning to use python 3 install the related python 3 versions.
(But since 2020 macs run Python 2.7, maybe only install in your virtual environ - if that is possible)

Ran "python3 -m pip install --user virtualenvwrapper"
pip install virtualenvwrapper



Ran these but don't again. Still could not access add2virtualenv:
sudo pip3 install virtualenv
sudo pip3 install virtualenvwrapper

Source with more:
[https://stackoverflow.com/questions/13855463/bash-mkvirtualenv-command-not-found](https://stackoverflow.com/questions/13855463/bash-mkvirtualenv-command-not-found)  


These don't seem to work with Python3
>> mkvirtualenv census --no-site-packages
>> workon census


Instead try the following (but you'll need virtualenvwrapper later):

> python3 -m venv env

This will create a subfolder called "env"

Exclude your virtual environment directory from your version control system by adding "env" to .gitignore

Then activate

> source env/bin/activate

> pip install -r requirements.txt


The following no longer occured since "python3 -m pip install --user --upgrade pip" was run first above.
You are using pip version 19.0.3, however version 20.0.2 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
> pip install --upgrade pip


## Not yet figured out...

add2virtualenv is part of virtualenvwrapper. 
virtualenvwrapper.sh resides at env/bin


> pip install add2virtualenv

Resulted in:
ERROR: Could not find a version that satisfies the requirement add2virtualenv (from versions: none)
ERROR: No matching distribution found for add2virtualenv


Guessing from the following:https://vicpimakers.ca/links/python-links/setting-up-python-projects-with-virtual-environments/
Added to .bash_profile
source /usr/local/bin/virtualenvwrapper.sh


> add2virtualenv ./censusreporter

If you want to switch projects or otherwise leave your virtual environment, simply run:

> deactivate


It is preferable to install big packages (like Numpy), or packages you always use (like IPython) globally. All the rest can be installed in a virtual env.


Pyenv

or

python -m pip install virtualenv



GraphQL resolve

GQL Gen library for GO