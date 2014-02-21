//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("mediaforge.Basket", {
    config: {/*DATA*/
	id: 39171,
	name: "Basket",
	async: true,
	description: "To be placed on the basket/cart page for cart abandonment targeting.",
	html: " ",
	imageUrl: ".",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 38205,
		name: "mediaFORGE Merchant ID",
		description: "The ID that relates you to mediaFORGE",
		token: "merchant_id",
		uv: ""
	},
	{
		id: 38206,
		name: "Basket Product IDs",
		description: "An array of the product ID/SKUs of all items in the basket",
		token: "product_ids",
		uv: "universal_variable.basket.line_items[#].product.sku_code"
	},
	{
		id: 38207,
		name: "Basket Total",
		description: "The total value for all items in the basket",
		token: "basket_total",
		uv: "universal_variable.basket.subtotal"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

  var script = document.createElement("script");
  var productArr = [];
  for (var i = 0; i < this.getValueForToken("product_ids").length; i++) {
    productArr.push(this.getValueForToken("product_ids")[i]);
  }
  var productIDs = productArr.join(",");
  script.src = "//tags.mediaforge.com/js/" + this.getValueForToken("merchant_id") + "/?cart=" + this.getValueForToken("basket_total") + "&prodID=" + productIDs;
  document.body.appendChild(script);


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
