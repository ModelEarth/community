## To get virtualenv working

Install python3 using brew so it resides in /usr/local/bin/python3

Then uninstall and reinstall virtualenv


Did this even though python3 was already installed.
https://dev.to/irfnhm/how-to-set-python3-as-a-default-python-version-on-mac-4jjf

	brew install python

Places it here: /usr/local/bin/python3

	Python has been installed as
	  /usr/local/bin/python3

	Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to
	`python3`, `python3-config`, `pip3` etc., respectively, have been installed into
	  /usr/local/opt/python/libexec/bin

	You can install Python packages with
	  pip3 install <package>
	They will install into the site-package directory
	  /usr/local/lib/python3.7/site-packages

	See: https://docs.brew.sh/Homebrew-and-Python


Ran the following ()
	ln -s -f /usr/local/bin/python3.7 /usr/local/bin/python


Edit again your .bashrc (or .zshrc) and add these lines:

	export WORKON_HOME=~/.virtualenvs
	[ -f /usr/local/bin/virtualenvwrapper.sh ] && source /usr/local/bin/virtualenvwrapper.sh

This will configure the default location where to store your virtual environments and will run a command every time you open a new terminal, to make sure virtualenvwrapper can work correctly. Source: https://www.andreagrandi.it/2018/12/19/installing-python-and-virtualenv-on-osx/

Unistalled and reinstalled virtualenv
https://stackoverflow.com/questions/38951927/how-do-i-fix-virtualenv-install

	sudo pip uninstall virtualenv

Reinstalled:

	sudo pip install virtualenv


## Fire up a virtual environment

	cd ~/Documents
	mkdir mytest4
	cd mytest4

Create a new virtualenv - had to run the first line twice to generate usr/local/bin folder.  (Why not just bin?):

	virtualenv yourenv -p python3.7
	source yourenv/usr/local/bin/activate



Removed the following from Users/[username]/.zshrc where username is helix
Might need to add back (removed tab if adding back)

	# Created by `userpath` on 2020-02-11 15:35:16
	export PATH="$PATH:/Users/helix/.local/bin"
	# https://www.andreagrandi.it/2018/12/19/installing-python-and-virtualenv-on-osx/
	export WORKON_HOME=~/.virtualenvs
	[ -f /usr/local/bin/virtualenvwrapper.sh ] && source /usr/local/bin/virtualenvwrapper.sh



# Ignore the Rest

Have not reviewed if this is still needed

## 1. Install or upgrade pipx for virtualenv with Python 3

