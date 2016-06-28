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
1. publish your change to your github account.
1. propose a merge request.
1. participate the review.

### fork the source codes

Firstly, let's get the source codes. We will "copy" this source codes to your github account. The term "fork" means to get a derived copy which contents are the same as the source.

Click **fork** on the up-right of this [cesehub](https://github.com/cesehub/cesehub/) github repository page to fork the source codes to your github account. If you have not github account, please regist one for you first.

### clone the source codes to your local machine

Clone the source codes to your local machine, so you could edit the codes on your laptop or desktop.

On your github page holding your cesehub fork which usually looks like https://github.com/<your account name>/cesehub/, there is a button **Clone or download**. Click it and copy the url of **Clone with HTTPS** to get your-repo-url which will be used later.

Please open your termial application of your machine, and type in the following command.

```
git clone <your-repo-url>
```
you-repo-url is the url you just got on your github page. Your system needs to install git first to use this application.

### edit the source codes that you just cloned to your local machine.

Please use your editor or IDE (integrated development environment) to develop the code.

### test your change

This source code could be built to be a static website by [jekyll](https://jekyllrb.com/). You may need to install jekyll in your system first. If you already have jekyll in your system, please edit the line of **_config.yml** with the keyword "baseurl" at the beginning of the line to be:

```
baseurl: /cesehub
```

and then issue this command to build the code:

```
jekyll b
```

finally, start the static website on your local machine:

```
jekyll s
```

Now you could open your browser, and go to this url to see your change is what you expected.

```
http://127.0.0.1:4000/
```

### commit your change

Before we really commit our change, make sure we restore our baseurl modified in the previous step.

Now please open the terminal and go to your working directory. Use this command to check what you have edited.

```
git diff
```

If the change is what you expected, then commit it to your local git repository by

```
git commit -m 'any commit message you want to have'
```

If your change is related to any issue of cesehub, please use the commit message like this:
```
git commit -m 'Ref issue #xxx your commit message'
```

### publish your change to your github account

Now you are ready to publish you code by

```
git push
```

### propose a merge request

On your github cesehub fork page, there is a button **New Pull request**. Click it to create a merge request to the original cesehub source code.

### participate the review

After you made a pull request, please go to the **Pull requests** tab of [the Cese Hub repository](https://github.com/cesehub/cesehub/). Click the pull request you just made. Follow the conversation thread to follow up the latest status. Your pull request may be accepted directly, rejected, or pending for further discussion and change.
