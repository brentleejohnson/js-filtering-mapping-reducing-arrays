console.log("Can Everyone post a cake in chat?");

fetch("https://randomuser.me/api/?results=100")
  .then((response) => response.json())
  .then((data) => {
    // Store array in variable
    let people = data.results;

    // Show results in log
    console.log(people);

    // // Get list of everyone over 65.
    // let peopleOver65 = people.filter((person) => {
    //   return person.dob.age > 65;
    // });

    // console.log(peopleOver65);

    // // Get all females from people
    // let ladies = people.filter((person) => {
    //   return person.gender === "female";
    // });

    // console.log(ladies);

    // // Create HTML elements for every Lady
    // let ladyElements = ladies
    //   .map((lady) => {
    //     return `
    //     <li>${lady.name.first} ${lady.name.last}</li>
    //   `;
    //   })
    //   .join();

    // document.querySelector("#people-container").innerHTML = ladyElements;

    let totalAge = 0;
    for (let person of people) {
      totalAge = totalAge + person.dob.age;
    }

    console.log(totalAge);

    // Get the total age of all people added together
    let sumOfAges = people.reduce(
      (totalAge, person) => totalAge + person.dob.age,
      0
    );

    console.log("The total ages are: ", sumOfAges);

    // Function to get total price of all products in cart.
    // let total = cart.reduce(
    //   (totalPrice, product) => totalPrice + product.price,
    //   0
    // );
  });
