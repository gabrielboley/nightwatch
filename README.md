
# Testing Automation Framework using nightwatch js

UI automated testing framework powered by Node.js. It uses the Selenium WebDriver API. 

This Project can used as a template to create automation tests for other websites, as only the test variables will change but the configuration and setup will remail the same. 


## Getting Started

These instructions will help you install nightwatch.js framework on your local machines for testing purposes. The project includes 
all the necessary selenium and browser drivers and jar files. 

You will need to local log directory. 
    
### Prerequisities

Please have node.js installed on your machine.
For BrowserStack testing or cloud testing - you will need a account info. If you just want run test on chrome on your machine 
the project will work. 

```
To check if you have node type the following command in terminal 
node --version
```


### Installing

  This should be very simple install and should run out of box. Since, nightwatch,selenium,chromedriver and
    libraries are included inside the project. 
  
    
```
 Git clone or download the 'https://github.com/rchovatiya88/gabeover.git' project
```

### View the project 
  - Open in your favorite IDE 

## Running the tests

    To run the test locally on your machine, In `terminal` command link, type the following command in the project directory. (make sure your in the main directory not sub folders when running tests. i.e '/documents/gabeover')
   
**To Run tests**


```
npm test 
```
  - In `package.json` you can specific test commands. 
  ```json
  "devDependencies": {},
  "scripts": {
    "test": "node nightwatch -e chrome -a overstock"
  },

  ```


**To run all tests**
```
node nightwatch  -e chrome 
```

**To run a specific test 'clicks'**
```
node nightwatch -e chrome -a clicks 
```

  * '- e' (option to define environment "chrome", firefox, IE, etc)
  * '-a'  (option to run a specific test)
 






