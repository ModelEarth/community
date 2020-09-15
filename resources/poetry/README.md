
# Pyenv and Poetry

### Let's add Pyenv:  

Source: [Definitive guide to python on Mac OSX](https://medium.com/@briantorresgil/definitive-guide-to-python-on-mac-osx-65acd8d969d0) and 
[pyenv](https://gist.github.com/wronk/a902185f5f8ed018263d828e1027009b)  

 **pyenv** for python version management and  
 **poetry** for python package/venv management  


<!-- I'm using xcode, but included this to note the need to change .bash_profile to .zshrc -->

If you chose not to install Xcode, you’ll need to add the SDKROOT environment variable to your shell:

	echo "export SDKROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk" >> ~/.bash_profile

If using zsh, change the end of that last command from ~/.bash_profile to ~/.zshrc .

	echo "export SDKROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX10.14.sdk" >> ~/.zshrc


Install pyenv:

	brew install pyenv

Add pyenv to your shell:

	echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile

If using zsh, change the end of that last command from ~/.bash_profile to ~/.zshrc

	echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc

You can also install pyenv-virtualenv to add virtualenv support to pyenv, but it’s not required since most of the virtualenv work you’ll do with poetry after we install it later. Some people like the pyenv-virtualenv support anyway.  

	brew install pyenv-virtualenv

For the next step, see the [definitive guide](https://medium.com/@briantorresgil/definitive-guide-to-python-on-mac-osx-65acd8d969d0) script for installing Python as a safety net. <!-- skipped because I'd already done this -->  Include python 2.7 <!-- might need this -->

	python -V

See a list of available python versions with pyenv:  

	pyenv install --list

Install a new version

	pyenv install 3.8.5

Pick a version, then set it as the global python version: <!-- was 3.7.6 -->

	pyenv global 3.8.5

### Install poetry

[Definitive Guide to Python on Mac using Poetry](https://medium.com/@briantorresgil/definitive-guide-to-python-on-mac-osx-65acd8d969d0) - [Poetry Docs](https://python-poetry.org/docs/#installation)  
Why you should use poetry:  
Obsoletes virtualenv, virtualenvwrapper, pipenv, setup.py, requirements.txt, and more.  

	curl -sSL https://raw.githubusercontent.com/sdispater/poetry/master/get-poetry.py | python

Poetry creates all your virtual environments automatically on-demand in a single directory by default. (See guide if you'd like to store .venv in the current folder.)

Guide limits pip to only work inside a virtual environment - so you can’t accidentally install python packages to the global python environment.  


\~/ translates to your user’s home directory



My .bash_profile contains:

	# aliases
	alias cd..="cd .."
	alias l="ls -al"
	alias lp="ls -p"
	alias h=history
