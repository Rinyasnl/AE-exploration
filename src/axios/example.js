"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axios_1 = require("axios");
var ExampleComponent = function () {
    var _a = (0, react_1.useState)(null), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        // Make a GET request to an API endpoint
        axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
            // Handle the successful response
            setData(response.data);
        })
            .catch(function (error) {
            // Handle errors
            console.error('Error fetching data:', error);
        });
    }, []);
    return Example;
    Component < /h1>;
    {
        data && Data;
        from;
        API: /h2>
            < pre > { JSON: JSON, : .stringify(data, null, 2) } < /pre>
            < /div>;
    }
};
/div>;
;
;
exports.default = ExampleComponent;
