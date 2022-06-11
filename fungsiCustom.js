// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const fs = require("fs");
const bacaData = (CallbackFn) => {
  fs.readFile(file1, "utf-8", (err, data1) => {
    if (err) {
      CallbackFn("Terjadi error" + err, null);
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        CallbackFn("Terjadi error" + err, null);
      }

      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          CallbackFn("Terjadi error" + err, null);
        }
        const result = [];
        let result1 = JSON.parse(data1).message.slice(5);
        result.push(result1);
        let result2 = JSON.parse(data2);
        result2.forEach((element) => {
          result.push(element.message.slice(5));
        });
        let result3 = JSON.parse(data3);
        result3.forEach((element) => {
          result.push(element.data.message.slice(5));
        });
        CallbackFn(err, result);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
