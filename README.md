# Valify

Validates data to easy and clean way.

<a href="https://travis-ci.org/fabioricali/Valify" target="_blank"><img src="https://travis-ci.org/fabioricali/Valify.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## ***This project is still under development!***

### Installation
```
npm install --save valify
```

### Basic usage
```javascript
const Valify = require('valify');

// Define a model
const userModel = Valify({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: string,
        required: true
    },
    role: {
        type: 'string',
        default: 'editor'
    },
    createdAt: {
        type: 'date',
        default: new Date()
    }
});

// A data object
const data = {
    firstName: 'Mike'
};

// Validate userModel
try {
    userModel(data);
} catch(e) {
    console.log(e.message);
}
```

#### Using promise
```javascript

// Define a model
const userModel = Valify({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: string,
        required: true
    }
}, {
    usePromise: true
});

// A data object
const data = {
    firstName: 'Mike'
};

// Validate userModel
userModel(data).then(()=>{
    console.log('ok');
}).catch(e => {
    console.log(e);
    // An object like below
    /*
        {
            last: 'lastName is required',
            fields: [{field: 'lastName', message: 'lastName is required'}]
        }
     */
});

```

#### Manipulate data
```javascript

// Define a model
const userModel = Valify({
    firstName: {
        type: 'string',
        required: true,
        convert: (value) => {
            return value.toUpperCase();
        }
    },
    lastName: {
        type: string,
        required: true,
        convert: (value) => {
            return value.toUpperCase();
        }
    }
});

// A data object
const data = {
    firstName: 'Mike',
    lastName: 'Ricali'
};

userModel(data);

console.log(data.firstName, data.lastName); //=> MIKE RICALI 
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/Valify/blob/master/CHANGELOG.md">here</a>

## License
Valify is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>