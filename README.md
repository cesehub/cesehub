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

Please open your termial application of your machine, and type the following command:

```
git clone <your-repo-url>
```

`<you-repo-url>` is the URL you just got on your github page. Now you should see a folder named **cesehub** on your local machine. This local repository is associated to your remote github fork. You could share the remote URL to the others. We called this is a "staging site".

Finally, clone the source code directly from the cesehub upstream:

```
git clone https://github.com/cesehub/cesehub/ cesehub-dev
```

You should see two folders on your local machine now. One is `cesehub` and another is `cesehub-dev`.

### Edit the Source Code that You Just Cloned to Your Local Machine

Please go to the folder `cesehub-dev`, create the branch for development by

```
git checkout -b dev
```

Use your favorite editor or IDE (Integrated Development Environment) to edit the code.

### Test Your Change

#### Build and Run the Page Locally

A static website is built from the source by [jekyll](https://jekyllrb.com/). You may need to install jekyll. If you already have it, please issue this command to build the code in the working copy `cesehub-dev`:

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

Sometimes you may want to know how the other people comments this change. Here is a way for you to share your latest change by sharing a static website hosted by github. That is, merge the change to the working copy cesehub and use the forementioned link `https://github.com/<your account name>/cesehub/`.

#### Merge cesehub-dev to cesehub

We want to use the working copy cesehub to build and host the static website CESE Hub on github, so we need to merge the change from the working folder cesehub-dev, and then publich the change to the gh-pages branch of your cesehub fork.
Please go to the working folder **cesehub** and then issue this command

```
git pull ../cesehub-dev
```

Your terminal will prompt for the commit message with default editor. Save it to confirm this merge.

#### Publish to Your gh-pages Branch

Please issue this command in your working copy cesehub

```
git push
```

and go to this link with your browser to see your change.

```
https://<your-github-account-name>.github.io/cesehub
```

If everything looks OK, you can share this link to others.

### Publish Your Change to Your Github Account

Now you are ready to publish you code. Please go to your working copy cesehub-dev and issue this command:

```
git push https://github.com/<your-github-account-name>/cesehub.git dev
```

Before doing this, make sure you are in the folder `cesehub-dev`.

### Create a Merge Request and Participate the Review

On your github cesehub fork page, select the branch tab **dev** to switch to the branch. Then, there is a button **New Pull request**. Click it to create a merge request to the original cesehub source code.

After you make a pull request, please go to the **Pull requests** tab of [the Cese Hub repository](https://github.com/cesehub/cesehub/). Click the pull request you just made. Follow the conversation thread to follow up the latest status. Your pull request may be accepted directly, rejected, or pending for further discussion and change.
