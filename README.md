================================================================================
                      NOTE-APP
================================================================================

A simple Notes App built with React (frontend) and Express.js (backend).
The application allows users to create, view, delete, and mark notes as important.

--------------------------------------------------------------------------------
FEATURES
--------------------------------------------------------------------------------
 - Create and save notes
 - Mark notes as important
 - Delete notes
 - Full deployment script for easy updates

--------------------------------------------------------------------------------
INSTALLATION & SETUP
--------------------------------------------------------------------------------
1. Clone the repository:
    
    $ git clone https://github.com/Dzrekey001/Note-App.git
    $ cd Note-App

2. Install dependencies:

   Backend:
   $ cd BackEnd
   $ npm install

   Frontend:
   $ cd ../FrontEnd
   $ npm install

--------------------------------------------------------------------------------
RUNNING THE APPLICATION
--------------------------------------------------------------------------------
1. Start the backend:
    $ cd BackEnd
    $ npm run dev

2. Start the frontend:
    $ cd ../FrontEnd
    $ npm run dev

Application should now be running:
    - Frontend:  http://localhost:5173
    - Backend:   http://localhost:3001

--------------------------------------------------------------------------------
DEPLOYMENT
--------------------------------------------------------------------------------
To deploy the full application (UI + backend), run:
    $ npm run deploy:full

This script will:
    1. Build the frontend
    2. Copy the built files to the backend
    3. Commit and push the changes to Git

--------------------------------------------------------------------------------
LICENSE
--------------------------------------------------------------------------------
This project is licensed under the MIT License.

Author: Dzrekey001
================================================================================