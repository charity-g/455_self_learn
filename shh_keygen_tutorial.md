

# GitHub
=> will access root `./ssh` file to set up connection with GitHub
`ssh-keygen -t ed25519 -C "your_email@example.com"` # email associated with GitHub

`cat ~/.ssh/id_ed25519.pub | clip`
> retrives key to be pasted into GitHub keys

# adding github repo remote to local  
> git 
= rebase
`git pull --rebase origin main`