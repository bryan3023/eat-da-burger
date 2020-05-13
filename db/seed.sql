--
--  Seed Eat-Da-Burger database
--
--  Pre-populate the database with values.
--

USE eat_da_burger_DB;


-- Populate burgers --

INSERT INTO burgers
  (burger_name, devoured)
VALUES
  ("Big Kahuna burger", TRUE),
  ("royale with cheese", FALSE),
  ("bison burger", FALSE),
  ("double-bacon cheesburger", TRUE),
  ("chicken burger", TRUE)
;