var app = angular.module('app', ['ui.router'])

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				controller: 'myCtrl',
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('search', {
				controller: 'myCtrl',
				url: '/search',
				templateUrl: 'views/search.html'
			})
			.state('characterImg', {
			  controller: 'myCtrl',
			  url: '/img',
			  templateUrl: 'views/characterImg.html'
			})
			$urlRouterProvider.otherwise('home');
	}
])


app.controller('myCtrl',['$scope', '$rootScope', '$http', '$q', '$timeout', '$state', function ($scope, $rootScope, $http, $q, $timeout, $state) {


 var defer = $q.defer();



	toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


	$scope.fail = window.fail;
	var newNumber;
	var heroOneComic;
	$scope.heroOneComics = window.heroOneComic;
  var heroOneEvent =[];
  var heroTwoEvent = [];
	var heroOneCharacters= [];
	$scope.endDate;
$('.containProgress').hide();

var firstImg = '';
	$scope.secondImages = window.uniqueNames;

	var heroOneReturn= '';
	$scope.heroTwoComic= [];
	$scope.heroOneReturn;
  var containEvents = [
    heroOneEvent, heroTwoEvent
  ]
	var comicOneDate = [];

	$scope.heroOne = window.heroOne;
	var heroStories= [];

$scope.clear = function(){
		$('.containApp').css('height', '100vh');
		$rootScope.packery = null;
	$scope.heroOne = '';
	$scope.secondImage= [];
	$('#watcher').html('Watcher Watch');
	$('.btn').show();
$('.containProgress').hide();
$('.containSearch').show();
}
  var apiKey = '64f1f5a1ab896a13dd9c6b4009b0817e';

  	$scope.clickMe = function() {

            var heroOne = $('#firstInput').val()
						$http({
						    url: 'https://gateway.marvel.com:80/v1/public/characters?name=' + heroOne +'&limit=100&apikey='+apiKey,
						    method: "GET"
						}).then(function(response) {
							$scope.firstCall = response.data.data;
							window.heroOne = {
							id: $scope.firstCall.results[0].id,
							name: $scope.firstCall.results[0].name,
							img: $scope.firstCall.results[0].thumbnail.path + '/detail.jpg',
						description: $scope.firstCall.results[0].description,
					comics: $scope.firstCall.results[0].comics.available}

							  $.each($scope.firstCall.results[0].events.items, function(i, item){
								 heroOneEvent.push(item.name)
							 })
							 defer.resolve(response);
						}).then(function(response){
								$scope.heroOne = window.heroOne;
								$('#watcher').html($scope.heroOne.name);
											defer.resolve(response);
							})
						.then(function(response){
							$state.go('characterImg');
							defer.resolve(response);
							})
  }

$scope.secondClick = function(){


	$scope.heroOneReturn = window.heroOne;
	console.log($scope.heroOneReturn.comics)
	var endDate = $('#endDate').val();
	Date.prototype.yyyymmdd = function() {
		var mm = this.getMonth() + 1; // getMonth() is zero-based
		var dd = this.getDate();

		return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
	};

	var date = new Date();

		var startDate = $('#startDate').val();
		if (endDate<=startDate){
				 toastr.warning('Please enter a start date that is before the end date')
		}
		else if(endDate> 	date.yyyymmdd()){
			toastr.warning('The latest date that you can enter is today.' )
		}


		else{


				//reverses the oder of the Month input


			var changeDate = function(date){
				var year = date.slice(0,4);
				var month = date.slice(5,7);
				return (month + '/'+year)
			}

	var newStart = changeDate(startDate)
			var newEnd = changeDate(endDate)

			$('.btn').hide();
			$('.containSearch').hide();
			$('.containProgress').show();
			$('#startDateProgress').append(newStart);
			$('#endDateProgress').append(newEnd);

			$http({
					url: 'https://gateway.marvel.com:80/v1/public/characters/'+$scope.heroOneReturn.id +'/comics?orderBy=onsaleDate&dateRange='+startDate+'%2C'+endDate+'&limit=35&apikey='+apiKey,
					method: "GET"
			}).then(function(response) {
				$scope.secondImages =[];
				$scope.imageTitles= [];
					$scope.firstComic = response.data.data;
					if($scope.firstComic == 'undefined' || $scope.firstComic.count ==0){
						window.fail = true;
						toastr.error('Unfortunately, nothing can be found for this character in this date range.');
						$('.containProgress').hide();
						$('.containSearch').show();
							$('.btn').show();


					}
					else{
						window.fail=false;
				    window.heroOneComics = {
				        name: $scope.firstComic.results[0].name,
				        img: $scope.firstComic.results[0].thumbnail.path + '/detail.jpg',
				        name: $scope.firstComic.results[0].name,
				        id:$scope.firstComic.results[0].id
				    }
						for (var j = 0; j<$scope.firstComic.count; j++){
							$scope.secondImages.push($scope.firstComic.results[j].thumbnail.path + '/detail.jpg')
						}

						var uniqueNames = [];
						$.each($scope.secondImages, function(i, el){
    			if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
						});
							window.uniqueNames = uniqueNames;
					defer.resolve(response);
				}

				}).then(function(response){
				$http({
					url: 'https://gateway.marvel.com:80/v1/public/characters/' + $scope.heroOneReturn.id +
						'/stories?apikey='+apiKey,
						method: "GET"
				}).then(function(response){
					$scope.OneCharacter = response.data.data;
						$.each($scope.OneCharacter.results[0].events.items, function(i, item){
		          heroOneCharacters.push(item.name)
		        })
						console.log('coulnd\'t that hero.')

					}).then(function(response){
				if($scope.heroOneReturn.id == null){
					console.log('yeah')
				}
				else{


					$('#panelThree').css('background-image', 'url("' + $scope.heroTwoComic.img + '")');
					if($scope.heroOneReturn.description.length< 1){
						$('#heroOneDescription').html('it doesn\'t look like that this character has a description in Marvel\'s API...')
					}
					else{

					}
					$('#heroOneName').html($scope.heroOneReturn.name);
					for(var j = 0; j<heroOneEvent.length; j ++){

					$('#eventList').append('<li id = "'+heroOneEvent[j]+'"> '+heroOneEvent[j]+'</li>');
					}
										$state.go('search');


											$('.containApp').css('height', '100%');
										if(window.heroOne.description == ''){
											window.heroOne.description = "There is no description on Marvel's API for  "+$scope.heroOneReturn.name +". "
										}


										$scope.heroOne = window.heroOne;
									defer.resolve(response);
				}
			}).then(function(response){

			$(function () {
 var width = $(window).width();
 var height = $(window).height();
 console.log(width);
 window.resizeBy(100, 100)
 console.log($(window).width());
console.log('this resize worked')
});


defer.resolve(response);
			})
			})

}
}


}]);

app.directive('dannyPackery', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
					var testThis = $(".wrapper > div").length
            console.log('Running dannyPackery linking function!');
            if($rootScope.packery === undefined || $rootScope.packery === null){
                console.log('making packery!');
                $rootScope.packery = new Packery(element[0].parentElement, {itemSelector: '.item', gutter: 2.5,});
                $rootScope.packery.bindResize();
                $rootScope.packery.appended(element[0]);
                $rootScope.packery.items.splice(1,1); // hack to fix a bug where the first element was added twice in two different positions
            }
            else{
                $rootScope.packery.appended(element[0]);
  					}
				$('.wrapper').imagesLoaded( function(){
							$rootScope.packery.layout();
					})
			}
    };
}]);
