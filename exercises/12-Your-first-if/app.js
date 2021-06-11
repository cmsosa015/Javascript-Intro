var total = prompt('How many km are left to go?');

// Your code below:

if (total >= 100)
 prompt= "We still have a bit of driving left to go"
else
  if (total >=50 && total <=100)
   prompt= "We'll be there in 5 minutes"
  else
    if (total <= 50)
    prompt= "I'm parking. I'll see you right now"

    console.log(prompt)