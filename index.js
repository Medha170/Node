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

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  
  if (req.url === "/login") {
    res.write("<html> <head> <title> node js class </title> </head> <body> <h1> Hello, login! </h1> </body> </html>");
  } else {
    res.write("<html> <head> <title> node js class </title> </head> <body> <h1> Hello, World! </h1> </body> </html>");
  }
  
  res.end();
});

const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});


