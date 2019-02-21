angular.module('myApp',["ngSanitize"]);
angular.module("myApp").directive('queryBuilder', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            group: '='
        },
        templateUrl: '/query-builder.tpl.html',
        compile: function (element, attrs) {
            var content, directive;
            content = element.contents().remove();
            return function (scope, element, attrs) {
                scope.operators = [
                    { name: 'AND' },
                    { name: 'OR' }
                ];

                scope.fields = [
                    { name: 'user.screen_name' },
                    { name: 'user.id' },
                    { name: 'text' },
                    { name: 'timestamp_s' },
                    { name: 'entities.hashtags.text' }
                ];

                scope.conditions = [
                    { name: "equals" },
                    { name: "in" },
                    //{ name: "or" },
                    //{ name: "any" },
                    { name: "between" },
                    //{ name: "betweenWithOpenIntervals" },
                    { name: "lt" },
                    { name: "gt" },
                    { name: "lte" },
                    { name: "gte" }
                ];

                scope.addCondition = function () {
                    scope.group.rules.push({
                        condition: scope.conditions[0].name,
                        field: scope.fields[0].name,
                        data: ''
                    });
                };

                scope.removeCondition = function (index) {
                    scope.group.rules.splice(index, 1);
                };

                scope.addGroup = function () {
                    scope.group.rules.push({
                        group: {
                            operator: scope.operators[0].name,
                            rules: []
                        }
                    });
                };

                scope.removeGroup = function () {
                    "group" in scope.$parent && scope.$parent.group.rules.splice(scope.$parent.$index, 1);
                };

                directive || (directive = $compile(content));

                element.append(directive(scope, function ($compile) {
                    return $compile;
                }));
            }
        }
    }
}]);