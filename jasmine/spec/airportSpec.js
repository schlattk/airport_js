// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function(){

  it("can ask a plane to land", function(){
    airport = new Airport();
    expect(airport.land).toBeDefined();
  });
  it("confirms when a plane has landed", function(){
    airport = new Airport();
    plane = new Plane();
    spyOn(airport,'isStormy').and.returnValue(false);
    expect(airport.land(plane)).toContain("plane has landed");
  });
  it("knows that isStormy returns either true or false",function(){
    airport = new Airport();
    expect(typeof airport.isStormy()).toEqual('boolean');
  });
  it("should have an array of planes", function(){
    airport = new Airport();
    expect(airport.planes).toBeDefined();

  });
  it("should throw an error if planes want to take off when it's stormy",function(){
    airport = new Airport();
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane);}).toThrow("Can't take off when it's stormy");
  });
  it("should throw an error if planes want to land when it's stormy",function(){
    airport = new Airport();
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.land(plane);}).toThrow("Can't land when it's stormy");
  });
  it("should contain planes that have landed", function(){
    airport = new Airport();
    plane = new Plane();
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });
  it("should have a maximum capacity",function(){
    airport = new Airport(5);
    expect(airport.capacity).toBe(5);
  });
  it("should prevent landing if airport is full", function(){
    airport = new Airport(1);
    boeing = new Plane();
    airbus = new Plane();
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(boeing);
    expect(function(){airport.land(airbus);}).toThrow("airport is full!");
  });
  it("should not contain planes that have taken off", function(){
    airport = new Airport(5);
    boeing = new Plane("boeing");
    airbus = new Plane("airbus");
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(boeing);
    airport.land(airbus);
    airport.takeOff(airbus);
    expect(airport.planes).toContain(jasmine.objectContaining(boeing));
    expect(airport.planes.length).toBe(1);
  });


});
