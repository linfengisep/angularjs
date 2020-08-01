1.module

2.controller: set init state of $scope,add behavior to $scope;
MVVM
M:model->model to store data
V:View->html
VM:->controler

3.$scope-> current instance

4.attributes, behind the scene

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

9..service(), .factory(), .provider()
.service():singleton
.factory():more than one instance of service is possible
.privder(),
.config(), get called before any other services, factories, or controller is instantiated.

10.directive
directive scope belongs to the controller scope which wrapped outside of it.
restrict: A for attribute like ng-repeat, E for element like <filter-top>
=: two ways binding
@: one ways binding, from parent to child





