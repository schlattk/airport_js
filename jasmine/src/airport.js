Airport = function(capacity) {
  this.planes = [];
  this.capacity = capacity;
};

  Airport.prototype.land = function(plane) {
  var condition = this.isStormy();
  if (condition == true){
    throw ("Can't land when it's stormy")
  }
  else if(this.planes.length === this.capacity){
    throw ("airport is full!")
  }
  else{
    this.planes.push(plane)
    return "plane has landed";}
  };

  Airport.prototype.takeOff = function(plane) {
    var condition = this.isStormy();
    if ( condition == true) {
    throw ("Can't take off when it's stormy");
    }
    else{
      var index = this.planes.indexOf(plane);
      this.planes.splice(index,1);
    return "plane has taken off"}
  };

  Airport.prototype.isStormy = function() {
    var weather = new Weather();
    var condition = weather.forecast();
    if (condition == "stormy"){
      return true
    }
    else{return false};

};
