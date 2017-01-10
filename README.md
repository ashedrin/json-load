### Simple json file loader and parse to js object

#### Install

`npm install json-as-js`

#### Use

`var load = require('json-as-js'').load;`

`var parsedJsObject = load('./path/to-json-file.json');`

#### Use es2015

`const { load } from 'json-as-js';`

`const parsedJsObject = load('./path/to-json-file.json');`

#### Run test

`npm test`
