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
		},
		"click .fetchIndicators": function () {
			Meteor.call('fetchIndicators',function (error,result) {});
		},
		"click .deleteDateString": function () {
			Meteor.call('deleteDateString',function (error,result) {});
		},
		"click .pullData": function () {
			Meteor.call('pullData',function (error,result) {});
		},
		"click .saveData": function () {
			Meteor.call('saveData',function (error,result) {});
		}							
	});


}


