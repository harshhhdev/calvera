# What is automated deployment? 

As taken from [DX.io](https://developerexperience.io/practices/automated-deployment#:~:text=Automated%20Deployment%20is%20a%20practice,development%20right%20through%20to%20production.), "automated deployment is a practise that allows you to ship code fully or semi-automatically across several stages of the development process".

In our case, we'll be setting up [GitHub Actions](https://github.com/features/actions) to automatically deploy our Abell website to [GitHub pages](https://pages.github.com/)

# Creating and setting up our Node.js GitHub action

There's a [GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages) deployment extension on [GitHub Actions Marketplace](https://github.com/marketplace/actions),

Go into your website's repository, and navigate over to the "actions" tab.

You should see some popular workflows under the tab of "Workflows made for your JavaScript repository"

Select the ["Node.js" workflow by GitHub Actions](https://github.com/actions/starter-workflows/blob/7135450ec14e7e47bf3e41dd65d399e5e315fa39/ci/node.js.yml), and click "Setup this workflow"

It should create a new file in the directory .github/workflows/node.js.yml with the boilerplate code.

Head down to strategy > matrix > node-version and set the correct version of Node.js which this project uses

In my case, I'll set this to 16.x

Next, we'll need to change the steps for it to suit our Abell app.

I'm using [yarn](https://yarnpkg.com/) for this project, but if you're using [NPM](https://npmjs.com/), make sure to adjust the steps accordingly.

```yml
steps:
  with:
    # cache: 'npm'
    cache: 'yarn'
  # run: rm -rf node_modules && npm ci
  - run: rm -rf node_modules && yarn install --frozen-lockfile
  # run: npm run build
  - run: yarn build
```

# Deploying our app to GitHub pages

To deploy our output to GitHub pages, we'll use the [Deploy to GitHub Pages](https://github.com/marketplace/actions/deploy-to-github-pages) action.

In your jobs, below the steps, we can start setting up our action

```yml
- name: Deploy
  uses: JamesIves/github-pages-deploy-action@4.1.4
  with:
    branch: gh-pages
    folder: dist
```

By default, all Abell projects use dist for their output directory, though this can be customised in the [Abell config](https://abelljs.org/guide/api-reference/#abellprograminfo-ltobjectgt).

Now commit this file to your master branch.

# Setting Up GitHub Pages

Now that we're done setting up our workflow, let's make sure GitHub pages works properly. 

Go into your repo > settings > pages.

Select gh-pages as your branch, and hit save.

Wait for the action to run, and your website should now be live!

Now, when you commit to your master branch, the files will automatically be built and deployed to your GitHub pages. Cool!
