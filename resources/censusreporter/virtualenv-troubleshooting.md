# virtualenv troubleshooting

## To get virtualenv working

Install python3 using brew so it resides in /usr/local/bin/python3

Then uninstall and reinstall virtualenv


Even though python3 was already installed, the following fixed eval "$(register-python-argcomplete pipx)"  
Source: [How to set python3 as default Python version on Mac](https://dev.to/irfnhm/how-to-set-python3-as-a-default-python-version-on-mac-4jjf)  

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


Ran the following

	ln -s -f /usr/local/bin/python3.7 /usr/local/bin/python


Skipping since it is not in Nathan's .zshrc and he doesn't use bash.  
Edit your .bashrc (or .zshrc) and add these lines (skipping):

	export WORKON_HOME=~/.virtualenvs
	[ -f /usr/local/bin/virtualenvwrapper.sh ] && source /usr/local/bin/virtualenvwrapper.sh

This will configure the default location where to store your virtual environments and will run a command every time you open a new terminal, to make sure virtualenvwrapper can work correctly. Source: https://www.andreagrandi.it/2018/12/19/installing-python-and-virtualenv-on-osx/

Unistalled and reinstalled virtualenv
https://stackoverflow.com/questions/38951927/how-do-i-fix-virtualenv-install

	sudo pip uninstall virtualenv

Reinstalled:

	sudo pip install virtualenv


[run venv](./) or [virtualenv](virtualenv.html)
