// const fs = require("fs");

// // const data = fs.readFileSync("file.txt");
// // console.log(data.toString());

// // const data1 = fs.writeFileSync("file.txt", "Hello, World!");
// // console.log("File written successfully");

// // const data2 = fs.appendFileSync("file.txt", " class is going on");
// // console.log("Data appended successfully");

// // fs.mkdir('dir1', (err) => {
// //     if(err) {
// //         console.log(err);
// //     } 
// //     console.log("Directory created successfully");
// // });

// // fs.rmdir('dir1', {recursive : true}, (err) => {
// //   if(err) {
// //       console.log(err);
// //   } 
// //   console.log("Directory deleted successfully");
// // });

// // fs.rename('file.txt', 'new-file.txt', (err) => {
// //   if(err) {
// //       console.log(err);
// //   } 
// //   console.log("File renamed successfully");
// // });

// // const p = '/home/medha/node-practice/new-file.txt';
// const path = require("path");

// // const dirname = path.dirname(p);

// // const extension = path.extname(p);

// // console.log(dirname);
// // console.log(extension);

// const folder = '/home/medha/node-practice/dir1';

// const file = '/home/medha/node-practice/new-file.txt';

// function copyFile(source, destination){
//   const fileName = path.basename(source);
//   const destDir = path.join(destination, fileName);
//   fs.copyFile(source, destDir, (err) => {
//     if(err) {
//         console.log(err);
//     } 
//     console.log("File copied successfully");
//   });
// }


// copyFile(file, folder);

// fs.unlinkSync('new-file.txt');

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// // Function to read the index.html file
// const readFile = (filePath, callback) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       console.error(`Error reading file ${filePath}:`, err);
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
  
//   if (req.url === "/login") {
//     const filePath = path.join(__dirname, "login.html");
//     readFile(filePath, (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.write("Internal Server Error");
//       } else {
//         res.write(data);
//       }
//       res.end();
//     });
//     // res.end();
//   } else {
//     const filePath = path.join(__dirname, "index.html");
//     readFile(filePath, (err, data) => {
//       if (err) {
//         res.statusCode = 500;
//         res.write("Internal Server Error");
//       } else {
//         res.write(data);
//       }
//       res.end();
//     });
//   }
// });

// const port = 3000;
// const host = "localhost";

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

const express = require('express')
const app = express();

app.use(express.json());  //middleware
app.use(middleware);

let courses = [
  {id : 1, name: "java"},
  {id : 2, name: "javascript"},
  {id : 3, name: "python"}
]

app.get('/courses', (req, res) =>{
  res.json(courses);
});

app.listen(3000, () => {
  console.log("server started");
})

app.post('/courses', (req, res) =>{
  console.log(req.body);
  let singleCourse = {
    id : courses.length + 1,
    name : req.body.name
  }
  courses.push(singleCourse);
  res.send(courses);
})

app.put('/courses/:id', (req, res) =>{
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send("Course not found");
  }
  course.name = req.body.name;
  res.send(course);
});

app.delete('/courses/:id', (req, res) =>{
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if(!course) {
    return res.status(404).send("Course not found");
  }
  let index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function middleware(req, res, next){
  console.log("called");
  console.log(req.method);
  console.log(req.ip);
  console.log(req.hostname);
  console.log(new Date());
  next();
}





