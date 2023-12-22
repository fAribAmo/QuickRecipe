# Quick Recipe - Group 20

## Short project description :
In this project, we will be developing a website capable of discovering recipes based on user-selected ingredients. The website will display relevant search results, and upon selecting a recipe, a detailed description will be presented, outlining the necessary steps to prepare the dish. Additionally, we aim to provide recommendations featuring similar recipes to the user. The technologies employed for this project include the React framework and Firebase.

The API used for this project is:
https://rapidapi.com/webknox/api/recipe

## Prerequisites :
Before you begin, ensure you have met the following requirements: 
- Node.js (v21.1.0 or higher recommended) 
- npm (v10.0.0 or higher) 

## Installation :
To install Quick Recipe, follow these steps:

- Clone the repository:

git clone https://gits-15.sys.kth.se/siyulu/DH2642_ht23_Project_QuickRecipe

- Navigate to the project directory with the commond:
'cd '

- Install the dependencies:

'npm install'

Or if you use Yarn, use:

'yarn install'

## Usage :
To run Quick Recipe in the development mode, execute the following command:

'npm run dev'

Or

'yarn dev'

## Project Structure
The project is structured as follows:

public: Contains static files. These include:
  - chef-hat.svg: An SVG image used as a decorative element.
  - homePic.jpg: An image file, used as a main image on the homepage.
  - vite.svg: An SVG related to Vite, indicating that this project uses Vite as its build tool.
src: The source code of the application, which includes React components, JavaScript modules, and other resources that are processed by the build system.
  - assets: Holds assets that are imported and used by the application code. This can include:
    - react.svg: An SVG icon for React, used within the application's UI.
    - recipe717040.json: Contains recipe data in JSON format, used within the application to display recipes.
    - testdata.json: Sample data in JSON format that used for testing purposes.
presenters: Contains presenter components that handle logic and state.
views: React components that define the UI of the application.
firebaseModel.js: Firebase configuration and initialization file.
App.js: The root React component that holds the structure of the application.
index.js: The entry point for the React application.
firebase.json: Firebase configuration file for deployment.
package.json: Lists the project dependencies and other metadata.

## Building for Production :
To build the application for production, run:

'npm run build'

Or 

'yarn build'

## Deployment:
The Quick Recipe app is deployed using Firebase Hosting, which serves the app over a secure connection. The live application can be accessed at [https://quickrecipe-14ffc.web.app/](https://quickrecipe-14ffc.web.app/).


