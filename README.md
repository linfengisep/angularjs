1.module

2.controller: set init state of $scope,add behavior to $scope;
MVVM
M:model->model to store data
V:View->html
VM:->controler

3.$scope-> current instance
all variables and methodes inside the $scope are avaiable inside the html controller scope.

4.attributes, behind the scene
ng-app, or ng-controller are attributes recoginzed by angular-js, where come from all the binding, methods calling.


5.DI/Inversion of control

6.minification -> uglyfy
minification: process of reducing the size of JS.
using string to against problem caused by minification
DI in Angular needs to be minification proof
two ways out:
1.inline array with function as last element,
2.Attach $inject property to the function object,


7.digest cycle
In angular context($scope)
Watchers check the property, at least twice, one for changes, until nothing changes
for each property reflecting in html, angular created a watcher for it;

8.one time binding:{{::prop}}
once the binding property is reflecting in view, its watcher is detached.

9..service(), .factory(), .provider(),.filter()
.service():singleton
.factory():more than one instance of service is possible
.privder(),
.config(), get called before any other services, factories, or controller is instantiated.

10.custom filter

11.$scope
$scope vs this vs ctl instance?

scope inheritence, scope as syntaxe
inner scope controller inheritance the outside controller.

12.controller
constroller's responsibilities:
pour: set up inital state of $scope;add behavior to the $scope
con: handle business logic directly; share code or state across controllers


13.service
.factory()
.provider()


14.directive
step 1.define the DDO(directive definition object)
step 2.passing param, one way:>, two way: =,


@:binding parent prop to child directive
=:bidirectional binding, parent-> child, child-> parent;
=?:optional
>
&:passing reference;


restrict: default 'AE', A for attribute, like ng-repeat, E for element, like <list-item></list-item>.

14.Link
allow to get a reference of scope, element and controller;



notices:
1.charging images, with <img src="images/{{userName}}.png">, since when loading the images, at that moment, the controller is not finished buiding yet, error would be throwed out.
solution: ng-src is the cure, <img ng-src="images/{{userName}}.png">









