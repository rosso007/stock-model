if (Meteor.isClient) {
	// This code only runs on the client
	Template.requestData.events({
		"click .getStocks": function () {
			Meteor.call('getStocks',function (error,result) {});
		},
		"click .getIndicators": function () {
			Meteor.call('getIndicators',function (error,result) {});
		},
		"click .saveIndicators": function () {
			Meteor.call('saveIndicators',function (error,result) {});
		}		
	});


}


