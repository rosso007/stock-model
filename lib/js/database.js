EPSGrowthRate10Years = new Mongo.Collection("epsgrowthrate10years");

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




Stocks = new Mongo.Collection("stocks");
Stocks.attachSchema(Schema.Stock);

Indicators = new Mongo.Collection("indicators");

