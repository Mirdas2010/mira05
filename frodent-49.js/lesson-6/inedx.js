// array [map, filter]

const users = [
    {
        id: 1,
        name: "Nurislam",
        age: 13,
    },
    {
        id: 2,
        name: "Begaly",
        age: 13,
    },
    {
        id: 3,
        name: "Azamat",
        age: 14,
    },
    {
        id: 4,
        name: "Erbol",
        age: 13,
    },
    {
        id: 5,
        name: "Aizirek",
        age: 13,
    },
    {
        id: 6,
        name: "Mirdas",
        age: 14,
    },
    {
        id: 7,
        name: "Meerimbek",
        age: 14,
    },
    {
        id: 8,
        name: "Amantur",
        age: 13,
    }
]

console.log(users);
console.log(users.map((name) => name.name));
console.log(users.map((age) => age.age));
console.log(users.filter((age) => age.age === 14));
console.log(users.filter((age) => age.age === 13));

const boxItem = document.querySelector(".box-item");

const usersMap = users.map((item) => {
    return `
         <div class="card-item">
              <h2 class="name">${item.name}</h2>
              <span class="age">${item.age}</span>
         </div>
    `
});

boxItem.innerHTML += usersMap.join("")

const cars = [
    {
        id: 1,
        carName: "BMW",
        carModel: "e34",
        year: 2015,
        carImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vJBwKWPB2yXIl-_D669UKC4EJtBF-lXrlA&s",
    },
    {
        id: 2,
        carName: "BMW",
        carModel: "m3",
        year: 2005,
        carImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cO8TELLCLRIVVj85hj5aKYMggUbLM3ZM8Q&s",
    },
    {
        id: 3,
        carName: "BMW",
        carModel: "e3 m46 gtr",
        year: 2010,
        carImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodZzznT8hAXCGb8bbZ92jQiJJ_UNJIeMdmQ&s",
    },
    {
        id: 4,
        carName: "BMW",
        carModel: "e3 m46",
        year: 2010,
        carImage: "https://global.discourse-cdn.com/forza/optimized/4X/f/b/5/fb5ba30c1fc67c83a78730a31d3d796ca18586fe_2_764x500.jpeg",
    }
];

console.log(cars);


console.log(users.map((cars) => cars.cars))
console.log(users.filter((cars) => cars.cars === 2015));
