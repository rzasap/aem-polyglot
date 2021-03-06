![http://panda-soft.io](http://panda-soft.io/logo-email-signature.png)

[![Build Status](https://travis-ci.org/zietas/aem-polyglot.svg?branch=master)](https://travis-ci.org/zietas/aem-polyglot) 
[![Coverage Status](https://coveralls.io/repos/github/zietas/aem-polyglot/badge.svg?branch=master)](https://coveralls.io/github/zietas/aem-polyglot?branch=master)
[![dependencies Status](https://david-dm.org/zietas/aem-polyglot/status.svg)](https://david-dm.org/zietas/aem-polyglot)
[![devDependencies Status](https://david-dm.org/zietas/aem-polyglot/dev-status.svg)](https://david-dm.org/zietas/aem-polyglot?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# AEM Polyglot

This tool is designed mainly for developers who are tasked to translate automatically AEM dictionaries into other languages. 

Naturally you could use built into AEM a translation project, however this tool can do the job quickly and without a need to even start AEM. 

## What's under the hood?

In order to translate entries we are using Yandex Translation API. It's free to use (for smaller quotes) and does not require from a developer nothing more then setting up an account an creation of an API key. 

On the other hand Google Translate API enforces user to provide credit card data on the spot in orde to get the key.   

## Features

1. Create new empty dictionaries with `create` command
2. Add new dictionaries entries
3. Sort dictionaries by node keys - will be very usefull in order to maintain conistent dictionaries
4. Sorting in batch mode - whole directory 
5. Translate single dictionary to other language - including a set of given keys
6. Translate in batch mode - whole directory 

## Usage

1. Get your own Yandex [Translate API key](http://tech.yandex.com/translate)
2. `npm install -g aem-polyglot` - install the package
3. `aem-polyglot --help` - to get the list of commands
4. `aem-polyglot <command> --help` - to get details of given `<command>`


## Development

It's pretty simple and standard. 

1. `npm install` - to install 
2. `npm run lint` - to run eslint
3. `npm test` - to run unit tests
4. `npm run lcov-report` - coverage detailed report