[Installation via pipx](https://virtualenv.readthedocs.io/en/latest/installation.html) - If you already have a Python 3.5+ interpreter the best is to use pipx to install virtualenv into an isolated environment. This has the added benefit that later you’ll be able to upgrade virtualenv without affecting other parts of the system.  

Source: [pipx project](https://pipxproject.github.io/pipx/installation/)

	python3 -m pip install --user pipx
	python3 -m pipx ensurepath

Or upgrade

	python3 -m pip install -U pipx


NOTES:

Occurred first time, but not when running twice in a row:

	WARNING: The script userpath is installed in '/Users/helix/Library/Python/3.7/bin' which is not on PATH.
	Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.

Running "python3 -m pipx ensurepath" returns:

	Success! Added /Users/helix/.local/bin to the PATH environment variable.
	Consider adding shell completions for pipx. Run 'pipx completions' for instructions.
	You likely need to open a new terminal or re-login for the changes to take effect.

Running "pipx completions" returned:

	zsh: command not found: pipx

Instead ran:

	python3 -m pipx completions

Received:

	Add the appropriate command to your shell's config file
	so that it is run on startup. You will likely have to restart
	or re-login for the autocompletion to start working.

	bash:
	    eval "$(register-python-argcomplete pipx)"

	zsh:
	    To activate completions for zsh you need to have
	    bashcompinit enabled in zsh:

	    autoload -U bashcompinit
	    bashcompinit

	    Afterwards you can enable completion for pipx:

	    eval "$(register-python-argcomplete pipx)"

	tcsh:
	    eval `register-python-argcomplete --shell tcsh pipx`

	fish:
	    register-python-argcomplete --shell fish pipx | .


**My notes:**

This step:

	eval "$(register-python-argcomplete pipx)"

Returned:

	zsh: command not found: register-python-argcomplete

Still occurred after restarting Mac.

Tried:

	python3 -m eval "$(register-python-argcomplete pipx)"

Returned:

	zsh: command not found: register-python-argcomplete
	/Library/Developer/CommandLineTools/usr/bin/python3: No module named eval

Same error above with "exec":

	python3 -m exec "$(register-python-argcomplete pipx)"



<br>
<mark>STUCK HERE trying to execute register-python-argcomplete</mark>

Tried installing [argcomplete](https://pypi.org/project/argcomplete/)

	python3 -m pip install argcomplete
	python3 -m activate-global-python-argcomplete

Receiving from first line:

	WARNING: pip is being invoked by an old script wrapper. This will fail in a future version of pip.
	Please see https://github.com/pypa/pip/issues/5599 for advice on fixing the underlying issue.
	To avoid this problem you can invoke Python with '-m pip' instead of running pip directly.

Second line returns error:

	zsh: command not found: activate-global-python-argcomplete

<mark>Does a path need to be added to the .zshrc or .bash_profile file?</mark>


## 2. Install virtualenv

https://virtualenv.readthedocs.io/en/latest/installation.html

	pipx install virtualenv
	virtualenv --help

Like this instead:

	python3 -m pipx install virtualenv

Success!

	⚠️  Note: virtualenv was already on your PATH at /usr/local/bin/virtualenv
	  installed package virtualenv 20.0.1, Python 3.7.3
	  These apps are now globally available
	    - virtualenv
	done! ✨ 🌟 ✨
	helix@dwilson-pc ~ % 

Show help for virtualenv:

	python3 -m virtualenv --help

Gives you:

	Usage: virtualenv.py [OPTIONS] DEST_DIR

	Options:
	  --version             show program's version number and exit
	  -h, --help            show this help message and exit
	  -v, --verbose         Increase verbosity.
	  -q, --quiet           Decrease verbosity.
	  -p PYTHON_EXE, --python=PYTHON_EXE
	                        The Python interpreter to use, e.g.,
	                        --python=python3.5 will use the python3.5 interpreter
	                        to create the new environment.  The default is the
	                        interpreter that virtualenv was installed with
	                        (/Library/Developer/CommandLineTools/usr/bin/python3)
	  --clear               Clear out the non-root install and start from scratch.
	  --no-site-packages    DEPRECATED. Retained only for backward compatibility.
	                        Not having access to global site-packages is now the
	                        default behavior.
	  --system-site-packages
	                        Give the virtual environment access to the global
	                        site-packages.
	  --always-copy         Always copy files rather than symlinking.
	  --relocatable         Make an EXISTING virtualenv environment relocatable.
	                        This fixes up scripts and makes all .pth files
	                        relative.
	  --no-setuptools       Do not install setuptools in the new virtualenv.
	  --no-pip              Do not install pip in the new virtualenv.
	  --no-wheel            Do not install wheel in the new virtualenv.
	  --extra-search-dir=DIR
	                        Directory to look for setuptools/pip distributions in.
	                        This option can be used multiple times.
	  --download            Download pre-installed packages from PyPI.
	  --no-download, --never-download
	                        Do not download pre-installed packages from PyPI.
	  --prompt=PROMPT       Provides an alternative prompt prefix for this
	                        environment.
	  --setuptools          DEPRECATED. Retained only for backward compatibility.
	                        This option has no effect.
	  --distribute          DEPRECATED. Retained only for backward compatibility.
	                        This option has no effect.
	  --unzip-setuptools    DEPRECATED.  Retained only for backward compatibility.
	                        This option has no effect.

## 3. Create a new virtualenv called yourenv in a folder:

	python3 -m virtualenv yourenv -p python2.7

Activate the new virtualenv:

	source ~/Documents/mytest/yourenv/bin/activate
	<!--
	python3 -m source bin/activate
	-->

## 4. Install Django and wazimap (a fork of Census Reporter)

[Wazimap Setup](https://wazimap.readthedocs.io/en/latest/started.html)

<mark>Later causes "pip install wazimap" to result in: Could not find a version that satisfies the requirement Django==2.2.6</mark>

	pip install 'django<1.10'

Returned:

	WARNING: pip is being invoked by an old script wrapper. This will fail in a future version of pip.
	Please see https://github.com/pypa/pip/issues/5599 for advice on fixing the underlying issue.
	To avoid this problem you can invoke Python with '-m pip' instead of running pip directly.
	Defaulting to user installation because normal site-packages is not writeable
	Collecting django<1.10
	  Downloading Django-1.9.13-py2.py3-none-any.whl (6.6 MB)
	     |████████████████████████████████| 6.6 MB 4.9 MB/s 
	Installing collected packages: django
	  Attempting uninstall: django
	    Found existing installation: Django 1.11.27
	    Uninstalling Django-1.11.27:
	      Successfully uninstalled Django-1.11.27
	  WARNING: The script django-admin is installed in '/Users/helix/Library/Python/3.7/bin' which is not on PATH.
	  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
	Successfully installed django-1.9.13



virtualenv yourenv -p python3.6

Yuck...

	source ~/Documents/mytest/yourenv/bin/activate

(for bash)
[myenv]

pip install wazimap resulted in:
	Could not find a version that satisfies the requirement Django==2.2.6

Run:
	pip list

Run: 
	pip install --upgrade django

This could be helpful:
Installing and using virtualenv with Python 3
[virtualenv-using-Python-3](https://help.dreamhost.com/hc/en-us/articles/115000695551-Installing-and-using-Python-s-virtualenv-using-Python-3)

---
