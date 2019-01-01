# Javairport
A console based program written in Javascript as a practice aide for the Javascript language, which formed part of the Makers Acadmey course (Week 5). The program consists of three objects - Airport, Plane and Weather.  An airport can clear a plane for take off and landing when the weather is calm but not when it is stormy.  Various errors will be thrown for edge cases such as an airport trying to clear a plane for take off when it is already flying, as shown in the code examples below.  This exercise was done purely for the purposes of understanding basic syntax and conventions and no attempt has been made to make the code secure or introduce privacy into the object's methods.

### Installation

- [ ] **Step 1** - Clone this repository by copying the link available at the top of this webpage in the green button labelled 'Clone or Download'. 
- [ ] **Step 2** - Open up a Terminal window (Mac OS) and run `git clone <link>` where `<link>` is what you copied in the previous step.
```
>> git clone https://github.com/FergusLemon/javairport.git
```
- [ ] **Step 3** - `cd` into the cloned directory.
- [ ] **Step 4** - Run the command `open SpecRunner.html` which will open a webpage in your default browser and show the tests passing.  Open up a console in the browser from this webpage and you will be able to instatitate objects and play with the functionality of the program as outlined in the code examples section below.

### Tests
Unit tests can be located in the `spec` directory and can be run from the `javairport` directory using the command `open SpecRunner.html`.

### Technologies Used
Written in Javascript.

Tests run using Jasmine.

### Code Examples
Open up a console in your default browser, as explained in installation step 4 above.  All references to `>` below are to the console prompt.
Create a plane and confirm that it is on the ground:
```
> plane = new Plane();
Plane {inFlight: false, location: "Depot"}
> plane.isFlying();
false
```
Create an airport, by default it will have a capacity of 100, there will be no planes at the airport and a new weather object will be instantiated:
```
> airport = new Airport();
Airport {weather: Weather, DEFAULT_CAPACITY: 100, capacity: 100, planes: Array(0)}
```
Check the weather at the airport, it can be either calm or stormy with a tendency to be calm just over 80% of the time:
```
> airport.weather.isStormy();
false
```
For its maiden flight the plane will take off from the depot:
```
> plane.takeOff(plane.location);
undefined
> plane.isFlying();
true
```
Land the plane at the airport:
```
> airport.landPlane(plane);
undefined
> plane.isFlying();
false
> plane.getLocation();
Airport {weather: Weather, DEFAULT_CAPACITY: 100, capacity: 100, planes: Array(1)}
> airport.planes;
[Plane]
```
Attempt to land the plane at the airport it is already at:
```
> airport.landPlane(plane);
Uncaught Error: This plane is already on the ground.
```
Attempt to clear the plane for take off from a different airport, which is also smaller with a capacity of 20:
```
> anotherAirport = new Airport(undefined, 20);
Airport {weather: Weather, DEFAULT_CAPACITY: 100, capacity: 20, planes: Array(0)}
> anotherAirport.clearForTakeOff(plane);
Uncaught Error: This plane is at a different location.
```

### License
MIT (c) 2018 Fergus Lemon

See `MIT.LICENSE` for more detail.
