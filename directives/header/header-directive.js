(function() {
 	'use strict';

/* Directive */
angular
	.module('bankCR')
	.directive('headerMain', headerMain);

	function headerMain() {
		function headerMainCtrl(){
		}

		return{
			restrict: 'E',
			templateUrl: 'directives/header/header.tpl.html',
			controller: headerMainCtrl,
			controllerAs: 'ctrl'
		};
	}/* / Directive */

})();
