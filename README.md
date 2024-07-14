# Real-Time Price Data App

This project is a real-time price data application for cryptocurrencies/stocks using Next.js, TypeScript, Redux, and Tailwind CSS on the frontend, and Express with MongoDB on the backend.

## Features

- Real-time price data fetching and displaying.
- Dynamic table with the latest 20 entries.
- Option to change the cryptocurrency/stock symbol.
- State management with Redux and persistence.

## Technologies Used

- **Backend**: Express.js, MongoDB, Mongoose, NodeJS, TypeScript.
- **Frontend**: Next.js, TypeScript, Redux, Tailwind CSS.


## Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- MongoDB

## Installation

### 1. Clone the repository 
    
  - git clone https://github.com/taruntailor7/realtime-data-app 

### 2. Install dependencies

  - cd backend
  - npm install
  - npm start ( Before starting backend make .env file check piont -> ### 3 ) 

  - cd frontend
  - npm install
  - npm start

### 3. Make .env file for backend
  - copy .env_example (check .env_example file have added my free mongogb atlas cluster username and password add that so in mongo_uri and in place of <username> <password> please use mine for testing, Thank you!)
  - API_KEY also have added mine which i generated from coingecko website api key is generated for free trial so it has some rate limit also so after calling this api it will throw an error becuase for polling data am calling api with this api key again and agin after 4 second so at some point it gives error and in sometime it will again give responses so please keep this remember for live data update it may affect for updating real data in UI at client side but if you observ UI for few minutes you can see the live data will be updated there here for updating live data am calling api in every 3 second from frontend our api which we have implemented in our backend but for exact real time we can use WEBSOCKETS.

### API Endpoints

Backend: http://localhost:5000

  - GET /api/prices/:symbol - Fetch the latest 20 price entries for the given symbol.

Frontend: http://localhost:3000

  - The frontend interacts with the backend API to fetch and display price data.

Usage:

 - Open your browser and navigate to http://localhost:3000.
 - Select a cryptocurrency/stock using the buttons provided.
 - View the real-time price data in the table.


Please reach out to me for any help or questions if you are unable to setup this repository am always here to help you out, Thanks!
Mobile No : +91-7737233212
Email : taruntailor7@gmail.com





