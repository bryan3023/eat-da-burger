# Eat da Burger!

## Synopsis

It's like a to-list, but only for burgers.

## Description

This is a simple Express Handle bars app with a MySQL database backend. It allows you to to add burgers to a list of those you'd like to eat, mark those burgers as having been eaten, and then look at list of burgers you've eaten.

In this time of pandemic-induced stress eating, I'm here to enable!

[Check it out here.](https://eat-da-burger-bryan3023.herokuapp.com/)

## Installation

First, once you've downloaded the repo, type:

```
npm install
```

Next, you need to setup the database. You'll need a local MySQL instance for which you have the root password.

If you're on a Mac, you can run:

```
npm run create-db-mac
```

On Windows, type:

```
npm run create-db-win
```

Both of these scripts will create and populate the database, and also configure a local MySQL account with limited rights to only this database. Both scripts will prompt you for the root password, but this will not be saved or displayed in ay way..

Once you're done with the program, you can cleanly remove it. On the Mac, type:

```
npm run remove-db-mac
```

On Windows, type:

```
npm run remove-db-win
```

## Usage

Once installed, begin the program by typing:

```
npm run start
```

Then open the webiste by navigating to `http://localhost:8080` in your web browser.

## Testing

None.