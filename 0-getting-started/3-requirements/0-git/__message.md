# Git

Git is a source control system. It is most often interfaced through its command line interface (cli) of the same name. It can be interfaced with through a website that hosts version controlled repositories (github, gitlab) or through a GUI.

[Documentation](https://git-scm.com/docs/)
[Github Starter Activity](https://guides.github.com/activities/hello-world/)

## Repositories
Repositories are how we organize our code. They contain all the functionality of our code. Repositories have two great qualities: collaboration and history.

### Collaboration
A repository will usually have a singular place to store files in the cloud. Repositories tend to also come with other tools that double down in collaboration. We will see that the codebase you are currently navigating through

### History
Repositories have history. They change over time. In fact, they are the composition of changes over time. Each of these changes is called a commit. A commit often comes with a unique ID that represent the commit. When we look at a commit, we often see the composition of all commits before it.

The lesson structure in this program is aligned with how repositories change over time. Each lesson represents a commit. Overtime this will help with the understanding of what a repository is.

### Further Reading
 - https://en.wikipedia.org/wiki/Software_repository

## High Level Concept
Git trackes changes to a code base or repository. A repository can have many branches that each are the compilation of their own commits. Commits cannot be removed but they can be undone by applying the reverse commit. I can have a master branch that represents code commited to production and have other branches that I am individually working on.

## Getting Started
### Installing Git
 - Mac: already included
 - Windows: use [Git Bash](https://gitforwindows.org/)
 - linux: ...? TODO


### Cloning repository
Cloning a repository is done once per repository. It will create a folder with the content of that repository.
 - It will also create a `.git` folder within that repository that has information on how to access that repository for the future. Removing this folder will sever that connection

```sh
git clone <repository-address>
```
 - On github the repository address can be copied from a button with the label `Clone or Download`


## Commands
### Status
Shows what files are being tracked and have changes
```sh
git status
```

### Diff
Shows the changes in tracked files
```sh
git diff
```


### Add
Add files to be tracked
```sh
git add . # will add all the files
```
```sh
git add <filename> # will only add a specific file
```

### Commit
Commit the current tracked changes (what is displayed after `git diff`) to a single commit
```sh
git commit -m '<message>' # where message is the commits message
```

### Push
Push the code from your local instance of the remote repository at the hosting site
```sh
git push
```

### Branch
List all branches or create a branch
```sh
git branch # will list all branches
```

```sh
git branch <branch-name> # create a branch with the name <branch-name>
```
 - creating a branch will explicitly create the branch at the ccommit you are at.
 - This will not change your code only where you add your changes.
 - It is likely that you will want to check what branch you are on and make sure it is up to date

### Checkout
checkout a branch or a file in a branch
```sh
git checkout <branch-name>
```

You can create a branch at the same time as checkout out, with a `-b` flag
```sh
git checkout -b <branch-name>
```

### Merge
Merging is ussed to combine branches.
```sh
git merge <branch-name>
```
 - where `<branch-name>` is what I'd like to merge


Often times both branches are ahead of where they were at the time of branching. It's a good technique to merge in a master branch while on your branch
```
git checkout <branch-name>
git merge master
```
 - this can often lead to conflicts
 - your repository will be in a state where it has both set of changes separated by `==================`

The most common strategy is to keep our changes on conflicts
```sh
git checkout <branch-name>
git merge master -s ours
```

If you'd like to reference the master that is at origin (hosted on the cloud)
```sh
git checkout <branch-name>
git merge master -s ours
```
