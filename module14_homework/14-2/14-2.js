const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);
const list = data.list;

const result = [];

list.forEach(item => {
    const listName = item.name;
    const listAge = item.age;
    const listProf = item.prof;

    result.push({
        name: listName,
        age: Number(listAge),
        prof: listProf,
    });
});

console.log("list: ", result);