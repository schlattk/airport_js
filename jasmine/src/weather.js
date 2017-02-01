Weather = function() {
};

Weather.prototype.forecast = function(){
    var meteo = [];
    var met;
    meteo = ["stormy","sunny","sunny","sunny"]
    met = meteo[Math.floor(Math.random() * meteo.length)];
    return met;
  };
