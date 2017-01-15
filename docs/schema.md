# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed

## books
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
author          | string    | not null, indexed
image_url       | string    | not null
publisher       | string    | not null
date            | date      | not null
description     | text      | not null
amazon_link     | string    | not null
kobo_link       | string    | not null
play_link       | string    | not null

## bookshelves
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
user_id         | integer   | not null, indexed

## bookshelf_books
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
bookshelf_id    | integer   | not null, indexed
book_id         | integer   | not null, indexed

## read_status_books
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
book_id         | integer   | not null, indexed
read_status_id  | string    | not null, indexed

## read_status
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
book_id         | integer   | not null, indexed
title           | string    | not null
rating          | integer   | not null
body            | text      | not null
