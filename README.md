# BFHL REST API

This project is a Node.js Express REST API for the Bajaj Finserv VIT Full Stack Question Paper.

## Features
- POST endpoint `/bfhl` that accepts an array and returns:
  - Status
  - User ID (Pinakesh CHattopadhyay)
  - Email ID (pinakesh.chatto2016@gmail.com)
  - College Roll Number (22BCE10507)
  - Array for even numbers
  - Array for odd numbers
  - Array for alphabets (converted to uppercase)
  - Array for special characters
  - Sum of numbers (as string)
  - Concatenation of all alphabetical characters in reverse order with alternating caps
- Handles errors gracefully

## Tech Stack
- Node.js
- Express

## How to Run Locally
1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. The API will run on `http://localhost:3000`.
4. Test the `/bfhl` endpoint using Postman or curl:
   - POST to `http://localhost:3000/bfhl`
   - Example request body:
     {
       "data": ["a", "1", "334", "4", "R", "$"]
     }
     ```


3. Set the root directory to `BajajAssesment` if prompted.
4. Deploy : https://bajaj-finserv-assesment-22-bce-1050.vercel.app/
