"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// Make a GET request
axios_1.default.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
    console.log('User Data:', response.data);
})
    .catch(function (error) {
    console.error('Error:', error.message);
});
