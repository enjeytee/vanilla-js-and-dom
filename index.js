/// VANILLA JS AND DOM ///

"use strict";

message = 'hello world' // GLOBAL OBJECT
in the browser the global object is named window
in the server i.e. node.js is name global
globalThis - multiple environment
console.log(globalThis.message);

const mySon = `Luke`;
const parentalStatus = `father`;
const message = `${mySon}, I am your ${parentalStatus}`;
console.log(message);


/// IF | ELSE IF | ELSE ///

const time = "";
const userName = "John";
let greeting = "";
if (time === "morning") {
    greeting = "morning";
} else if (time === "afternoon") {
    greeting = "afternoon";
} else if (time === "evening") {
    greeting = "evening";
} else {
    greeting = "night";
}
console.log(`Good ${greeting}, ${userName}`)

/// END OF IF | ELSE IF | ELSE ///


/// SWITCH - CASE ///

switch (time) {
    case "morning":
        greeting = "morning";
        break;
    case "afternoon":
        greeting = "afternoon";
        break;
    case "evening":
        greeting = "evening";
        break;
    default:
        greeting = "night";
}   
console.log(`Good ${greeting}, ${userName}`)

/// END OF SWITCH - CASE ///


console.log("Challenge 1:");
console.log(!undefined); // true
console.log(Boolean(NaN)); // false
console.log(false === false); // true
console.log(5 === "5"); // false
console.log("Hello" == "hello"); // false
console.log("Challenge 2:"); 
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean("")); // false
console.log(!null); // true
console.log(!!"hello"); // true

const isAuthenticated = true;
const cartItemCount = isAuthenticated ? 1 : 0
console.log(cartItemCount)
const age = 10;
const message = age > 20 ? "That's an interesting age!" :
    age > 18 ? "Greetings." :
    age > 10 ? "What's up?" :
    "Hey there."
console.log(message)
const isAuthenticated = true;
const shoppingCart = isAuthenticated ? "ipad" : "";
console.log(`Shopping cart: ${shoppingCart}`)
const age = 19;
const allowedAccess = age > 17 ? true : false;
console.log(`Allowed Access: ${allowedAccess}`)

const response = "John";
const username = response || "Guest"
console.log(username)
const isEmailVerified = true;
const otherName = isEmailVerified && response || "Guest"
console.log(otherName)
const karma = 130;
const isModerator = false;
let hasEnoughtKarma = karma > 100 ? true : false;
console.log(hasEnoughtKarma);
const canUpvote = hasEnoughtKarma || isModerator;
console.log(`Can upvote: ${canUpvote}`);
const canDelete = hasEnoughtKarma && isModerator;
console.log(`Can delete: ${canDelete}`);

const message = (user, message) => {
    return `${user}'s message: ${message}`;
}
const user1 = "Neil";
const message1 = "Hello";
console.log(message(user1, message1));
const user2 = "John";
const message2 = "World";
console.log(message(user2, message2));
const splitBill = (bill, numOfFriends) => {
    return `Each person has to pay: ${bill / numOfFriends}`;
};
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));

function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
        likeCount += step;
        return likeCount;
    }
}
const doubleLike = handleLikePost(2);
console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());
const handleLikePost2 = (step) => {
    let likeCount = 0;
    return () => {
        return likeCount += step;
    }
}
const doubleLike2 = handleLikePost2(2);
console.log(doubleLike2());
console.log(doubleLike2());
console.log(doubleLike2());
const countDown = (startNumber, step) => {
    return () => {
        return startNumber -= step;
    };
};
const countingDown = countDown(10, 1);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

const celsiusToFahrenheit = (celsius, decimalPlaces = 2) => {
    const fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(decimalPlaces));
};
console.log(celsiusToFahrenheit(99));

