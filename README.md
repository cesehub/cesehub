# The CESE Hub
This repository is for [The CESE Hub](http://cesehub.org/). The CESE Hub is a web site to introduce and collect information for [the space-time conservation element and solution element (CESE) method](http://www.grc.nasa.gov/WWW/microbus/).
# The CESE Hub
This repository is for [The CESE Hub](http://cesehub.org/). The CESE Hub is a web site to introduce and collect information for [the space-time conservation element and solution element (CESE) method](http://www.grc.nasa.gov/WWW/microbus/).

## Welcome to contribute codes to this website!!

If you are interested in developing this website, please refer to the following steps to develop, test, and contribute your codes.

1. fork the source codes.
1. clone the source codes to your local machine.
1. edit the source codes that you just cloned to your local machine.
1. test your change
1. commit your change.
1. (optional) share how this change looks like to others(optional) share how this change looks like to others
1. publish your change to your github account.
1. propose a merge request.
1. participate the review.

### fork the source codes

Firstly, let's get the source codes. We will "copy" this source codes to your github account. The term "fork" means to get a derived copy which contents are the same as the source.

Click **fork** on the up-right of this [cesehub](https://github.com/cesehub/cesehub/) github repository page to fork the source codes to your github account. If you have not github account, please regist one for you first.

### clone the source codes to your local machine

Clone the source codes to your local machine, so you could edit the codes on your laptop or desktop.
In this session, we will get two working copies. One is a folder with the name **cesehub** and the other is **cesehub-dev**.

On your github page holding your cesehub fork which usually looks like https://github.com/<your account name>/cesehub/, there is a button **Clone or download**. Click it and copy the url of **Clone with HTTPS** to get your-repo-url which will be used later.

Please open your termial application of your machine, and type in the following command.

```
git clone <your-repo-url>
```
you-repo-url is the url you just got on your github page. Your system needs to install git first to use this application.
Now you should have a folder named **cesehub** on your local machine.
This repository will be used to host your fork github page. You could share the url it hosts to the others for their reviews. We will talk about the url later.
We called this is a staging site.

Finally, clone the source code directly from the cesehub upstream
```
git clone https://github.com/cesehub/cesehub/ cesehub-dev
```

You should have two folders on your local machine now. One is cesehub and another is cesehub-dev.

##### remove CNAME

The file **CNAME** in your fork will make the domain name duplicate and conflict with this [cesehub](https://github.com/cesehub/cesehub/) github repository page. Please remove it to suppress the warning emails from github.

Firstly, please go to the working copy folder cesebub, and remove CNAME.

```
cd cesehub
git rm CNAME
git commit -m 'remove CNAME to avoid to conflict.'
```

Secondly, give the base url name to tell github which url name you want to use. Please try to find the line begin with **url** and then change this line to be:

```
baseurl: /cesehub
```

Finally, publish this configuration change by

```
git add -u
git commit -m 'change the url name.'
git push
```

Now there should be a duplicate CESE Hub here

```
https://<your-github-account-name>.github.io/cesehub
```

You could use your browser to confirm this.

### edit the source codes that you just cloned to your local machine.

Please go to the folder cese-dev, create the branch for development by

```
git checkout -b dev
```

and use your editor or IDE (integrated development environment) to develop the code.

### test your change
##### build and run the page locally

This source code could be built to be a static website by [jekyll](https://jekyllrb.com/). You may need to install jekyll in your system first. If you already have jekyll in your system, please issue this command to build the code in the working copy **cesehub-dev**:

```
jekyll b
```

then, start the static website on your local machine:

```
jekyll s
```

Now you could open your browser, and go to this url to see your change is what you expected.

```
http://127.0.0.1:4000/
```

### commit your change

If everything looks good to you by checking the page running locally, we are going to commit this change.
Now please open the terminal and go to your working directory cese-dev. Use this command to check what you have edited.

```
git diff
```

If the change is what you expected, then commit it to your local git repository by

```
git add -u
git commit -m 'any commit message you want to have'
```

If your change is related to any issue of cesehub, please use the commit message like this:
```
git commit -m 'Ref issue #xxx your commit message'
```

### (optional) share how this change looks like to others

Sometimes you may want to know how the other people comments this change. Here is a way for you to share your latest change by sharing a static website hosted by github. That is, merge the change to the working copy cesehub and use the forementioned link https://github.com/<your account name>/cesehub/.

##### merge cesehub-dev to cesehub

We want to use the working copy cesehub to build and host the static website CESE Hub on github, so we need to merge the change from the working folder cesehub-dev, and then publich the change to the gh-pages branch of your cesehub fork.
Please go to the working folder **cesehub** and then issue this command

```
git pull ../cesehub-dev
```

Your terminal will prompt for the commit message with default editor. Save it to confirm this merge.

##### publish to your gh-pages branch of your fork

Please issue this command in your working copy cesehub

```
git push
```

and go to this link with your browser to see your change.

```
https://<your-github-account-name>.github.io/cesehub
```

If everything looks o.k., you can share this link to others.

### publish your change to your github account

Now you are ready to publish you code. Please go to your working copy cesehub-dev and issue this command

```
git push https://github.com/<your-github-account-name>/cesehub.git dev
```

before doing this, make sure you are in the folder cese-dev.

### propose a merge request

On your github cesehub fork page, select the branch tab **dev** to switch to the branch.
Then, there is a button **New Pull request**. Click it to create a merge request to the original cesehub source code.

### participate the review

After you made a pull request, please go to the **Pull requests** tab of [the Cese Hub repository](https://github.com/cesehub/cesehub/). Click the pull request you just made. Follow the conversation thread to follow up the latest status. Your pull request may be accepted directly, rejected, or pending for further discussion and change.
