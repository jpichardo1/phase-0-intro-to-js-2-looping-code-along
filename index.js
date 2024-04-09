// Code your solution in this file
function writeCards(names) {
    const thankYouMessages = [];
  
    names.forEach(name => {
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    });
  
    return thankYouMessages;
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const messages = writeCards(names);
  console.log(messages);

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5);