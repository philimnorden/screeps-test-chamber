var buildHelper ={

    /** @param {RoomPosition} pos1 From
     ** @param {RoomPosition} pos2 To
     ** @param {string} roomName
     */
    CanBuildRoad: function(pos1, pos2, roomName) {
        var path = PathFinder.search({pos: new RoomPosition(pos1.x, pos1.y, roomName), range: 1}, 
                                     {pos: new RoomPosition(pos2.x, pos2.y, roomName), range: 1});
    
        return !path.incomplete;
    
    },
    
    BuildRoad: function (pos1, pos2, roomName) {
        
        if(!buildHelper.CanBuildRoad(pos1, pos2, roomName)){
            console.log("Called BuildRoad(" + pos1 + " - " + pos2 + " - " + roomName + ") but no path to goal is possible");
            return;
        }
    
        console.log("Build Road from " + pos1.x + pos1.y + roomName + ' to ' + pos2.x + pos2.y + roomName);
        
        const from = new RoomPosition(pos1.x, pos1.y, roomName);
        const to = {pos: new RoomPosition(pos2.x, pos2.y, roomName), range: 1};
    
        var pathObject = PathFinder.search(from, to ); 
    
        for(var i in pathObject.path){
            var pos = pathObject.path[i];
            Game.rooms[roomName].createConstructionSite(pos.x, pos.y, STRUCTURE_ROAD);
            console.log(pos + pos.x + ' - ' + pos.y);
        }
    },

    isRoadBuild: function(pos1, pos2, roomName){
        var path = PathFinder.search(new RoomPosition(pos1.x, pos1.y, roomName), 
                          new RoomPosition(pos2.x, pos2.y, roomName));
    },
    
    CanBuildRoadToClosestEnergySource: function() {
    
    }
}

module.exports = buildHelper;