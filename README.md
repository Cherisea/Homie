# About

Relocating to a new city in a totally foreign country presents a huge challenge, especially for international students who have never lived abroad for long.
Local housing market, regulations related to tenancy and rental prices in different areas can be hard for a newcomer to grasp in a short time if they don't
know anyone there, not to mention the pressure from demanding schoolwork.

International students are also extremely vulnerable to bad landlords who take advantage of newcomers by intentionally not following required rental procedures
knowing that students usually don't have the resources and time to resort to a lawsuit if conflicts arise while their tenancy is in effect. Meanwhile, it's difficult
for students to find credible sources of information on desired rentals, which usually orient towards local population, leading to a situation where they usually fall back to
their expat community for help.

With this mission in mind, project Homie plans to tackle this problem by launching a site that hosts reviews of
rental units from previous verified tenants, effectively acting as a hub of information collected from decentralized sources to be used by rent-seekers and reducing
the risk of potential scams or being tricked by bad actors.

# Table of Content

- Features
- Architecture

## Features

1. A home page that allows users to search for a rental property by address;
   - A page that includes details of a rental should be displayed if the search returns only one result
   - A page featuring a card view of rentals should be rendered if the search returns multiple results
   - Appropriate flash messages should pop up if the search doesn't return any result
2. Home page should showcase a cyclical collections of most recent reviews;
3. A login and register page that includes user verification and password retrieval via emails;
4. A "Write a Review" page that enables a user to search for a rental he wants to comment on or, in case the rental doesn't exist in the database yet, create a rental listing and be the first commentator;
   - Any website user could view comments posted by others, but only those who are authenticated are allowed to post comments or interact with
     other users
   - A user should provide details of his lease before being allowed to post a review
5. Rental details consist of a picture gallery, overall rating, historical price, info on nearby grocery markets, reviews of verified tenants and an overall convenience star diagram that shows which types of tenants this rental is most suitable for;
6. Provide built-in messaging functionality that enables direct communication between authenticated users;
7. An "About Us" page that includes three sub-pages: "Our Story", "The Team" and "Contact Us".

## Architecture

- Frontend: React
- Backend: Django
- Database: MySQL
