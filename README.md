# ng-loading-animator (Bootstrap)
A basic Angular directive for animating a button when data is being loaded.
### Version
0.1
### Requirements

ng-loading-animator requires a few dependecies to be present in order to work properly:

* [AngularJS]
* [jQuery]
* [Twitter Bootstrap]

### Usage

This is the most basic way of using ng-loading-animator
```
<button class="btn btn-primary" loading-animator observe="item" ng-click="someMethod()">Save</button>
```
To make any button into a loading animated button, simply add `loading-animator` as an attribute to your html element.

In order to see when the data is loaded you will have to pass your data object into the `observer` attribute.

### Todos

 - Write Tests
 - Make settings configurable more easily
 - Create some way to respond to the loading timeout event
 - Localozation
