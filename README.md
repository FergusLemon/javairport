# Javairport
A console based program written in Javascript as a practice aide for the Javascript language, which formed part of the Makers Acadmey course (Week 5). The program consists of three objects - Airport, Plane and Weather.  An airport can clear a plane for take off and landing when the weather is calm but not when it is stormy.  Various errors will be thrown for edge cases such as an airport trying to clear a plane for take off when it is already flying, as shown in the code examples below.

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

### License
MIT (c) 2018 Fergus Lemon

See `MIT.LICENSE` for more detail.
