// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
    .controller('mainController', function($scope, $firebase) {

        // connect to firebase
        var ref = new Firebase("https://flickering-heat-3481.firebaseio.com/");
        var fb = $firebase(ref);

        // function to set the default data
        $scope.reset = function() {

            fb.$set({
                monday: {
                    name: 'Monday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        0110: {
                            time: '11:00am',
                            booked: false
                        }
                    }
                },
                tuesday: {
                    name: 'Tuesday',
                    slots: {
                        0900: {
                            time: '9:00am',
                            booked: false
                        },
                        0110: {
                            time: '11:00am',
                            booked: false
                        }
                    }
                }
            });

        };



        // sync as object
        var syncObject = fb.$asObject();

        // three way data binding
        syncObject.$bindTo($scope, 'days');
    });