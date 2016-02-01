priceQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28last_price+%3E%3D+0%29+%26+%28last_price+%3C%3D+273%29+%26+%28earnings_per_share+%3E%3D+-47924%29+%26+%28earnings_per_share+%3C%3D+36.79%29+%26+%28change_today_percent+%3E%3D+-101%29+%26+%28change_today_percent+%3C%3D+101%29+%26+%28high_52week+%3E%3D+0%29+%26+%28high_52week+%3C%3D+360080000000%29+%26+%28low_52week+%3E%3D+0%29+%26+%28low_52week+%3C%3D+200001%29+%26+%28price_change_52week+%3E%3D+-99.47%29+%26+%28price_change_52week+%3C%3D+11401%29+%26+%28average_50day_price+%3E%3D+0%29+%26+%28average_50day_price+%3C%3D+199%29+%26+%28average_150day_price+%3E%3D+0%29+%26+%28average_150day_price+%3C%3D+199%29+%26+%28average_200day_price+%3E%3D+0%29+%26+%28average_200day_price+%3C%3D+199%29+%26+%28price_change_13week+%3E%3D+-98.3%29+%26+%28price_change_13week+%3C%3D+3758%29+%26+%28price_change_26week+%3E%3D+-98.12%29+%26+%28price_change_26week+%3C%3D+6901%29%5D&ei=XzCnVoHEE4ie0ASNmqLQDw';

test = 'https://www.google.com/finance?output=json&start=0&num=5000&noIL=1&q=[currency%20%3D%3D%20%22AUD%22%20%26%20%28exchange%20%3D%3D%20%22ASX%22%29%20%26%20%28beta%20%3E%3D%20-7.07%29%20%26%20%28beta%20%3C%3D%209.8%29%20%26%20%28shares_floating%20%3E%3D%200%29%20%26%20%28shares_floating%20%3C%3D%2023222%29%20%26%20%28percent_institutional_held%20%3E%3D%200%29%20%26%20%28percent_institutional_held%20%3C%3D%2028.95%29%20%26%20%28volume%20%3E%3D%200%29%20%26%20%28volume%20%3C%3D%20200651%29%20%26%20%28average_volume%20%3E%3D%200%29%20%26%20%28average_volume%20%3C%3D%2023020000%29]&restype=company&ei=VaCvVvj4HoOL0gTBkZqwAg'
responses = new Mongo.Collection("responses");

if (Meteor.isClient) {
	// This code only runs on the client
	Template.body.helpers({
		responses: function () {
			return responses.find({});
		}
	});
	Template.requestData.events({
		"click .requestData": function () {
			Meteor.call('getData',function(error,result){console.log('done');});
		}
	});


}


