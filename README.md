## Overview ##

Airport challenge implemented using Javascript prototype method

## User Stories ##

As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

## Console Commands ##

- Paris = new Airport(2);
- Airport {planes: Array(0), capacity: 2}

- boeing = new Plane('boeing')
- Plane {name: "boeing"}
- airbus = new Plane('airbus')
- Plane {name: "airbus"}
- spitfire = new Plane('spitfire')
- Plane {name: "spitfire"}

- Paris.land('boeing');
- airport.js:9 Uncaught Can't land when it's stormy

- Paris.land('boeing');
- "plane has landed"
- Paris.land('airbus');
- "plane has landed"
- Paris.land('spitfire');
- airport.js:12 Uncaught airport is full!

- Paris.planes;
- (2) ["boeing", "airbus"]

- Paris.takeOff('boeing');
- airport.js:22 Uncaught Can't take off when it's stormy
- Paris.takeOff('boeing');
- "plane has taken off"

- Paris.planes;
- ["airbus"]
