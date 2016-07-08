# The CESE Hub
This repository is for [The CESE Hub](http://cesehub.org/). The CESE Hub is a web site to introduce and collect information for [the space-time conservation element and solution element (CESE) method](http://www.grc.nasa.gov/WWW/microbus/).

## Welcome to Contribute Code to This Website

If you are interested in contributing to this website, please refer to the following steps:

1. Fork the Repository
1. Clone the Repository to Your Local Machine
1. Edit the Website Source That You Just Cloned
1. Test Your Change
1. Commit Your Change
1. (Optional) Share How This Change Looks like to Others
1. Publish Your Change to Your Github Account
1. Create a Merge Request and Participate the Review

### Fork the Repository

First, you need to get the source of the website by "forking" it. That is, to get a derived copy which shares the history of the source repository.

Click **Fork** button on the top-right of this [cesehub](https://github.com/cesehub/cesehub/) github page to fork it to your github account. (You need a github account ready.)

### Clone the Forked Repository to Your Local Machine

You have to clone the forked repository to your local machine before you can edit the source code of the website. In the example of this section, we will get two working copies. One is a folder with the name `cesehub` and the other is `cesehub-dev`.

The URL of your cesehub repository on github should look like `https://github.com/<your account name>/cesehub/`. There is a button **Clone or download**. Click it and copy the URL of **Clone with HTTPS** to get `<your-repo-url>` which will be used later.

Please open your terminal application of your machine, and type the following command:

```
git clone <your-repo-url>
```

`<you-repo-url>` is the URL you just got on your github page. Now you should see a folder named **cesehub** on your local machine. This local repository is associated to your remote github fork. You could share the remote URL to the others. We called this is a "staging site".

### Edit the Source Code that You Just Cloned to Your Local Machine

Please go to the folder `cesehub`, create the branch for development by

```
git checkout -b dev
```

Now you have a branch `dev` and you are in the `dev` branch of your local working copy `cesehub`.
Use your favorite editor or IDE (Integrated Development Environment) to edit the code.

### Test Your Change

#### Build and Run the Page Locally

A static website is built from the source by [jekyll](https://jekyllrb.com/). You may need to install jekyll. If you already have it, please issue this command to build the code in the working copy `cesehub`:

```
jekyll b
```

Then start the static website on your local machine:

```
jekyll s
```

Now you could open your browser, and go to this URL to see your change is what you expected.

```
http://127.0.0.1:4000/
```

### Commit Your Change

If everything looks good, you can commit the change. Please open the terminal and go to your working directory `cesehub-dev`. Use this command to check what you have edited:

```
git diff
```

If the change is what you expected, then commit it to your local git repository by:

```
git add -u
git commit -m 'any commit message you want to have'
```

If your change is related to a github issue, please use the commit message like this:

```
git commit -m 'Ref issue #xxx your commit message'
```

### (Optional) Share How This Change Looks Like to Others

Sometimes you may want to know how the other people comments this change. Here is a way for you to share your latest change by sharing a static website hosted by github. That is, merge the change to the branch `gh-pages` of your working copy `cesehub`, publish it, and use the link `https://<your-github-account-name>.github.io/cesehub`.

#### Merge the Branch dev to gh-pages (LOCAL)

We want to use your cesehub fork on github to build and host your customized static website CESE Hub by github, so we need to merge the change from the branch `dev` of your local working copy, and then publish the change to the gh-pages branch of your cesehub fork, which will be done in the following parts.

Please go to the working folder **cesehub** and then issue this command

```
git checkout gh-pages
git merge dev
```

Your terminal will maybe prompt for the commit message with default editor. Save it to confirm this merge. Sometimes it will only show the resulting message of merging on the console without any prompt. This is dependent on the mode of this merging.

#### Tweak the Site Configuration of Your Customized CESE Hub

In order to make your cusomized CESE Hub access its associated resources like images correctly, before we push it to github, we suggest to tweak the configuration of the branch gh-pages of your fork.

##### Remove CNAME

The file CNAME in your fork will make the domain name duplicate and conflict with [CESE Hub](http://cesehub.org/). Please remove it to suppress the warning emails from github.

First, please go to your working copy, and remove CNAME. Make sure that you are removing CNAME of the branch gp-pages of your working copy.

```
git rm CNAME
git commit -m 'remove CNAME to avoid to conflict.'
```

##### Use correct URL to Access the Resources
Secondly, give the base URL name to tell github which URL name you want to use. Please try to find the line begin with `url` and then change this line to be:

```
baseurl: /cesehub
```

The above change should look like [this commit](https://github.com/cesehub/cesehub/pull/20/files).

Finally, commit this configuration change by

```
git add -u
git commit -m 'change the url name.'
```



#### Publish Your gh-pages Branch to Your cesehub Folk on GitHub)

Please issue this command in your working copy

```
git push
```

Now there should be a duplicate CESE Hub, which is your customized CESE Hub: `https://<your-github-account-name>.github.io/cesehub`.

You could use your browser to confirm this. If everything looks OK, you can share this link to others.

### Publish Your Change to Your Github Account

Because our gh-pages branch here is without 'CNAME' file and its configuration has been changed, this gh-pages branch is not suitable for further pull request of merging if you only focus on modifying the content of this website. Instead, we choose to publish all of changes through the 'dev' branch and use the gh-pages branch only for checking those modifications. That's the philosophy here.

Now you are ready to publish you code. Please go to your `dev` branch by

```
git checkout dev
```

and issue this command:

```
git push origin dev
```

Before doing this, make sure you are in the `dev` branch of your working copy.

### Create a Merge Request and Participate the Review

On your github cesehub fork page, select the branch tab **dev** to switch to the branch. Then, there is a button **New Pull request**. Click it to create a merge request to the original cesehub source code.

After you make a pull request, please go to the **Pull requests** tab of [the Cese Hub repository](https://github.com/cesehub/cesehub/). Click the pull request you just made. Follow the conversation thread to follow up the latest status. Your pull request may be accepted directly, rejected, or pending for further discussion and change.
