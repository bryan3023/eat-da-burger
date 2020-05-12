--
--  Create Eat-Da-Burger database
--
--  Create database for running the application.
--

DROP DATABASE IF EXISTS eat_da_burger_DB;
CREATE DATABASE eat_da_burger_DB;

USE eat_da_burger_DB;


-- Create tables --

CREATE TABLE burgers (
  id
    INT
    NOT NULL
    AUTO_INCREMENT
    PRIMARY KEY,

  name
    VARCHAR(30)
    NOT NULL,

  eaten
    BOOLEAN
    DEFAULT FALSE
);
