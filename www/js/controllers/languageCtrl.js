/**
 * Created by Jessie on 04/06/2016.
 * @author Jessie
 */

appChuipala.controller('LanguageCtrl', function($scope, $translate, V_LANGUAGE, $ionicLoading, $state, $ionicHistory) {

    $scope.ChangeLanguage = function(language){

        if(language != V_LANGUAGE.language){
            $ionicLoading.show({
                template: V_LANGUAGE.language.toUpperCase() + " -> " + language.toUpperCase()
            });

            console.log(V_LANGUAGE);
            V_LANGUAGE.language = language;

            $translate.use(language).then(function(data){
                console.log("SUCCESS -> " + data);
                setTimeout(function () {
                    $scope.$apply(function () {
                        $ionicLoading.hide();
                        $state.go($ionicHistory.currentStateName(), $stateParams, {reload: true});
                    });
                }, 1000);
            }, function(error) {
                console.log("ERROR -> " + error);
            });
        }else{
            // Chosen language is already applied
        }
    }

});
