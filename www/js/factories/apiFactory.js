/**
 * Created by Jessie on 15/06/2016.
 * @author Jessie Jadas
 */
appChuipala.factory('apiFactory', function($http, CONSTANT_USER) {
    //var host = "http://localhost:52164";
    var host = "http://chuipala-ws.azurewebsites.net";
    return {
        /**
         * Asks for authentication
         * @param username is an email
         * @param password
         * @returns authentication data if success (token)
         */
        authenticate: function(username, password) {
            var data = "grant_type=password&username="+username+"&password="+password;
            console.log(data);
            return  $http({
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                url: host + '/token', // url auth
                responseType:'json',
                data: data
            })
        },
        getUserInfo: function() {
            return  $http({
                method: 'GET',
                url: host + '/api/UsersInfo', // url auth
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                //data:
            })
        },
        getDaysClasses: function () {
            return  $http({
                 method: 'GET',
                 url: host + '/api/DaysClasses',
                 headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                 },
                //data:
            })
        },
        getClassEvents: function (id) {
            return  $http({
                method: 'GET',
                url: host + '/api/ClassEvents/' + id,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                //data:
            })
        },
        getMyAbsences: function () {
            return  $http({
                method: 'GET',
                url: host + '/api/LastAbsences',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                //data:
            })
        },
        getMyDelays: function () {
            return  $http({
                method: 'GET',
                url: host + '/api/LastDelays',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                //data:
            })
        },
        getAbsenceInfo: function (id) {
            return  $http({
                method: 'GET',
                url: host + '/api/FullAbsencesInfo/' + id,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                // data:
                })
        },
        getDelayInfo: function (id) {
             return  $http({
                 method: 'GET',
                 url: host + '/api/FullDelaysInfo/' + id,
                 headers: {
                     'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                 },
                 //data:
             })
         },
        createAbsence: function (begin, end, reason) {
            return  $http({
                method: 'POST',
                url: host + '/api/NewAbsence',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                data: {
                    begin : begin, // '2016-06-17 09:00'
                    end : end, // '2016-06-17 12:30'
                    reason : reason // 'Malade'
                },
            })
        },
        createDelay: function (arrival, reason) {
            var data = {
                arrival : arrival, // '2016-06-17 09:15'
                reason : reason // 'Problème de transport'
            };
            console.log(data);
            return  $http({
                method: 'POST',
                url: host + '/api/NewDelay',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                data: data
            })
        },
        updateAbsence: function (id, begin, end, reason) {
            return  $http({
                method: 'POST',
                url: host + '/api/UpdateAbsence',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                data: {
                    id : id, // 5
                    begin : begin, // '2016-06-17 09:00'
                    end : end, // '2016-06-17 12:30'
                    reason : reason // 'Malade'
                },
            })
        },
        updateDelay: function (id, arrival, reason) {
            return  $http({
                method: 'POST',
                url: host + '/api/UpdateDelay',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + CONSTANT_USER.token
                },
                data: {
                    id: id, // 5
                    arrival : arrival, // '2016-06-17 09:15'
                    reason : reason // 'Problème de transport'
                }
            })
        }
    }
});