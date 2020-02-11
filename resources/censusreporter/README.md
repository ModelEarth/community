# Census Reporter (Wazimap Setup)

## 1. Install or Upgrade pipx

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


**My note:**
This may also describe how to add the path...  
https://stackoverflow.com/questions/3402168/permanently-add-a-directory-to-pythonpath  

<br>
STUCK HERE, NOT MOVING FORWARD YET

## 2. Install 

https://virtualenv.readthedocs.io/en/latest/installation.html

	pipx install virtualenv
	virtualenv --help

## 3. Install Django and wazimap (a fork of Census Reporter)

[Wazimap Setup](https://wazimap.readthedocs.io/en/latest/started.html)