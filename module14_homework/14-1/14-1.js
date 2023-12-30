const parser = new DOMParser();

const xmlString =  `
  <list> 
    <student> 
      <name lang="en"> 
        <first>Ivan</first> 
        <second>Ivanov</second> 
      </name> 
      <age>35</age> 
      <prof>teacher</prof> 
    </student> 
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list> 
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");


const list = [];

studentNode.forEach(item => {
  const nameNode = item.querySelector("name");  
  const secondNode = item.querySelector("second");
  const firstNode = item.querySelector("first");
  const nameAttr = nameNode.getAttribute("lang");
  const ageNode = item.querySelector("age");
  const profNode = item.querySelector("prof");
  
  list.push({
      name: firstNode.textContent+' '+secondNode.textContent,
      age:  Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: nameAttr,
  })
});

console.log(list);

