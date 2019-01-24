function Campus (path, position){
  this.modelPath = path;
  this.campusPositon = position;
}

Campus.prototype = {
  constructor:Campus,

  init:function(){
    loader.load( modelPath, function ( gltf )
    {
      clips = gltf.animations;
      gltf.scenes.forEach(function (curScene){
        var buildingGroup = new THREE.Group();
        var sceneLength = curScene.children.length;

        /*
        *Each mesh has a prefix indicating the building it is a part of and the floor
        *e.g. N2 means Nangaku second floor
        *Each room is named after its room number e.g. N203 or N204
        *Each non room mesh is named with its prefix and followed by part
        */
        for(var i = 0; i < sceneLength; i++){
          //tests if the mesh is a room or just an aesthetic part and then adds and object to describe ot
          if(curScene.children[0].name.slice(2, name.length - 3) != 'part'){
            curScene.children[0].userData = {alreadyUp:false, room:true};
          }
          else {curScene.children[0].userData = {alreadyUp:false, room:false};}

          buildingGroup.add(curScene.children[0]);
        }
        //Adds Shadows to each mesh in the group
        buildingGroup.children.forEach( function (child){
          if (child instanceof THREE.Mesh){
            child.receiveShadow = true;
            child.castShadow = true;
          }
        });

        //adds all groups to a parent group of whole campus
        campusGroup.add(buildingGroup);
        campusGroup.position.copy(campusPosition);
      });
    });
  },


}
