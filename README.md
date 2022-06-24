# Intrinsify 

**Pitch/Idea:** For beginners, it can be very overwhelming when first investing. The ratios, technical indicators, cash flow, and all the technical jargon is a lot to learn and take in. I have created a web application that allows users that are new to the investing space to search stocks and easily look at their intrinsic value. I have also added some summaries of some important metrics that all beginner investors should know. 

**MVP/Key Features:** 
* Discover stocks based on simple user search
* Create an account and secure login via Bcrypt
* Keep track of stocks you want, with your own watchlist (Add and Delete)
* Text updates to desired phone number through Twilio API.

**Database**
* A table for user information
* A table for watchlist that were added by a specific user
![Intrinsify Database](/pictures/Intrinsify%20Database.png)

**Registering**
<br>
*Creating the register page involved REGEX syntax to check if the user input passed requirements that I created. 
![Registering](/pictures/register.gif)

**Logging In**
<br>
*I created a login which verified the username and password via bcrypt to the POSTGRESQL database. If user enters the wrong password, an alert with an error will pop up.
![Logging In](/pictures/login.gif)
<br> 

**Searching a Stock**
<br>
*The idea of easily searching for a stock name or ticker symbol was one of the things that I wanted to implement. 
![Searching Stocks](/pictures/stockselect.gif)

<br>

**Fetching Stock News**
<br>
*Utilizing Bootstrap's pagination, I was able to fetch relevant news articles and display them to the user. 
![Searching Stocks](/pictures/news.gif)

<br>

**Using Twili API**
<br>
*Getting updates every 24 hours from the stock prices in you watchlist.
![Sending Updates Via Twilio API](/pictures/textSend.gif)

**Future Features**
* Users will be able to create discussion boards to talk more in depth about stocks with other users




