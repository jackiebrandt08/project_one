{"filter":false,"title":"main.js","tooltip":"/assignment-1/public/javascripts/main.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["var myApp = angular.module('myApp', ['ngRoute']);","","myApp.config(function ($routeProvider) {","  $routeProvider","    .when('/', {templateUrl: 'partials/home.html'})","    .when('/login', {","      templateUrl: 'partials/login.html',","      controller: 'loginController',","      access: {restricted: false}","    })","    .when('/logout', {","      controller: 'logoutController',","      access: {restricted: true}","    })","    .when('/register', {","      templateUrl: 'partials/register.html',","      controller: 'registerController',","      access: {restricted: false}","    })","    .when('/one', {","      template: '<h1>This is page one!</h1>',","      access: {restricted: true}","    })","    .when('/two', {","      template: '<h1>This is page two!</h1>',","      access: {restricted: false}","    })","    .otherwise({redirectTo: '/'});","});","","","myApp.run(function ($rootScope, $location, $route, AuthService) {","  $rootScope.$on('$routeChangeStart', function (event, next, current) {","    ","    console.log(next);","    ","    if (next.access.restricted && AuthService.isLoggedIn() === false) {","      $location.path('/login');","    }","  });","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":221,"scrollleft":0,"selection":{"start":{"row":40,"column":3},"end":{"row":40,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1461969117061,"hash":"bbd6a05cdd78ac99a2de6997f9029ffccb7b0a83"}