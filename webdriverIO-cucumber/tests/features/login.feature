Feature: Login to User Page

Given User on the beeline main page

When User login with phonenumber and password <phonenumber> <password> into the text box
Then User should see own Phone Number <phonenumber> on account page

|phonenumber| |password|
|+79150388685| |113031|

