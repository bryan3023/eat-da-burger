--
--  Create Eat-Da-Burger localhost account
--
--  Create an account for working with the database locally.
--


DROP USER IF EXISTS 'bryan3023.eat_da_burger'@'localhost';

CREATE
  USER 'bryan3023.eat_da_burger'@'localhost'
  IDENTIFIED BY 'ifM91qUy89*#%R^QsFjN'
;

GRANT
  SELECT, UPDATE, INSERT, DELETE
ON
  eat_da_burger_DB . *
TO
  'bryan3023.eat_da_burger'@'localhost'
;