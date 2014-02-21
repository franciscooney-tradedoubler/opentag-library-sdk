//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("quantcast.DEPRECATEDQuantCastConfirmationPage", {
    config: {/*DATA*/
	id: 31157,
	name: "DEPRECATED QuantCast - Confirmation page",
	async: true,
	description: "To be placed on the confirmation page instead of the regular Quantcast tag.",
	html: "\n",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/quantcast.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 30157,
		name: "Account Number",
		description: "Your Quantcast account number",
		token: "account_no",
		uv: ""
	},
	{
		id: 30158,
		name: "Order ID",
		description: "The unique order id for the transaction",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 30159,
		name: "Order Revenue",
		description: "The total revenue for the transaction (uses subtotal, not grand total)",
		token: "revenue",
		uv: "universal_variable.transaction.subtotal"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

var _qevents = _qevents || []; 

(function() {
  var elem = document.createElement('script');
  elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
  elem.async = true;
  elem.type = "text/javascript";
  document.getElementsByTagName('head')[0].appendChild(elem);
})();

_qevents.push({
  qacct:"" + this.getValueForToken("account_no") + "",
  labels:"_fp.event.Confirmation Page",
  orderid:"" + this.getValueForToken("order_id") + "",
  revenue:"" + this.getValueForToken("revenue") + ""
});



    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
