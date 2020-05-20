# Eat da Burger!

## Synopsis

It's like a to-list, but only for burgers.

## Description

This is a simple Express Handlebars app with a MySQL database backend. It allows you to to add burgers to a list of those you'd like to eat, mark those burgers as having been eaten, and then look at list of burgers you've eaten.

In this time of pandemic-induced stress eating, I'm here to enable!

[Check it out here.](https://eat-da-burger-bryan3023.herokuapp.com/)

## Installation

First, once you've downloaded the repo, type:

```
npm install
```

Next, you need to setup the database. You'll need a local MySQL instance for which you have the root password.

On either Windows or Mac, run:

```
npm run create-db
```

This will create and populate the database, and also configure a local MySQL account with limited rights to only this database.

Once you're done with the program, you can cleanly remove the database with:

```
npm run remove-db
```

> **WARNING:** On Windows, when running the `create-db` and `remove-db` scripts from within Git Bash, **your MySQL root password will not be masked**. It works as expected when running from within `cmd.exe` or `powershell.exe`, and I would recommend you use one of those.

## Usage

Once installed, begin the program by typing:

```
npm run start
```

Then open the website by navigating to `http://localhost:8080` in your web browser.

## Testing

None.
