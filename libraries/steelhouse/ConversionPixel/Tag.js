//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("steelhouse.ConversionPixel", {
    config: {/*DATA*/
	id: 35658,
	name: "Conversion Pixel",
	async: true,
	description: "The Steelhouse conversion pixel, for placing on confirmation pages. Bundled with the tracking pixel.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/SteelHouse.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 34686,
		name: "SteelHouse Advertiser ID",
		description: "The ID assigned to you by SteelHouse",
		token: "advertiser_id",
		uv: ""
	},
	{
		id: 34687,
		name: "Order ID",
		description: "The unique identifier for this order",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 34688,
		name: "Order Total",
		description: "The total amount paid by the customer for this order",
		token: "order_total",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 34689,
		name: "Order Currency",
		description: "The currency used to pay for this order",
		token: "order_currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 34690,
		name: "Product SKU List",
		description: "An array containing the SKUs for each item in the order",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 34691,
		name: "Product Quantity List",
		description: "An array containing quantities associated with each product in this order",
		token: "quantities",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 34692,
		name: "Product Price List",
		description: "An array containing sale prices for each product in the order",
		token: "prices",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 34693,
		name: "Additional Information",
		description: "Arbitrary additional information you'd like to pass back to SteelHouse",
		token: "custom",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  function shaddslashes(e) {
    "use strict";
    if (e != undefined) {
      e = e.replace(/%/g, "%25%32%35");
      e = e.replace(/\\/g, "%5C");
      e = e.replace(/\'/g, "%27");
      e = e.replace(/\"/g, "%22");
      e = e.replace(/\?/g, "%25%33%46");
      e = e.replace(/&/g, "%25%32%36");
      e = e.replace(/\+/g, "%25%32%42")
    }
    return e
  }
  //Make CSVs out of UV pseudo-arrays.
  //Will work if the customer provides actual arrays, too (though join would be cleaner).
  function getSKUs(){
    var temp_skus = "";
    for (var sku_index = 0; sku_index < this.getValueForToken("skus").length; sku_index++){
      temp_skus += this.getValueForToken("skus")[sku_index];
      if (sku_index != this.getValueForToken("skus").length - 1) temp_skus += ",";
    }
    return sku_index;
  }

  function getQtys(){
    var temp_quants = "";
    for (var quant_index = 0; quant_index < this.getValueForToken("quantities").length; quant_index++){
      temp_quants += this.getValueForToken("quantities")[quant_index];
      if (quant_index != this.getValueForToken("quantities").length - 1) temp_quants += ",";
    }
    return temp_quants;
  }

  function getCount(){
    var temp = 0;
    for (var index = 0; index < this.getValueForToken("quantities").length; index++){
      temp += Number(this.getValueForToken("quantities")[index]);
    }
    return temp;
  }

  function getPrices(){
    var temp_prices = "";
        for (var price_index = 0; price_index < this.getValueForToken("prices").length; price_index++){
          temp_prices += this.getValueForToken("prices")[price_index];
          if (price_index != this.getValueForToken("prices").length - 1) temp_prices += ",";
        }
        return temp_prices;
  }

  (function() {
  "use strict";
  var e = null,

    //this next line would make a CSV from an array for f later on
    //stock_counts = this.getValueForToken("stock_counts").join(","),
    t = "3.4.0",
    n = "" + this.getValueForToken("advertiser_id") + "",
    r = "" + this.getValueForToken("order_id") + "",
    i = "" + this.getValueForToken("order_total") + "",
    s = "" + this.getValueForToken("order_currency") + "",
    o = getSKUs(),
    u = getQtys(),
    a = getPrices(),
    //f here could be a stock count CSV if a client ever wants it
    f = "",
    shadditional = "" + this.getValueForToken("custom") + "",
    l, c, h;
  try {
    l = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 256)) : "";
  } catch (d) {
    l = document.referrer !== null ? encodeURIComponent(document.referrer.toString().substring(0, 256)) : "";
  }
  try {
    c = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location;
  } catch (v) {
    c = document.location;
  }
  try {
    h = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 256)) : "";
  } catch (m) {
    try {
      h = c !== null ? encodeURIComponent(c.toString().substring(0, 256)) : "";
    } catch (g) {
      h = "";
    }
  }
  e = {
    add: function(e, t, n, r) {
      r = r || false;
      if (e.addEventListener) {
        e.addEventListener(t, n, r);
      } else if (e.attachEvent) {
        e.attachEvent("on" + t, n);
      }
    },
    load: function() {
      var e, c = document.createElement("script"),
        d = null,
        v = document.getElementsByTagName("script"),
        m = Number(v.length) - 1,
        g = document.getElementsByTagName("script")[m];
      if (typeof e === "undefined") {
        e = Math.floor(Math.random() * 1e17);
      }
      d = "px.steelhousemedia.com/st?" + "conv=1" + "&shver=" + t + "&shaid=" + n + "&shoid=" + r + "&shoamt=" + i + "&shocur=" + s + "&shopid=" + o + "&shoq=" + u + "&shoup=" + a + "&shpil=" + f + "&tdr=" + l + "&plh=" + h + "&cb=" + e + shadditional;
      c.type = "text/javascript";
      c.src = ("https:" === document.location.protocol ? "https://" : "http://") + d;
      g.parentNode.insertBefore(c, g);
    }
  };
  e.load();
})(); 
(function() {
    "use strict";
    var e = null,
    t = "3.4.0",
    n="" + this.getValueForToken("advertiser_id") + "",
    r=shaddslashes(""),
    i=shaddslashes(""),
    s=shaddslashes(""),
    o="",
    u="",
    a="",
    f="",
    l="",
    c="",
    h="" + this.getValueForToken("order_total") + "",
    p=getCount(),
    d=getSKUs(),
    v=getQtys(),
    shadditional="" + this.getValueForToken("custom") + "",
      m, g, y;
      try {
        m = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 256)) : ""
      } catch (w) {
        m = document.referrer !== null ? encodeURIComponent(document.referrer.toString().substring(0, 256)) : ""
      }
      try {
        g = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location
      } catch (E) {
        g = document.location
      }
      try {
        y = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 256)) : ""
      } catch (S) {
        try {
          y = g !== null ? encodeURIComponent(g.toString().substring(0, 256)) : ""
        } catch (x) {
          y = ""
        }
      }
      a = encodeURIComponent(a);
      e = {
        add: function(e, t, n, r) {
          r = r || false;
          if (e.addEventListener) {
            e.addEventListener(t, n, r)
          } else if (e.attachEvent) {
            e.attachEvent("on" + t, n)
          }
        },
        load: function() {
          var e, g = document.createElement("script"),
            w = null,
            E = document.getElementsByTagName("script"),
            S = Number(E.length) - 1,
            x = document.getElementsByTagName("script")[S];
          if (typeof e === "undefined") {
            e = Math.floor(Math.random() * 1e17)
          }
          w = "px.steelhousemedia.com/st?" + "shver=" + t + "&shaid=" + n + "&shpn=" + r + "&shpc=" + i + "&shpb=" + s + "&shpp=" + o + "&shpcur=" + u + "&shpi=" + a + "&shps=" + f + "&shpic=" + l + "&shpau=" + c + "&shcv=" + h + "&shcq=" + p + "&shcp=" + d + "&shcpq=" + v + "&tdr=" + m + "&plh=" + y + "&cb=" + e + shadditional;
          g.type = "text/javascript";
          g.src = ("https:" === document.location.protocol ? "https://" : "http://") + w;
          x.parentNode.insertBefore(g, x)
        }
      };
      e.load()
    })();


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
