# Intrinsify 

**Pitch/Idea:** For beginners, it can be very overwhelming when first investing with the ratios, technical indicators, cash flow, and all the industry jargon. To simplify the learning curve, I have created a web application that allows users that are new to the investing space to search stocks and understand their intrinsic value. The app also includes summaries of  important metrics that all beginner investors should know. 

**MVP/Key Features:** 
* Discover stocks based on simple user search
* Create an account and secure login via Bcrypt
* Keep track of stocks you want, with your own watchlist (Add and Delete)
* Text updates to desired phone number through Twilio API.

## Database Schema
- `users` — stores username, hashed password, etc.
- `watchlist` — links user to selected stock symbols

![Intrinsify Database](/pictures/Intrinsify%20Database.png)

---

## Screenshots

### Register Page
Validates user input using REGEX patterns.  
![Registering](/pictures/register.gif)

---

### Login Page
Authenticates credentials using bcrypt and PostgreSQL.  
![Logging In](/pictures/login.gif)

---

### Stock Search
Search for a stock by name or ticker symbol.  
![Searching Stocks](/pictures/stockselect.gif)

---

### News Pagination
Relevant news fetched and paginated using Bootstrap.  
![Stock News](/pictures/news.gif)

---

### Twilio Integration
Sends daily updates via text message.  
![Twilio Text Updates](/pictures/textSend.gif)

---

## Future Improvements
- Add stock discussion boards for community engagement
---




