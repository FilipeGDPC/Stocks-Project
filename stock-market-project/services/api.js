import axios from 'axios';

const currenciesApi = axios.create({
    baseURL: 'https://api.marketstack.com/v1/currencies?access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});

const exchangesApi = axios.create({
    baseURL: 'https://api.marketstack.com/v1/exchanges?access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});

const timezonesApi = axios.create({
    baseURL: 'https://api.marketstack.com/v1/timezones?access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});

const tickersApi = axios.create({     // This is the API that we will use to get the Global stock Market data
    baseURL: 'https://api.marketstack.com/v1/tickers?access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});

const globalstockmarket = axios.create({
    baseURL: 'https://api.marketstack.com/v1/eod?symbols=AAPL,MSFT,GOOGL,AMZN,TSLA,FB,NVDA,BRK.B,JNJ,V,UNH,WMT,PG,JPM,MA,HD,PFE,BAC,DIS,VZ,KO,NFLX,INTC,CSCO,NKE,PEP,XOM,MRK,ABBV,T,LLY,AVGO,ADBE,PYPL,ORCL,CRM,CMCSA,ABT,QCOM,AMD,BMY,CVS,GILD,AMGN,BA,HON,CAT,MMM,MDT,C,RTX&date_from=2024-02-26&date_to=2024-03-07&access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default {currenciesApi, exchangesApi, timezonesApi, tickersApi, globalstockmarket};