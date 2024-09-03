// Intersection 

// type IntersectionType = Type1 & Type2;



// type Person = {
//     name: string;
//     age: number;
//   };
  
//   type Address = {
//     street: string;
//     city: string;
//   };
  
//   type PersonWithAddress = Person & Address;
  
//   const example: PersonWithAddress = {
//     name: "John Doe",
//     age: 30,
//     street: "123 Main St",
//     city: "Anytown",
//   };
  


// Intersection wth interface

// type Person = {
//     name: string;
//     age: number;
//   };
  
//   type Address = {
//     village: string;
//     country: string;
//   };
  
//   type PersonWithAddress = Person & Address;
  
//   const example: PersonWithAddress = {
//     name: "Midhun",
//     age: 21,
//     village: "Feroke",
//     country: "India",
//   };
  



// Type Aliases

// type ID = string | number;

// let userId: ID;
// userId = "abc123";  
// userId = 123;  


// Type Assertions 

// let someValue: any = "This is a string";
// let strLength: number = (someValue as string).length;



// Enums

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
//   }
  
//   let move: Direction = Direction.Up; 
  


// Discriminated Unions

// type Square = {
//     kind: "square";
//     size: number;
//   };
  
//   type Circle = {
//     kind: "circle";
//     radius: number;
//   };
  
//   type Shape = Square | Circle;
  
//   function getArea(shape: Shape): number {
//     switch (shape.kind) {
//       case "square":
//         return shape.size * shape.size;
//       case "circle":
//         return Math.PI * shape.radius * shape.radius;
//     }
//   }
  


// Generics

// function identity<T>(arg: T): T {
//     return arg;
//   }
  
//   let result = identity<string>("Hello");
  