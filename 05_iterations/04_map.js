const myObject = {
    js: 'javascripts',
    cpp : 'C++',
    rb: 'ruby'
}

//NOTE - here we know about the FOR in loop

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    }
