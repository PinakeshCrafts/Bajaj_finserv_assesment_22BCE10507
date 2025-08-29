const express = require('express');
const app = express();
app.use(express.json());

const FULL_NAME = "Pinakesh Chattopadhyay"; 
const DOB = "27032004"; 
const EMAIL = "pinakesh.chatto2016@gmail.com";
const ROLL_NUMBER = "22BCE10507"; 

function isNumber(str) {
  return /^[0-9]+$/.test(str);
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecial(str) {
  return !isNumber(str) && !isAlphabet(str);
}

function alternatingCaps(str) {
  let res = '';
  let upper = true;
  for (let i = str.length - 1; i >= 0; i--) {
    let ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      res += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    }
  }
  return res;
}

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let concatAlpha = '';

    data.forEach(item => {
      if (isNumber(item)) {
        let num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
        concatAlpha += item;
      } else if (isSpecial(item)) {
        special_characters.push(item);
      }
    });

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: alternatingCaps(concatAlpha)
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(200).json({
      is_success: false,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    });
  }
});

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));