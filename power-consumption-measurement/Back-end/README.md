## Power Consumption Metre Backend side

# Introduction

The objective of this backend project is to track and document the energy consumption of a particular system application. Finding the target application's process ID, estimating its power consumption using CPU information from the system, and returning the results via an API endpoint comprise the main functionality. Node is used to build the backend. Both Express and js. Along with other middleware and utility libraries, js is also used. 
 
 This backend service's main use case is to give users and administrators information about how much power various applications use so they can optimize their systems for speed and performance.

# Prerequisites

You will need the following hardware, software, and dependencies:

* npm (version 6.x or later) for managing dependencies
* A compatible computer or server running a supported operating system (e.g., Windows, macOS, or Linux)
* Node.js (version 12.x or later)


The aforementioned external libraries and modules are also used by the backend project:

* pidusage: For obtaining CPU usage information of a specified process
* systeminformation: For retrieving detailed system information, including process details
* cors: For handling Cross-Origin Resource Sharing (CORS) in the Express.js server
* express: For creating the web server and handling API routes
* dotenv: For loading environment variables from a .env file
* os-utils: For fetching operating system information

-> Before attempting to install and run the backend code, make sure your system complies with these requirements.

# Installation

How to install and set up your backend code has been described in details below:

1. Clone the repo
2. `npm install` for installing dependencies
3. Configure environment variables in a `.env` file if its not inclueded.
4. Run the backend server using `npm start` or a specific command

# Using manual

When the backend server is operational, you can use the API endpoint to obtain the power consumption of a particular application. Send an HTTP GET request to the following endpoint to accomplish this.

Example usage:

If the backend server is running on port 3000 and you want to get the power usage for an application called "Your-app", send a GET request to:

```bash
http://localhost:3000/api/power-usage/Your-app
```

Response might look like:

```json
{
  "appName": "your-app",
  "pid": 81,
  "powerUsage": "0.0 W"
}
```

Use this API endpoint to build your own monitoring tools for power usage analysis or to integrate the backend service with other application components.


# appController.js

Makes available the asynchronous Express function `appTarget` for export. Route handler for js that calculates how much energy is used by a given application. The `appMiddleware` module's `getTargetAppPid` and `calculatePowerUsage` functions are used.

* File name: appController.js
* Purpose: Route handler for calculating power usage of a specified application
* Dependencies: appMiddleware module
* Important functions: `appTarget`
* Description: This file exports the asynchronous Express function called appTarget. Js route handler for calculating an application's power consumption. It makes use of the appMiddleware module's getTargetAppPid and calculatePowerUsage functions.

# appMiddleware.js

Exports the `getTargetAppPid` and `calculatePowerUsage` functions. These functions are used to find the target application's process ID and calculate its power usage based on the system's CPU information and the application's CPU usage.

* File name: appMiddleware.js
* Purpose: Provide utility functions for calculating power usage of a specified application
* Dependencies: os-utils, pidusage, systeminformation
* Important functions: `getTargetAppPid`, `calculatePowerUsage`
* Description: The getTargetAppPid and calculatePowerUsage functions are exported in this file. Based on information about the system's CPU and the application's CPU usage, these functions are used to determine the target application's process ID and estimate its power consumption.

# config.js

The environment variables for the backend are contained in a configuration object that is exported by this file. The variables are loaded from the `.env` file using the `.env` library.

* File name: config.js
* Purpose: Load and export configuration variables for the backend server
* Dependencies: dotenv
* Important variables: `config.port`
* Description: The environment variables for the backend are contained in a configuration object that is exported by this file. The variables from the .env file are loaded using the .env library.


# appRoute.js

Exports an Express.js router with a single route for getting the power usage of a specified application by its name. It uses the `appTarget` function from the `appController` module as the route handler.

* File name: appRoute.js
* Purpose: Define the API route for getting power usage of a specified application
* Dependencies: express, appController module
* Important routes: `/power-usage/:appName`
* Description: An Express is exported by this file. Js router with a single route to obtain the power consumption of a given application identified by its name. The route handler is the appTarget function from the appController module.

# app.js

This file configures and launches Express. Backend server for js. It then configures the server to use the imported dependencies and routes while listening for incoming connections on the designated port.

* File name: app.js
* Purpose: Initialize and start the backend server
* Dependencies: express, config, appRoute, cors
* Main functionality: Set up and start the backend server
* Description:The Express is configured and launched by this file. Backend server for js. The server is configured to use the routes and listen for incoming connections on the specified port after the necessary dependencies and routes have been imported.

By combining their efforts, these modules offer a backend service for tracking and reporting the power consumption of specific applications running on a system.

# Contributions

You are welcome to contributions to this backend project! If you would like to contribute as the project is under developeent.

# License

This backend project is made available under the MIT License. You consent to follow the terms and conditions outlined in the license by contributing to the project or using the code. 
 
 The MIT License permits you to do the following things with the software: use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. 
 
 1. All copies or substantial portions of the software must include the aforementioned copyright notice and this permission notice. 
 2. THE SOFTWARE IS PROVIDED "AS IS," WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. NO WAY SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
 
 Please see the LICENSE file in the project repository for more details.

# Contact

Please feel free to contact the project maintainers if you have any inquiries, concerns, or recommendations regarding this backend project. You can get in touch with them via the following methods:

- GitHub Issues: To report bugs, propose features, or post a query, create a new issue on the project's GitHub repository page.

To help the project maintainers better understand and respond to your problems, please be as detailed as you can when contacting them.
