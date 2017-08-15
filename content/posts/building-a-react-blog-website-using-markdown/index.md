---
title: "Building a React Blog Web site using Markdown Language"
cover: "/photos/blog.png"
category: "Web Development"
tags:
    - React
    - Blog
    - Gatsby
    - Digitalocean
    - NGINX
    - HTTP2

date: "08/15/2017"
---
## Get started from building a blog Web site

To start with this [AI-Tester](https://ai-tester.com) project, the first step is to setup a blog site so that I can write down the lesson learned and experience gained somewhere, and these experiences can be share with others.

Here are the requirements for the blog sites for me:

-   Can use the [markdown](https://en.wikipedia.org/wiki/Markdown) language to write the blog posts.  Because it is easy to use, and don't need the rich-text editor support.  I can also edit the blog post in github directly.
-   [React](https://facebook.github.io/react/) based rendering for better performance and leverage my previous experience of working on React.
-   Based on the Google Material Design or other CSS framework, so that I don't need to spend too much time on setting up the CSS and layout of the page.

After some research, the [Gastby JS](https://www.gatsbyjs.org/) seems like a good framework to start with.  Because I can focus on the content, and still have the flexibility to customize the site I need.

## The Preparation

The first step is to [setup the server in Digitalocean](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04).  

The next step is to [setup the SSL Cert in the Nginx server](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).

I will document the more detail steps on how to setup the Nginx rules for the Gatsby node server instance later.

## Create your own Gatsby repo

The setup of the Gatsby is very easy.  Firstly, you need to install the `gatsby-cli`:

```
npm install --global gatsby-cli
```

There are many [Gatsby starters](https://www.gatsbyjs.org/docs/gatsby-starters/) you can use to have a better layout and additional features.  I choosed the [gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter), because it fits my requirements. And it have some good SEO build-in features, such as sitemap, robot.txt, etc.

The setup is very easy:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-material-starter
npm run serve
```

Then what you need to do is to link the newly created project to a git repo.  Then you are good to go.


