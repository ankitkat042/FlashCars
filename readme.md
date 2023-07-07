# FlashCars   <img src="https://media.tenor.com/B9KijlkW9kcAAAAi/car-ride.gif" alt="drawing" width="75"/> <img src="https://media.tenor.com/B9KijlkW9kcAAAAi/car-ride.gif" alt="drawing" width="75"/>  <img src="https://media.tenor.com/B9KijlkW9kcAAAAi/car-ride.gif" alt="drawing" align="left" width="75"/>  <img src="https://media.tenor.com/B9KijlkW9kcAAAAi/car-ride.gif" alt="drawing" align="left" width="75"/> 

## A Relational DBMS project made in Winter Semester 2023 

Tech Stack : 
> Backend: [MySQL](https://www.mysql.com/), [Java](https://www.java.com/en/), [Springboot](https://spring.io/projects/spring-boot) <br> Frontend: HTML, CSS, [React.js](https://react.dev/)


## [PROJECT VIDEO](https://www.youtube.com/watch?v=aR1zt-sso1o):
CTRL+click on below image to open the video in new tab  

[![FlashCars Demo](https://img.youtube.com/vi/aR1zt-sso1o/0.jpg)](https://www.youtube.com/watch?v=aR1zt-sso1o "FlashCars Youtube Demo")

### Relational Model Visualisation of FlashCars  
![realtional model](https://github.com/ankitkat042/FlashCars/assets/79627254/14e2cd42-21fe-44c1-94b7-b1ac95de49e9)


### Entity Diagram of FlashCars
![entity diagram](https://github.com/ankitkat042/FlashCars/assets/79627254/f12c6950-33a1-4a93-a7cc-8c6a3258aab6)



## How to run on your local machine
- Make sure you have Eclipe IDE installed and install STS(spring boot extension)
- edit your local MySQL database credential in ```application.properties``` located in  ```backend\demo\backend\src\main\resources\``` as follows:
```
spring.datasource.url=jdbc:mysql://localhost:3306/demo?useSSL=false
spring.datasource.username=<your user name>
spring.datasource.password=<your dbb password>
#dont change port 3306 in case you haven't configured it manually(default is 3306)
# db name is demo and SSL is turned off for local instance
```
- install required packages to run npm on machine.
- create a blank database using MySQL CLI : ```create database demo;```
- Load backend folder in Eclipse IDE and Run the project.
- Open frontend folder in vscode and run ```npm start``` in root folder.
- The website will be instanced on port ```3000``` by default and you can access the website at ```http://localhost:3000```

----  
made with ❤ by [Ankit](https://github.com/ankitkat042) and [Aryan](https://github.com/Blazzzze)
