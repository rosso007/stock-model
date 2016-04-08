Schema = {};

Schema.Stock = new SimpleSchema({
	ticker: {
		type: String
	},
	title: {
		type: String
	},	
	isActive: {
		type: Boolean
	},
	stockExchange: {
		type: String
	},
	isSupportedExchange: {
		type: Boolean
	},
	localCurrencySymbol: {
		type: String
	}
})

Schema.Indicator = new SimpleSchema({
	ticker: {
		type: String
	},
	stockExchange: {
		type: String
	},
	field: {
		type: String
	},
	value: {
		type: String
	},
	dateObserved: {
		type: Date
	}
})


Stocks = new Meteor.Collection("stocks");
Stocks.attachSchema(Schema.Stock);

Indicators = new Meteor.Collection("indicators");
Indicators.attachSchema(Schema.Indicator);