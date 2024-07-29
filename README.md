# Weather-App
# Getting Started with Create React App

In this project, you will build a simple application that allows users to see the weather in a city of their choice.
The application will include two pages: the main page (UsersPage) and the weather page (WeatherPage). General requirements:
Use BrowserRouter, Routes, and Route to configure the pages on the site.
/ - main page (UsersPage)
/weather - the weather page (WeatherPage) with an empty input for city search.

Specific requirements:
1. Main page (UsersPage):
: Display a list of users with the following information:
ID
name
username
email
City of residence (city)
Each user will have a "show weather" button that will take the user to the /weather?cityName=<city name> page with the city name.
2. The weather page (WeatherPage):
: Reading the city name from the query string.
: If the city name is not in the query string, present an empty input to the user with the option to search for the weather in the desired city.
:
Create a component called Weather that receives the name of the city as props and displays the weather in this city.
3. Design and pages:

Use CSS, TailwindCSS or Bootstrap for design.
Technical details:
:
Use react-router-dom to navigate the site
Use axios to send requests
Additional tasks:
: Add error handling if needed.