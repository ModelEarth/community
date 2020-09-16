## Venv

This was removed from Census Reporter notes.  Some may still be useful.  


Use [Python Poetry Setup](../poetry/) for virtual environment  


### Older Notes: Mac Users

[Set up pyenv](https://gist.github.com/wronk/a902185f5f8ed018263d828e1027009b) - includes virtualenv and virtualenvwrapper (this guy does not use poetry)  
Instead, see details under "Let's add Pyenv" after the following.  


Where's my Python running from?

	which python

Initially returned Anaconda (3.7.6) even though pyenv installed:&nbsp; /Users/[username]/opt/anaconda3/bin/python  
After conda update, returned pyenv (3.8.5):&nbsp;  /Users/[username]/.pyenv/shims/python  


	python -V

But it's an older version (3.7.6), which might not be supporting some Flask code, specifcially :=  

Ran the following, which upgraded to python 3.8.5 (even though it said 3.7.7 would be the outcome at start of install)

	conda update --all

<!--
[You may need to make Python3 the default for Mac](virtualenv-troubleshooting.html) - Install a user copy of Python3 using bash, then change your default from Python2 to Python3.   

You may want to use [virtualenv](virtualenv.html) - option for use with Python 2 virtual environment.     
-->

To see the full range of options, run the following command:  

	python -m venv -h

More here: [Venv command (pythonise.com)](https://pythonise.com/categories/python/python-virtual-environments-with-the-venv-command)
