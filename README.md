# Getting Started
1. Clone Repo
2. Run yarn install 
3. Once you have ran yarn install, install nvm and run the command `nvm use` to make sure you are using the version of node I have specified in the package.json and .nvmrc file
4. If you don't already have TSLint Plugin, install the TSLint plugin in vscode. That should work with the TS settings we have configured in the tsconfig.json file
5. You should be all set. I encourage you to purge/remove all unused icons and components you do not intend on using to decrease the overall build size. The reason
I have so many icons and UI components is b/c this repo is intended to be a very good starting template.
6. `yarn start` will start up the application
7. Take a look at the tailwind.config.js file and customize your primary and secondary colors for your theming

# Scripts
`yarn storybook` will run the storybook UI library so you can have a playground for the components in the components/UI directory. Customize your UI components as you see fit

## License
MIT © 
