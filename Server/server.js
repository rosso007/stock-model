if (Meteor.isServer) {

var snapshot = [];
var request = {
	url: 'https://www.google.com/finance?',
	output: 'json',
	start: 0,
	num: 5000,
	noIL: 1,
	currency: 'AUD',
	exchange: 'ASX',
	parameters : [
	'last_price',
	'earnings_per_share',
	'change_today_percent',
	'high_52week',
	'low_52week',
	'price_change_52week',
	'average_50day_price',
	'average_150day_price',
	'average_150day_price',
	'average_200day_price',
	'price_change_13week',
	'price_change_26week',
	'market_cap',
	'pe_ratio',
	'forward_pe_1year',
	'dividend_recent_quarter',
	'dividend_next_quarter',
	'dividend_per_share',
	'dividend_next_year',
	'dividend_per_share_trailing_12months',
	'dividend_yield',
	'dividend_recent_year',
	'book_value_per_share_year',
	'cash_per_share_year',
	'current_assets_to_liabilities_ratio_year',
	'longterm_debt_to_assets_year',
	'longterm_debt_to_assets_quarter',
	'total_debt_to_assets_year',
	'total_debt_to_assets_quarter',
	'longterm_debt_to_equity_year',
	'longterm_debt_to_equity_quarter',
	'total_debt_to_equity_year',
	'total_debt_to_equity_quarter',
	'interest_coverage_year',
	'return_on_investment_trailing_12months',
	'return_on_investment_5years',
	'return_on_investment_year',
	'return_on_assets_trailing_12months',
	'return_on_assets_5years',
	'return_on_assets_year',
	'return_on_equity_trailing_12months',
	'return_on_equity_5years',
	'return_on_equity_year',	
	'beta',
	'shares_floating',
	'percent_institutional_held',
	'volume',
	'average_volume',
	'gross_margin_trailing_12months',
	'ebitd_margin_trailing_12months',
	'operating_margin_trailing_12months',
	'net_profit_margin_percent_trailing_12months',
	'net_income_growth_rate_5years',
	'revenue_growth_rate_5years',
	'revenue_growth_rate_10years',
	'eps_growth_rate_5years',
	'eps_growth_rate_10years'
	]
};

function requestBuilder(request) {
	var string;
	var requestURL;
	var parameter;
	for (var i = request.parameters.length - 1; i >= 0; i--) {
		parameter = "+%26+%28" + request.parameters[i] + "+%3E%3D+" + -99999999999 + "%29";
		requestURL = request.url + "output=" + request.output + "&start=" + request.start + "&num=" + request.num + "&noIL=" + request.noIL + "&q=[currency%20%3D%3D%20%22" + request.currency + "%22%20%26%20%28exchange%20%3D%3D%20%22" + request.exchange + "%22%29" + parameter + "]&restype=company&ei=Y4i7VrnsN8OI0ASdrYTABQ";
		requestArray.push(requestURL);
	}	
}

var requestArray = [];


function Stock(data) {
	this.exchange = data.exchange;
	this.is_active = data.is_active;
	this.is_supported_exchange = data.is_supported_exchange;
	this.local_currency_symbol = data.local_currency_symbol;
	this.ticker = data.ticker;
	this.title = data.title;
}

requestBuilder(request);

HTTP.get(requestArray[0], function (error, result) {
	var json = eval("(" + result.content + ")");
	for (var i = json.searchresults.length - 1; i >= 0; i--) {
		snapshot.push(new Stock(json.searchresults[i]));
	}
});

function insertIntoDB (stock) {
	var data = {
		ticker: stock.ticker,
		title: stock.title,
		isActive: stock.is_active,
		stockExchange: stock.exchange,
		isSupportedExchange: stock.is_supported_exchange,
		localCurrencySymbol: stock.local_currency_symbol
	};
	if (data.isActive.length < 1) {
		data.isActive = true;
	}
	if (data.isSupportedExchange.length < 1) {
		data.isSupportedExchange = true;
	}
	Stocks.insert(data);
}

function getStocks () {
	var ticker = null;
	var existingRecord = null;
	for (var i = snapshot.length - 1; i >= 0; i--) {
		ticker = snapshot[i].ticker;
		existingRecord = Stocks.findOne({ ticker: ticker });
		if ( existingRecord == null) {
			insertIntoDB(snapshot[i]);	
			console.log("Inserted a stock record for " + snapshot[i].ticker + ":" + snapshot[i].exchange + " " + snapshot[i].title + ".");
		}
	}
}

function Indicator(data) {
	this.exchange = data.exchange;
	this.ticker = data.ticker;
	this.displayName = data.columns[0].display_name;
	this.field = data.columns[0].field;
	this.value = data.columns[0].value;
	this.date = Date.now();
}



var indicatorsArray = [];

function getIndicators() {
	for (var i = requestArray.length - 1; i >= 0; i--) {
		HTTP.get(requestArray[i], function (error, result) {
			var results = eval("(" + result.content + ")");
			for (var i = results.searchresults.length - 1; i >= 0; i--) {
				indicatorsArray.push(new Indicator(results.searchresults[i]));
			}
		});	
	}
}

function saveIndicators() {
	var data = null;
	var arrayData = null;
	for (var i = requestArray.length - 1; i >= 0; i--) {
		HTTP.get(requestArray[i], function (error, result) {
			var results = eval("(" + result.content + ")");
			for (var i = results.searchresults.length - 1; i >= 0; i--) {
				data = {
					ticker: results.searchresults[i].ticker,
					stockExchange: results.searchresults[i].exchange,
					field: results.searchresults[i].columns[0].field,
					value: results.searchresults[i].columns[0].value,
					dateObserved: Date.now()
				};
				Indicators.insert(data);	
			}
		}
	);}

}

SyncedCron.add({
  name: 'Grab stocks from google finance.',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('at 11:00 pm every 1 day');
  },
  job: function() {
    getStocks();
  }
});

SyncedCron.add({
  name: 'Grab indicators from google finance.',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('at 11:05 pm every 1 day');
  },
  job: function() {
    getIndicators();
  }
});

SyncedCron.add({
  name: 'Save indicators from google finance.',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('at 11:15 pm every 1 day');
  },
  job: function() {
    saveIndicators();
  }
});

SyncedCron.start();


Meteor.methods({
	getStocks: function () {
		getStocks();
		return console.log(Date.now() + " Stock list grab complete.");
	},
	getIndicators: function () {
		getIndicators();
		return console.log(Date.now() + " Indicators grab complete.");
	},
	saveIndicators: function () {
		saveIndicators();
		return console.log(Date.now() + " Indicators saved on into the db.");
	}		
});
};