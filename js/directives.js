angular.module("app.directives", [])
    .directive("myDirective", function () {
        return {
            restrict: "EA",
            templateUrl: "views/myDirective.html"
        };
    })
    .directive("profileCard", function () {
      return {
        restrict: "E",
        scope: {
          name: "@",
          photo: "@",
          bio: "@",
          background: "@"
        },
        templateUrl: "views/profileCard.html",
        link: function (scope, element, attrs) {
          var background = attrs.background
          element.on("click", function (e) {
            $(this).find("p").css("background", background);
          })

        }

      };
    });






    // comment
