appm.directive("myAlert", function(){
	return{
		templateUrl : "./alert.html",
		replace : true,
		restrict : 'ECA',
		scope: {
			topic: '=topic',
			description: '=description',
            close : "&close"
		}

	}
})