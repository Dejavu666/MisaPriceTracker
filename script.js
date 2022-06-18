$(function() {
  getMarketData();
  setInterval(getMarketData, 10000);
});

function getMarketData() {
  getCryptoCompare();
}

function getCryptoCompare() {
  $.when(
    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MISA,ETH,DOGE,XRP,BTC&tsyms=USD")
  ).done(function (data) {
    $("#misaLogo").html('<img src="https://cryptocompare.com' + data.RAW.MISA.USD.IMAGEURL + '">');
    $("#misaSymbol").text((data.RAW.MISA.USD.FROMSYMBOL).toLocaleString());
    $("#misaPrice").text((data.RAW.MISA.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#misaChange").text((data.RAW.MISA.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#misaVol").text((data.RAW.MISA.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#misaCap").text((data.RAW.MISA.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#misaTime").text( (new Date(data.RAW.MISA.USD.LASTUPDATE * 1000) ).toLocaleString());

    $("#ethLogo").html('<img src="https://cryptocompare.com' + data.RAW.ETH.USD.IMAGEURL + '">');
    $("#ethSymbol").text((data.RAW.ETH.USD.FROMSYMBOL).toLocaleString());
    $("#ethPrice").text((data.RAW.ETH.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethChange").text((data.RAW.ETH.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#ethVol").text((data.RAW.ETH.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethCap").text((data.RAW.ETH.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#ethTime").text( (new Date(data.RAW.ETH.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#dogeLogo").html('<img src="https://cryptocompare.com' + data.RAW.DOGE.USD.IMAGEURL + '">'); 
    $("#dogeSymbol").text((data.RAW.DOGE.USD.FROMSYMBOL).toLocaleString());
    $("#dogePrice").text((data.RAW.DOGE.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeChange").text((data.RAW.DOGE.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#dogeVol").text((data.RAW.DOGE.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeCap").text((data.RAW.DOGE.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#dogeTime").text( (new Date(data.RAW.DOGE.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#xrpLogo").html('<img src="https://cryptocompare.com' + data.RAW.XRP.USD.IMAGEURL + '">');    
    $("#xrpSymbol").text((data.RAW.XRP.USD.FROMSYMBOL).toLocaleString());
    $("#xrpPrice").text((data.RAW.XRP.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpChange").text((data.RAW.XRP.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#xrpVol").text((data.RAW.XRP.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpCap").text((data.RAW.XRP.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#xrpTime").text( (new Date(data.RAW.XRP.USD.LASTUPDATE * 1000) ).toLocaleString());
    
    $("#btcLogo").html('<img src="https://cryptocompare.com' + data.RAW.BTC.USD.IMAGEURL + '">');
    $("#btcSymbol").text((data.RAW.BTC.USD.FROMSYMBOL).toLocaleString());
    $("#btcPrice").text((data.RAW.BTC.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcChange").text((data.RAW.BTC.USD.CHANGEPCT24HOUR).toFixed(2) + "%");
    $("#btcVol").text((data.RAW.BTC.USD.VOLUME24HOUR).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcCap").text((data.RAW.BTC.USD.MKTCAP).toLocaleString("en-US", {style: "currency", currency: "USD"}));
    $("#btcTime").text( (new Date(data.RAW.BTC.USD.LASTUPDATE * 1000) ).toLocaleString());
  });
}



$("#misaChange, #ethChange, #dogeChange, #xrpChange, #btcChange").bind("DOMSubtreeModified", function(){
  if($(this).is(":contains('-')")) {
    $(this).removeClass("positive").addClass("negative");
  } else {
    $(this).removeClass("negative").addClass("positive");
  }
});