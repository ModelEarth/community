# Virtualenv Troubleshooting (Mac OSX)

## To get virtualenv working

Even though python3 was already installed, the following fixed eval "$(register-python-argcomplete pipx)"  
Source: [How to set python3 as default Python version on Mac](https://dev.to/irfnhm/how-to-set-python3-as-a-default-python-version-on-mac-4jjf)  

Install python3 using brew so it resides in /usr/local/bin/python3  
Then uninstall and reinstall virtualenv


	brew install python

Brew places it here: /usr/local/bin/python3

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

This will configure the default location where to store your virtual environments and will run a command every time you open a new terminal, to make sure virtualenvwrapper can work correctly.  
Source: [Installing Python and virtualenv on osx](https://www.andreagrandi.it/2018/12/19/installing-python-and-virtualenv-on-osx/)

Unistalled and reinstalled virtualenv
https://stackoverflow.com/questions/38951927/how-do-i-fix-virtualenv-install

	sudo pip uninstall virtualenv

Reinstalled:

	sudo pip install virtualenv


If troubles persist, try using this [.zshrc file](https://github.com/ndwarshuis/dotfiles/tree/master/.config/zsh). Start a new terminal session after changing the file. Post an issue to let us know if the different .zshrc file resolves the problem.  

[run venv](./) or [virtualenv](virtualenv.html)
