priceQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28last_price+%3E%3D+0%29+%26+%28last_price+%3C%3D+273%29+%26+%28earnings_per_share+%3E%3D+-47924%29+%26+%28earnings_per_share+%3C%3D+36.79%29+%26+%28change_today_percent+%3E%3D+-101%29+%26+%28change_today_percent+%3C%3D+101%29+%26+%28high_52week+%3E%3D+0%29+%26+%28high_52week+%3C%3D+360080000000%29+%26+%28low_52week+%3E%3D+0%29+%26+%28low_52week+%3C%3D+200001%29+%26+%28price_change_52week+%3E%3D+-99.47%29+%26+%28price_change_52week+%3C%3D+11401%29+%26+%28average_50day_price+%3E%3D+0%29+%26+%28average_50day_price+%3C%3D+199%29+%26+%28average_150day_price+%3E%3D+0%29+%26+%28average_150day_price+%3C%3D+199%29+%26+%28average_200day_price+%3E%3D+0%29+%26+%28average_200day_price+%3C%3D+199%29+%26+%28price_change_13week+%3E%3D+-98.3%29+%26+%28price_change_13week+%3C%3D+3758%29+%26+%28price_change_26week+%3E%3D+-98.12%29+%26+%28price_change_26week+%3C%3D+6901%29%5D&ei=XzCnVoHEE4ie0ASNmqLQDw';
valuationQuerySring = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28market_cap+%3E%3D+0%29+%26+%28market_cap+%3C%3D+134900000000%29+%26+%28pe_ratio+%3E%3D+0%29+%26+%28pe_ratio+%3C%3D+10001%29+%26+%28forward_pe_1year+%3E%3D+0%29+%26+%28forward_pe_1year+%3C%3D+0%29%5D&ei=2TenVtEPiJ7QBI2aotAP';
dividendQuerySring = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28dividend_recent_quarter+%3E%3D+0%29+%26+%28dividend_recent_quarter+%3C%3D+9.13%29+%26+%28dividend_next_quarter+%3E%3D+0%29+%26+%28dividend_next_quarter+%3C%3D+2.51%29+%26+%28dividend_per_share+%3E%3D+0%29+%26+%28dividend_per_share+%3C%3D+9.13%29+%26+%28dividend_next_year+%3E%3D+0%29+%26+%28dividend_next_year+%3C%3D+5.76%29+%26+%28dividend_per_share_trailing_12months+%3E%3D+0%29+%26+%28dividend_per_share_trailing_12months+%3C%3D+9.13%29+%26+%28dividend_yield+%3E%3D+0%29+%26+%28dividend_yield+%3C%3D+216%29+%26+%28dividend_recent_year+%3E%3D+0%29+%26+%28dividend_recent_year+%3C%3D+9289%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
financialRatiosQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28book_value_per_share_year+%3E%3D+-23.36%29+%26+%28book_value_per_share_year+%3C%3D+100%29+%26+%28cash_per_share_year+%3E%3D+0%29+%26+%28cash_per_share_year+%3C%3D+65.87%29+%26+%28current_assets_to_liabilities_ratio_year+%3E%3D+0%29+%26+%28current_assets_to_liabilities_ratio_year+%3C%3D+69232%29+%26+%28longterm_debt_to_assets_year+%3E%3D+0%29+%26+%28longterm_debt_to_assets_year+%3C%3D+420%29+%26+%28longterm_debt_to_assets_quarter+%3E%3D+0%29+%26+%28longterm_debt_to_assets_quarter+%3C%3D+411%29+%26+%28total_debt_to_assets_year+%3E%3D+-0.18%29+%26+%28total_debt_to_assets_year+%3C%3D+2420000%29+%26+%28total_debt_to_assets_quarter+%3E%3D+-0.18%29+%26+%28total_debt_to_assets_quarter+%3C%3D+2420000%29+%26+%28longterm_debt_to_equity_year+%3E%3D+0%29+%26+%28longterm_debt_to_equity_year+%3C%3D+34220%29+%26+%28longterm_debt_to_equity_quarter+%3E%3D+0%29+%26+%28longterm_debt_to_equity_quarter+%3C%3D+34220%29+%26+%28total_debt_to_equity_year+%3E%3D+-0.35%29+%26+%28total_debt_to_equity_year+%3C%3D+266315%29+%26+%28total_debt_to_equity_quarter+%3E%3D+-0.35%29+%26+%28total_debt_to_equity_quarter+%3C%3D+266315%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
operatingMetricsQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28interest_coverage_year+%3E%3D+-114804%29+%26+%28interest_coverage_year+%3C%3D+19588%29+%26+%28return_on_investment_trailing_12months+%3E%3D+-29060%29+%26+%28return_on_investment_trailing_12months+%3C%3D+877%29+%26+%28return_on_investment_5years+%3E%3D+-1205%29+%26+%28return_on_investment_5years+%3C%3D+198%29+%26+%28return_on_investment_year+%3E%3D+-29060%29+%26+%28return_on_investment_year+%3C%3D+877%29+%26+%28return_on_assets_trailing_12months+%3E%3D+-4287%29+%26+%28return_on_assets_trailing_12months+%3C%3D+1809%29+%26+%28return_on_assets_5years+%3E%3D+-1790%29+%26+%28return_on_assets_5years+%3C%3D+11081%29+%26+%28return_on_assets_year+%3E%3D+-4287%29+%26+%28return_on_assets_year+%3C%3D+1809%29+%26+%28return_on_equity_trailing_12months+%3E%3D+-25419%29+%26+%28return_on_equity_trailing_12months+%3C%3D+1721%29+%26+%28return_on_equity_5years+%3E%3D+-4136%29+%26+%28return_on_equity_5years+%3C%3D+572%29+%26+%28return_on_equity_year+%3E%3D+-25419%29+%26+%28return_on_equity_year+%3C%3D+1721%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
stockMetricsQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28beta+%3E%3D+-7.07%29+%26+%28beta+%3C%3D+9.42%29+%26+%28shares_floating+%3E%3D+0%29+%26+%28shares_floating+%3C%3D+23222%29+%26+%28percent_institutional_held+%3E%3D+0%29+%26+%28percent_institutional_held+%3C%3D+28.95%29+%26+%28volume+%3E%3D+0%29+%26+%28volume+%3C%3D+53070000%29+%26+%28average_volume+%3E%3D+0%29+%26+%28average_volume+%3C%3D+27350000%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
marginsQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28gross_margin_trailing_12months+%3E%3D+-36669%29+%26+%28gross_margin_trailing_12months+%3C%3D+611%29+%26+%28ebitd_margin_trailing_12months+%3E%3D+-14030000%29+%26+%28ebitd_margin_trailing_12months+%3C%3D+116401%29+%26+%28operating_margin_trailing_12months+%3E%3D+-60610000%29+%26+%28operating_margin_trailing_12months+%3C%3D+2100000%29+%26+%28net_profit_margin_percent_trailing_12months+%3E%3D+-58340000%29+%26+%28net_profit_margin_percent_trailing_12months+%3C%3D+1740000%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
growthQueryString = 'https://www.google.com/finance?output=json&start=0&num=5000&q=%5Bcurrency+%3D%3D+%22AUD%22+%26+%28exchange+%3D%3D+%22ASX%22%29+%26+%28net_income_growth_rate_5years+%3E%3D+-66%29+%26+%28net_income_growth_rate_5years+%3C%3D+157%29+%26+%28revenue_growth_rate_5years+%3E%3D+-91.84%29+%26+%28revenue_growth_rate_5years+%3C%3D+919%29+%26+%28revenue_growth_rate_10years+%3E%3D+-67.68%29+%26+%28revenue_growth_rate_10years+%3C%3D+147%29+%26+%28eps_growth_rate_5years+%3E%3D+-74.68%29+%26+%28eps_growth_rate_5years+%3C%3D+165%29+%26+%28eps_growth_rate_10years+%3E%3D+-69.29%29+%26+%28eps_growth_rate_10years+%3C%3D+53.01%29%5D&ei=ZjmnVqG2IsSD0ASr6KegAw';
queryUrlStrings = [];
queryUrlStrings.push(priceQueryString, valuationQuerySring, dividendQuerySring, financialRatiosQueryString, operatingMetricsQueryString, stockMetricsQueryString, marginsQueryString, growthQueryString);
snapshot = [];
Meteor.methods({
	'getData': function (msg) {
		HTTP.get("https://www.google.com/finance?output=json&start=0&num=5000&noIL=1&q=[currency%20%3D%3D%20%22AUD%22%20%26%20%28exchange%20%3D%3D%20%22ASX%22%29%20%26%20%28beta%20%3E%3D%20-7.07%29%20%26%20%28beta%20%3C%3D%209.8%29%20%26%20%28shares_floating%20%3E%3D%200%29%20%26%20%28shares_floating%20%3C%3D%2023222%29%20%26%20%28percent_institutional_held%20%3E%3D%200%29%20%26%20%28percent_institutional_held%20%3C%3D%2028.95%29%20%26%20%28volume%20%3E%3D%200%29%20%26%20%28volume%20%3C%3D%20200651%29%20%26%20%28average_volume%20%3E%3D%200%29%20%26%20%28average_volume%20%3C%3D%2023020000%29]&restype=company&ei=VaCvVvj4HoOL0gTBkZqwAg", function (error, result) {
		var json = eval("(" + result.content + ")");
		for (var i = json.searchresults.length - 1; i >= 0; i--) {
			snapshot.push(new Stock(json.searchresults[i]));
			};
		});
		
		for (var i = queryUrlStrings.length - 1; i >= 0; i--) {
			HTTP.get("https://www.google.com/finance?output=json&start=0&num=5000&noIL=1&q=[currency%20%3D%3D%20%22AUD%22%20%26%20%28exchange%20%3D%3D%20%22ASX%22%29%20%26%20%28beta%20%3E%3D%20-7.07%29%20%26%20%28beta%20%3C%3D%209.8%29%20%26%20%28shares_floating%20%3E%3D%200%29%20%26%20%28shares_floating%20%3C%3D%2023222%29%20%26%20%28percent_institutional_held%20%3E%3D%200%29%20%26%20%28percent_institutional_held%20%3C%3D%2028.95%29%20%26%20%28volume%20%3E%3D%200%29%20%26%20%28volume%20%3C%3D%20200651%29%20%26%20%28average_volume%20%3E%3D%200%29%20%26%20%28average_volume%20%3C%3D%2023020000%29]&restype=company&ei=VaCvVvj4HoOL0gTBkZqwAg", function (error, result) {
				var json = eval("(" + result.content + ")");
				for (var i = json.searchresults.length - 1; i >= 0; i--) {
					snapshot.Stock[i].values.push(getValues(json.searchresults[i]));
				}
			});
		}


		return true;
	}
});


function Stock(data) {
	this.exchange = data.exchange;
	this.id = data.id;
	this.is_active = data.is_active;
	this.is_supported_exchange = data.is_supported_exchange;
	this.local_currency_symbol = data.local_currency_symbol;
	this.ticker = data.ticker;
	this.title = data.title;
}

function getValues(data) {
	var values = [];
	for (var i = data.columns.length - 1; i >= 0; i--) {
		values[data.columns[i].field] = data.columns[i].value;	
	};
	return values;
}

