angular.module("tiy-ng-serviceDemo")
    .controller("homeCtrl", function ($scope,$log) {

      $scope.people = [
      {
        name: "Margaret Godowns",
        photo: "http://gravatar.com/avatar/6bb1a65243e3f95333f5cec9e10cf93b?s=512",
        lifeStory: "Loves to travel. Super chill...charles gets on her nerves sometimes, but he's a great climber."
      },
      {
        name: "Andrew Levy",
        photo: "http://static01.mediaite.com/med/power-grid/images/profiles/1478/andy_levy_x200.jpg",
        lifeStory: "Aged so fast, life is short."
      },
      {
        name: "Chris Otten",
        photo: "https://lh4.googleusercontent.com/-9QIWJ26kG4I/AAAAAAAAAAI/AAAAAAAAAck/3nMxg3lyweA/photo.jpg",
        lifeStory: "Boom, it happened!"
      },
      {
        name: "Chinenyem Nwadiugwu",
        photo: "http://ww4.hdnux.com/photos/10/73/74/2342671/7/628x471.jpg",
        lifeStory: "FASHION, that is all!"
      }
      ];

        $scope.greeting = "Angular Services Demo";
        $log.info("home view loaded");
    });
