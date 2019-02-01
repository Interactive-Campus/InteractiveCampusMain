function findNames(name){
  nameList.forEach(function(child){
    if(child.name == name){
      var allNames = child.names.push(name);
      return allNames;
    }
  });
}

var nameList  = [
  {name:"S1SAO", names:["SAO","Student Activity Office"]},
  {name:"W1Seto", names:["Seto","Seto Hall"]},
  {name:"C102", names:["Orchestra Room","C102"]},
  {name:"", names:["",""]},
]
