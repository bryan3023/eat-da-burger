--
--  Create Eat-Da-Burger database
--
--  Create database for running the application.
--


-- Create tables --

CREATE TABLE burgers (
  id
    INT
    NOT NULL
    AUTO_INCREMENT
    PRIMARY KEY,

  burger_name
    VARCHAR(120)
    NOT NULL,

  devoured
    BOOLEAN
    DEFAULT FALSE
);
