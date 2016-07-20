"use strict";

const Listr = require("listr");
const chalk = require("chalk");

const newline = () => console.log("\n");

newline();
console.log(chalk.green(`Thanks ${chalk.red.bold.underline("so")} much for contributing to this repository!`));
console.log(chalk.green(`Here's what you need to know.`));
newline();
console.log(chalk.grey.dim("When making changes..."));

const makingChangesList = new Listr([
    {
        title: "Try to follow a TDD approach.",
        task: () => Promise.resolve(),
    },
    {
        title: `Keep ${chalk.white.underline("npm run lint --watch")} running and make sure there aren't any errors, and little to no warnings.`,
        task: () => Promise.resolve(),
    },
    {
        title: `Use ${chalk.white.underline("npm test")} to run the tests. You can pass in the ${chalk.white.underline("--watch")} option too.`,
        task: () => Promise.resolve(),
    },
    {
        title: "Adhere to the folder structure, but make new folders where it makes sense to you.",
        task: () => Promise.resolve(),
    },
    {
        title: `Make sure your choice of editor is using the ${chalk.white.underline(".editorconfig")}.`,
        task: () => Promise.resolve(),
    },
    {
        title: "Please name usefully, even if the names seem verbose.",
        task: () => Promise.resolve(),
    },
    {
        title: "Explicity specifiy the type of a variable wherever possible.",
        task: () => Promise.resolve(),
    },
    {
        title: "Don't use I before an interface name.",
        task: () => Promise.resolve(),
    },
    {
        title: `Alias types using ${chalk.white.underline("type AliasName = specificType")} as much as possible to make intent clearer and wherever it makes sense.`,
        task: () => Promise.resolve(),
    },
    {
        title: "If you face any difficulties, feel free to open an issue and tag it \"development\".",
        task: () => Promise.resolve(),
    },
]);

makingChangesList.run().then(() => {
    newline();

    console.log(chalk.grey.dim("When all is said and done..."));

    const finishingList = new Listr([
        {
            title: `Run ${chalk.white.underline("npm run greenlight")} and make sure everything's going swell.`,
            task: () => Promise.resolve(),
        },
        {
            title: chalk.bold(`Use ${chalk.white.underline("git cz")} to commit instead of ${chalk.white.underline("git commit")} to ensure your commit message follows the commit message guidelines.`),
            task: () => Promise.resolve(),
        },
    ]);

    finishingList.run().then(() => {
        newline();
        console.log(chalk.green("Thanks again!"));
        newline();
    });
});
