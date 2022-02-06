var js = require('./userlist.json');


for (let i = 0; i < js.length; i++) {
  if (js[i].classes.includes("cs24")) {
    console.log(`${i} name:${js[i].name}, email:${js[i].email}`);
  }
}
