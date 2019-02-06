function findNames(name){
  nameList.forEach(function(child){
    if(child.name == name){
      var allNames = child.names;
      allNames.push(name);
      return allNames;
    }
    else return [name];
  });
}

var nameList  = [
  {name:"S1SAO", names:["SAO","Student Activity Office"]},
  {name:"W1Seto", names:["Seto","Seto Hall"]},
  {name:"C102", names:["Orchestra Room","Orc Room"]},
  {name:"W1Kozuki", names:["Football Field","Soccer Field","Kozuki Stadium"]},
  {name:"C101", names:["Chorus Room","Choir Room"]},
  {name:"G1Pool", names:["Dillingham Pool","Pool"]},
  {name:"C103", names:["Band Room"]},
  {name:"G202", names:["Wrestling Room"]},
  {name:"G203", names:["Dance Room"]},
  {name:"C1Practice1", names:["Practice Room 1","Practice 1"]},
  {name:"C1Practice2", names:["Practice Room 2","Practice 2"]},
  {name:"C1Practice3", names:["Practice Room 3","Practice 3"]},
  {name:"C1Practice4", names:["Practice Room 4","Practice 4"]},
  {name:"C1Practice5", names:["Practice Room 5","Practice 5"]},
  {name:"C1Practice6", names:["Practice Room 6","Practice 6"]},
  {name:"S1SCIL1", names:["SCIL1","Fab Lab", "Fabrication Lab", "I-Lab", "I lab"]},
  {name:"S2Libary", names:["Library"]},
  {name:"S2Archives", names:["Archives"]},
  {name:"S3SCIL3", names:["SCIL3","Sullivan Third Floor", "Leadership and Service", "Sullivan 3rd Floor"]},
  {name:"S3SCIL4", names:["SCIL4","Sullivan Fourth Floor", "Science and Technology", "Rooftop Garden", "Sullivan 4th floor"]},
  {name:"S3Labratory", names:["Labratory","Wetlab", "Wet Lab"]},
  {name:"S3DDS", names:["Conference 1","Conference 2", "Sullivan Fourth Floor Conference Room", "DDS", "Digital Design Studio"]},
  {name:"S4SCSC", names:["CSC","Computer Science Center", "Education Innovation Lab"]},
  {name:"S3Conference", names:["Sullivan Conference Room","Sullivan Conference"]},
  {name:"S3RL", names:["Sullivan 3 Robotics Lab","Robotics Lab", "Carol Wae Sue Seto Digital Media Center"]},
  {name:"G1LG", names:["Lower Gym","LG"]},
  {name:"G2UG", names:["UG","Upper Gym", "Gymnasium"]},
  {name:"I109", names:["Writing Center"]},
  {name:"", names:["",""]},
]