const userName = 'john'
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
const greetUser = (name, callback) => callback(capitalize(name));
console.log(greetUser(userName, name => `Hello, ${name}`))
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`;
console.log(splitBill(888.77, 9));
const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () => countFromNum -= step;
}
const countingDown = countdown(20, 2);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

const getData = 
    baseUrl => 
        route => 
            callback => 
                fetch(`${baseUrl}${route}`)
                    .then(response => response.json())
                    .then(data => callback(data));
const getSocialMediaData = getData("https://jsonplaceholder.typicode.com")
const getSocialMediaPosts = getSocialMediaData('/posts')
const getSocialMediaComments = getSocialMediaData('/comments')
getSocialMediaPosts(posts => posts.forEach(post => console.log(post.title)));
getSocialMediaComments(comments => comments.forEach(comment => console.log(comment.email)));


const bar = "GK Grill";
const cafe = "Cafe Noelle";
const restaurant = "The Aristocrat";
const favouritePlaces = {
    bar,
    cafe,
    restaurant,
    greeting() {
        console.log(`${favouritePlaces.bar} is my favourite bar.`);
        console.log(`${favouritePlaces.cafe} is my favourite cafe`);
        console.log(`${favouritePlaces.restaurant} is my favourite restaurant.`);
    }
};
console.log(favouritePlaces);
console.log(favouritePlaces.bar);
console.log(favouritePlaces.cafe);
console.log(`My favourite restaurant is ${favouritePlaces.restaurant}.`);
favouritePlaces.greeting();

const recommendations = {
    pancakes: "Nowhere Man",
    riceBowls: "Pompoko",
    beer: "The Craft Beer Co.",
    coffee: "Coffee Roasters",
    small_plates: "Venetian Plates",
    music: {
        traditional: "Fiddler\'s Elbow",
        jazz: "The Paris House"
    }
}
const {coffee, beer} = recommendations;
console.log(`Coffee: ${coffee}, Beer: ${beer}`);
const {music: { traditional, jazz}} = recommendations;
console.log(`Traditional: ${traditional}, Jazz: ${jazz}`);
const giveRecommendations = ({music: {traditional, jazz}}) => {
    console.log(`Traditional: ${traditional}, Jazz: ${jazz}`)
}
giveRecommendations(recommendations);

const user = {
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    passowrd: ""
}
const newUser = {
    name: "John",
    email: "enjeytee@gmail.com",
    password: "password"
}
const createdUser = Object.assign({}, user, newUser, {verified: false});
console.log(user);
console.log(createdUser);
const user2 = {
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    passowrd: ""
}
const newUser2 = {
    name: "John",
    email: "enjeytee@gmail.com",
    password: "password"
}
const createdUser2 = {...user, ...newUser, verified: false};
console.log(user);
console.log(createdUser);

const favouritePlace = new Map([
    ["music", "jazz"],
    ["name", "Paris House"]
]);
favouritePlace.set("visited", false);
console.log(favouritePlace);
favouritePlace.set("averageBill", 100);
console.log(favouritePlace);
console.log(favouritePlace.get("name"));

const favouriteSongs = [];
favouriteSongs.push("Iris", "Don't Cry", "Civil War");
console.log(favouriteSongs[favouriteSongs.length - 1]);
favouriteSongs.pop();
console.log(favouriteSongs);


/// SOME AND EVERY ///

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true},
]
console.log(songs.some(song => song.wonGrammy));
console.log(songs.every(song => song.timesStreamed > 1.5));

/// END OF SOME AND EVERY ///


/// MAPS ///

const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]
const newTemps = temperatures.map(temperature => {
    temperature.isRecordTemp = true; // to modify property
    temperature.isBaloney = false; // to add a property
    return temperature;
});
console.log(newTemps);

const temperatures3 = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]
const newTemp3 = temperatures3.map(temperature => 
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);
console.log(newTemp3);

const temperatures2 = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]
temperatures2.forEach(temperature => {
    temperature.degrees > 70 ? temperature.isHigh = true : temperature.isHigh = false;
});
console.log(temperatures2);

/// END OF MAPS ///


/// REDUCE ///

const cars = [
    {name: "Toyota", isElectric: false, weight: 1320},
    {name: "Ford", isElectric: false, weight: 1400},
    {name: "Volkwagen", isElectric: false, weight: 1370},
    {name: "Honda", isElectric: false, weight: 1375},
    {name: "Tesla", isElectric: true, weight: 1750},
    {name: "BMW", isElectric: true, weight: 1350}
]
const totalWeight = cars.reduce((accumulator, car) => {
    return accumulator + car.weight;
}, 0);
console.log(totalWeight);
const totalWeightOfEV = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        accumulator += car.weight;
    }
    console.log(`accumulator: ${accumulator}, car.weight: ${car.weight}`)
    return accumulator;
}, 0);
console.log(totalWeightOfEV);

const numbers = [1, 2, 3, 4, 5, 6];
const numbersTimesTwo = numbers.reduce((accumulator, number) => {
    accumulator.push(number * 2);
    return accumulator;
}, []);
console.log(numbersTimesTwo);
/ MAP VERSION OF ABOVE CODE ///
const numbersTimeTwo = numbers.map(numbers => {
    return numbers * 2;
});
console.log(numbersTimeTwo);
const numbers = [1, 2, 3, 4, 5, 6];
const numbersGreaterThanThree = numbers.reduce((acc, num) => {
    if (num > 3) {acc.push(num)};
    return acc;
}, []);
console.log(numbersGreaterThanThree);
/ FILTER VERSION OF ABOVE CODE ///
const numbersGreaterThanThree = numbers.filter(num => num > 3);
console.log(numbersGreaterThanThree);

// END OF REDUCE //


/// ARRAY SPREAD ///

const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];
const allMenuIdeas = lunchMenuIdeas;
allMenuIdeas.push("Southern Fried Chicken");
console.log(lunchMenuIdeas);
console.log(allMenuIdeas);
const lunchMenuIdeas2 = ["Harvest Salad", "Southern Fried Chicken"];
const allMenuIdeas2 = lunchMenuIdeas2.concat("Club Sandwich"); // USE OF CONCAT
console.log(lunchMenuIdeas2);
console.log(allMenuIdeas2);
const lunchMenuIdeas3 = ["Harvest Salad", "Southern Fried Chicken"];
const allMenuIdeas3 = [...lunchMenuIdeas3, "Club Sandwich"];
allMenuIdeas3.push("Roast Beef");
console.log(lunchMenuIdeas3);
console.log(allMenuIdeas3);
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "MeatLoaf", "American Cheeseburger"];
const allMenuIdeas = [...breakfastMenuIdeas, "Harvest Salad", "Southern Fried Chicken", ...dinnerMenuIdeas];
console.log(allMenuIdeas);
const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];
const otherMenuIdeas = [...breakfastMenuIdeas, ...lunchMenuIdeas, ...dinnerMenuIdeas];
console.log(otherMenuIdeas);
const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", "Southern Fried Chicken", 
    ...dinnerMenuIdeas
];
const saladIndex = allMenuIdeas.findIndex(idea => idea === "Harvest Salad");
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === "Meatloaf");
const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuIdeas.slice(saladIndex + 1, meatloafIndex),
    ...allMenuIdeas.slice(meatloafIndex + 1)
];
console.log(finalMenuIdeas);

/// END OF ARRAY SPREAD ///


/// ARRAY DESTRUCTURING ///

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
];
let [first, second] = finalMenuItems;
console.log({ first }, { second });
[second, first] = [first, second];
console.log({ first }, { second });
const [winner, ...losers] = finalMenuItems;
console.log({ winner }, { losers })

const fishDishes = ["Salmon Rillettes", "Grilled Tuna Provencal", "Fish and Chips"];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];
const chefsFishDishes = fishDishes.reduce((acc, dish) => dish.startsWith('S') ? acc.concat(dish) : acc, []);
const regularFishDishes = fishDishes.reduce((acc, dish) => !dish.startsWith('S') ? acc.concat(dish) : acc, []);
console.log({ chefsFishDishes });
console.log({ regularFishDishes });
const chefsMeatDishes = meatDishes.reduce((acc, dish) => dish.startsWith('S') ? acc.concat(dish) : acc, []);
const regularMeatDishes = meatDishes.reduce((acc, dish) => !dish.startsWith('S') ? acc.concat(dish) : acc, []);
console.log({ chefsMeatDishes });
console.log({ regularMeatDishes });
const chefsDishes = [
    ...chefsFishDishes,
    ...chefsMeatDishes
];
console.log({ chefsDishes} );
const regularDishes = [
    ...regularFishDishes,
    ...regularMeatDishes
];
console.log({ regularDishes });

/// END OF ARRAY DESTRUCTURING ///


/// OBJECT TO ARRAYS ///

/// USING FOR-IN LOOP TO ITERATE THRU AN OBJECT ///
const obj = { one: 1, two: 2 };
for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

/// OBJECT.KEYS() ///
const user = {
    name: "Neil", 
    age: 46 
}
const ageExist = Object.keys(user).includes('age');
console.log(ageExist);
const values = Object.keys(user).map(key => user[key]);
console.log(values);
/// OBJECT.VALUES()
console.log(Object.values(user));
const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95  
};
const totalExpenses = Object.values(monthlyExpenses).reduce((acc, exp) => acc + exp, 0);
console.log(totalExpenses);
/// OBJECT.ENTRIES() ///
const users = {
    '2345234': {
        name: "John",
        age: 29
    },
    '8798129': {
        name: "Jane",
        age: 42
    },
    '1092384': {
        name: "Fred",
        age: 17 
    }
};
const usersOver20 = Object.entries(users).reduce((acc, [id, userData]) => {
    if (userData.age > 20) {
        acc.push({ ...userData, id })
    }
    return acc;
}, []);
console.log(usersOver20);

/// END OF OBJECT TO ARRAYS ///


/// UNIQUE SETS OF DATA ///

const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
];
const numbers = new Set([[1], [2], [3]]);
console.log(numbers.size);
for (const num of numbers) {
    console.log(num);
};
const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes);

/// END OF UNIQUE SETS OF DATA ///


/// USE NEW, IMMUTABLE ARRAY FEATURES ///

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
numbers.forEach(num => console.log(num));

/// END OF USE NEW, IMMUTABLE ARRAY FEATURES ///


/// CONSTRUCTOR FUNCTION ///

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
};
Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
};
Student.prototype.removeSubject = function(subject) {
    this.subjects = this.subjects.filter(subj => subj != subject);
};
const student1 = new Student(1, "John");
const student2 = new Student(2, "Neil");
const student3 = new Student(3, "Patrick");
student1.addSubject("Math");
student1.addSubject("Science");
console.log(student1.subjects);
console.log(student1);
student2.addSubject("English");
student2.addSubject("Algebra");
student2.addSubject("Physics");
student2.addSubject("Chemistry");
student2.addSubject("Trigonometry");
console.log(student2);
console.log(student2.subjects);
student2.removeSubject("Chemistry");
console.log(student2.subjects);
student3.addSubject("English");
student3.addSubject("Algebra");
student3.addSubject("Physics");
student3.addSubject("Chemistry");
student3.addSubject("Trigonometry");
console.log(student3.subjects);
student3.removeSubject("English");
console.log(student3.subjects);

function Book(id, title, author, themes = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}
Book.prototype.addTheme = function(theme) {
    this.themes = [...this.themes, theme]
}
Book.prototype.removeTheme = function(theme) {
    this.themes = this.themes.reduce((acc, element) => {
        if (element != theme) {acc.push(element)};
        return acc;
    }, [])
}
const book1 = new Book(1, "Pet Sematary", "Stephen King")
const book2 = new Book(1, "Twighlight", "Stephanie Mayer")
book1.addTheme("Thriller");
book1.addTheme("Fantasy");
book1.addTheme("Horror")
console.log(book1);
console.log(book1.themes);
book1.removeTheme("Fantasy");
console.log(book1.themes);
book2.addTheme("Romance");
book2.addTheme("Fantasy");
book2.addTheme("Horror");
console.log(book2);
console.log(book2.themes);
book2.removeTheme("Fantasy");
console.log(book2.themes);

/// END OF CONSTRUCTOR FUNCTION ///


/// UNDERSTANDING PROTOTYPE CHAIN ///

/ PROTOTYPICAL INHERITANCE - EACH INSTANTIATED OBJECT (FROM CONSTRUCTO FUNCTION) INHERITS FROM PROTOTYPE
/ EVERY OBJECT HAS PROTOTYPE
console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf({}).constructor);
console.log(new Object());
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}
const student1 = new Student(1, "John");
console.log(Object.getPrototypeOf(student1).constructor);
console.log(student1.__proto__);
console.log(student1.__proto__ === Student.prototype);
console.log(student1.__proto__.__proto__ === Object.prototype);
console.log(student1.__proto__.__proto__.__proto__);

/// END OF UNDERSTANDING PROTOTYPE CHAIN ///


/// EASY PROTOTYPZL INHERITANCE WITH CLASSES ///

/ CLASSES === CONSTRUCTOR FUNCTIONS ///
/ CLASSES - CREATE OBJECTS WITH SHARED METHODS ///
console.log(typeof class Student {});
class Student {
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    };
    getStudentName() {
        return `Student name: ${this.name}`
    };
    addSubject(subject) {
        this.subjects = [...this.subjects, subject];
    };
    removeSubject(subject) {
        this.subjects = this.subjects.filter(sub => sub != subject);
    }
};
console.log(Student.prototype.addSubject);
const student1 = new Student(1, "John");
console.log(student1);
console.log(student1.getStudentName());
student1.addSubject("Algebra");
student1.addSubject("Physics");
student1.addSubject("English");
student1.addSubject("Chemistry");
student1.addSubject("Geometry");
console.log(student1.subjects);
student1.removeSubject("English");
console.log(student1.subjects);


class Film {
    constructor (id, title, director, releaseYear, genres = []) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.genres = genres;
    }
    addGenre(genre) {
        this.genres = [...this.genres, genre];
    };
    removeGenre(genre) {
        this.genres = this.genres.reduce((acc, gen) => {
            if (gen != genre) {
                acc.push(gen)
            };
            return acc;
        }, []);
    }
    getFilmTitle() {
            return `Title: ${this.title}`;
    };
};
const movie1 = new Film(1, "Dead Poets Society", "Peter Weir", "1989")
movie1.addGenre("Comedy");
movie1.addGenre("Teen");
movie1.addGenre("Action");
movie1.addGenre("Drama");
console.log(movie1);
console.log(movie1.genres)
movie1.removeGenre("Action");
console.log(movie1.director);
console.log(movie1.genres);
console.log(movie1.getFilmTitle());
const movie2 = new Film(2, "Good Will Hunting", "Gus Van Sant", "1997")
movie2.addGenre("Romance");
movie2.addGenre("Drama");
movie2.addGenre("Action");
movie2.addGenre("Indie Film");
console.log(movie2);
console.log(movie2.genres)
movie2.removeGenre("Action");
console.log(movie2.director);
console.log(movie2.genres);
console.log(movie2.getFilmTitle());

/// END EASY PROTOTYPAL INHERITANCE WITH CLASSES ///


/// SHARE CLASS FEATURES WITH EXTENDS ///

class Product {
    constructor(name, price, discountable) {
        this.name = name;
        this.price = price;
        this.discountable = discountable;
    }
    isDiscountable() {
        return this.discountable;
    }
}
class SaleProduct extends Product {
    constructor(name, price, discountable, percentOff) {
        super(name, price, discountable);
        this.percentOff = percentOff;
    }
    getSalePrice() {
        if (super.isDiscountable()) {
            console.log(`${this.name} is on sale!`)
            return this.price - (this.price * this.percentOff / 100);
            // return this.price * ((100 - this.percentOff) / 100);
        } else {
            console.log(`${this.name} is not on sale.`)
            return this.price;
        };
    }
}
const product1 = new SaleProduct("Coffee Maker", 99, true, 20);
console.log(product1);
console.log(`Product Name: ${product1.name} Price: ${product1.getSalePrice()}`);

/// END OF SHARE CLASS FEATURES WITH EXTENDS ///


/// HOW TO GET, SET, AND SIMPLIFY CLASSESS ///

class Product {
    constructor(name, price, discountable) {
        this._name = name;
        this._price = price;
        this.discountable = discountable;
    };
    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name === "number") {
            return this._name;
        } else {
            return this._name = name;
        };
    }
    get price() {
        return this._price;
    };
    set price(price) {
        if (typeof price !== "number") {
            return this._price;
        } else {
            return this._price = price;
        };
    };
};
const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = "a;sldfkj";
console.log(product1.price);
product1.name = "Coffee Addict Maker";
console.log(product1.name);

/// HOW TO GET, SET, AND SIMPLIFY CLASSESS ///


/// FIX CONTEXT PROBLEMS WITH .BIND() ///

const isAuth = true;
const user = {
    favorites: []
};
class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.favoriteProduct = this.favoriteProduct.bind(this);
        this.handleFavoriteProduct = this.handleFavoriteProduct.bind(this);
    };
    handleFavoriteProduct() {
        if (isAuth) {
            setTimeout(this.favoriteProduct, 1000);
        } else {
            console.log("You must be signed in to favorite products!");
        };
    }
    favoriteProduct() {
        user.favorites.push(this.name);
        console.log(`${this.name} favorited!`)
    }
};
const product1 = new Product("Coaster", 89.99);
product1.handleFavoriteProduct();

/// FIX CONTEXT PROBLEMS WITH .BIND() ///

/// WHAT IS THE DOM? ///

const p = document.createElement('p')
p.innerHTML = "Hello world!";
document.body.append(p);
document.body.style.background = "palegoldenrod";
p.style.color = "#05f";
p.addEventListener("click", () => console.log("clicked"));

/// END OF WHAT IS THE DOM? ///


/// GET SINGLE AND MULTIPLE ELEMENTS ///

const el = document.getElementById("home");
console.log(el);
const links = document.querySelectorAll("a");
console.log(links);
links.forEach(link => console.log(link));
const link = document.querySelector('a'); // RETURNS FIRST RESULT //
console.log(link);
const links = document.querySelectorAll("a");
links.forEach(link => {
    if (link.matches('[href="/login"')) {
        const loginLink = link;
        console.log(loginLink);
    };
});
const divs = document.getElementsByTagName('div');
console.log(divs);

/// END OF GET SINGLE AND MULTIPLE ELEMENTS ///


/// CREATING AND MODIFYING HTML ELEMENTS ///

const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = '<strong>This is new post</strong>';
// document.body.append(newPost);
const post = document.querySelector('.post')
post.prepend(newPost);
// document.body.prepend(newPost);

/// END OF CREATING AND MODIFYING HTML ELEMENTS ///


/// DYNAMICALLY ADD CSS STYLES ///

const post = document.querySelector('.post');
console.log(post.style);
post.style.display = "flex";
post.style.background = "orange";
post.style.backgroundColor = "red";
post.style.margin = '30px';
console.log(post.className);
post.classList.remove('post');
post.classList.add('post');
post.classList.toggle('post');

/// END OF DYNAMICALLY ADD CSS STYLES ///


/// UNDERSTAND AND WORK WITH EVENTS ///

const post = document.querySelector('.post');
post.addEventListener('click', event => {
    console.log(event);
    console.log(event.target);
    console.log("Do you want to edit this post?")
});
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
    post.addEventListener('click', event => {
        console.log("Do you want to edit post?")
    });
});
document.body.addEventListener('click', event => {
    if (event.target.matches('p')) {
        console.log("Do you want to edit?");
    };
});
document.body.addEventListener('click', event => {
    if (!event.target.closest('.post')) return;
    console.log("Do you want to?")
});
document.body.addEventListener('mouseover', event => {
    if (!event.target.closest('.post')) return;
    console.log("Do you want?")
});
document.body.addEventListener('mouseout', event => {
    if (!event.target.closest('.post')) return;
    console.log("Do you?")
});

/// END OF UNDERSTAND AND WORK WITH EVENTS ///
create a file
read directory contents