<h1 align="center">
    unofficial-valorant-api
</h1>

<p align="center">
    Wrapper for the <a href="https://github.com/Henrik-3/unofficial-valorant-api"> <strong>Unofficial VALORANT API</strong> </a>
</p>
<p align="center">
    <a href="https://discord.gg/X3GaVkX2YN" target="_blank">
        <img src="https://img.shields.io/discord/704231681309278228?color=5865F2&logo=discord&logoColor=white"/>
    </a>
    <a href="https://www.npmjs.com/package/unofficial-valorant-api">
        <img src="https://img.shields.io/npm/dt/unofficial-valorant-api" alt="npm"/>
    </a>
</p>

# API

Find all inforamtion about the API itself [here](https://henrik-3.github.io/unofficial-valorant-api/)

# Installation

``` js
// npm
npm i unofficial-valorant-api

// pnpm
pnpm add unofficial-valorant-api

// yarn
yarn add unofficial-valorant-api
```

# Docs

You can find the documentation [here](https://github.com/Henrik-3/unofficial-valorant-api/tree/docs/doc/README.md)

Need help? Join the [Discord server](https://discord.gg/X3GaVkX2YN)

# Code Examples

You find some examples [here](./examples)

# Contributing

- The main package is located in [./package](./)
- Please use [eslint](https://eslint.org) with the provided config in [./.eslintrc.cjs](./.eslintrc.cjs)
  - 4 spaces, double quotes, etc (found in config)
  - Use `import type` always (when you can), using `import { type thing, thing2 }` if you need to import both a type and a value from a module
- **Use [pnpm](https://pnpm.io)!**
  - Install using `npm i -g pnpm`
  - Use `pnpm i` to install the dependencies
  - *A lot* faster & lock-file is a pnpm lock file
