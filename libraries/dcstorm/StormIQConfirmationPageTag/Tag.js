//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("dcstorm.StormIQConfirmationPageTag", {
    config: {/*DATA*/
	id: 30175,
	name: "StormIQ Confirmation Page Tag",
	async: true,
	description: "To be placed on the confirmation page only",
	html: "",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "t1.stormiq.com/dcv4/jslib/${storm_id}.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 29242,
		name: "StormIQ ID",
		description: "",
		token: "storm_id",
		uv: ""
	},
	{
		id: 29243,
		name: "StormIQ Channel",
		description: "If not specified, leave blank",
		token: "channel",
		uv: ""
	},
	{
		id: 29244,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 29245,
		name: "Transaction Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 29246,
		name: "Product IDs",
		description: "",
		token: "ids",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 29247,
		name: "Product SKUs",
		description: "",
		token: "skus",
		uv: "universal_variable.transaction.line_items[#].product.sku_code"
	},
	{
		id: 29248,
		name: "Product Quantities",
		description: "",
		token: "quants",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 29249,
		name: "Product Colours",
		description: "",
		token: "colors",
		uv: "universal_variable.transaction.line_items[#].product.color"
	},
	{
		id: 29250,
		name: "Product Values",
		description: "",
		token: "vals",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	},
	{
		id: 29251,
		name: "Shipping Cost",
		description: "",
		token: "shipping",
		uv: "universal_variable.transaction.shipping_cost"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
window.__stormJs ='t1.stormiq.com/dcv4/jslib/' + this.getValueForToken("storm_id") + '.js'; 
window.__ch ='' + this.getValueForToken("channel") + '';
    },/*~PRE*/
    post: function () {/*POST*/
var i = 0, ii = this.getValueForToken("ids").length;

for (; i < ii; i++) {
  saleTrack.addSaleItem({
    itemcount: this.getValueForToken("quants")[i],
    itemvalue: this.getValueForToken("vals")[i],
    m1: this.getValueForToken("ids")[i],
    m2: this.getValueForToken("skus")[i],
    m3: this.getValueForToken("colors")[i]
  })
}

saleTrack.addSaleItem({
    itemcount: 1,
    itemvalue: this.getValueForToken("shipping"),
    m1: "Shipping cost"
})

saleTrack.curcode = '' + this.getValueForToken("currency") + '';
saleTrack.orderid = "" + this.getValueForToken("order_id") + ""; 
saleTrack.logSale(1);
    }/*~POST*/
});
