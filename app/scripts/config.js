/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
	
    $stateProvider

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard_prescriber.html",
            data: {
                pageTitle: 'Dashboard',
            }
        })
		
		// Dashboard - Main page
        .state('patients_listing', {
            url: "/patients",
            templateUrl: "views/patients_listing.html",
            data: {
                pageTitle: 'Patients Listing',
            }
        })
		
		// Dashboard - Main page
        .state('header', {
            url: "/header",
            templateUrl: "views/common/eirenerx_header.html",
            data: {
                pageTitle: 'Header',
            }
        })
}

angular
    .module('homer')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });