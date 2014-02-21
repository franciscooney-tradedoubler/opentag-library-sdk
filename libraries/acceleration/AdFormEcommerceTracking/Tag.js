//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("acceleration.AdFormEcommerceTracking", {
    config: {/*DATA*/
	id: 1460557328323444737,
	name: "AdForm - Ecommerce Tracking",
	async: true,
	description: "To be placed only on order confirmation page.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/adform.png",
	locationDetail: "",
	priv: false,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 1460557561696616449,
		name: "AdForm Campaign ID",
		description: "Unique client id for AdForm",
		token: "campaignid",
		uv: ""
	},
	{
		id: 1460557595409383426,
		name: "AdForm Point ID",
		description: "Point ID for the tag. Usually unique to page type.",
		token: "pointid",
		uv: ""
	},
	{
		id: 1460557600222347267,
		name: "Subtotal",
		description: "The subtotal of the order",
		token: "subtotal",
		uv: "universal_variable.transaction.subtotal"
	},
	{
		id: 1460557600237027332,
		name: "Currency",
		description: "",
		token: "currency",
		uv: "universal_variable.transaction.currency"
	},
	{
		id: 1460557600249610245,
		name: "Order quantity list",
		description: "The quantities for all the individual products",
		token: "order_quantity_list",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 1460557600262193158,
		name: "Billing country",
		description: "",
		token: "country",
		uv: "universal_variable.transaction.billing.country"
	},
	{
		id: 1460557600274776071,
		name: "Agegroup",
		description: "(Optional) The age group of the purchaser.",
		token: "agegroup",
		uv: "universal_variable.user.age"
	},
	{
		id: 1460557600291553288,
		name: "Gender",
		description: "(Optional) Gender",
		token: "gender",
		uv: "universal_variable.user.gender"
	},
	{
		id: 1460557600302039049,
		name: "Order ID",
		description: "",
		token: "order_id",
		uv: "universal_variable.transaction.order_id"
	},
	{
		id: 1460557600316719114,
		name: "User Email",
		description: "",
		token: "email",
		uv: "universal_variable.user.email"
	},
	{
		id: 1460557600330350603,
		name: "User full name",
		description: "",
		token: "name",
		uv: "universal_variable.user.name"
	},
	{
		id: 1460557600339787788,
		name: "Address Line 1",
		description: "House name and road name",
		token: "delivery_address_1",
		uv: "universal_variable.transaction.delivery.address"
	},
	{
		id: 1460557600355516429,
		name: "Address Line 2",
		description: "Town or city",
		token: "delivery_address_2",
		uv: "universal_variable.transaction.delivery.city"
	},
	{
		id: 1460557600369147918,
		name: "Phone",
		description: "(Optional) The phone number of the purchaser.",
		token: "phone",
		uv: ""
	},
	{
		id: 1460557600394313743,
		name: "Zip Code",
		description: "",
		token: "postcode",
		uv: "universal_variable.transaction.delivery.postcode"
	},
	{
		id: 1460557600408993808,
		name: "Product ID list",
		description: "An array of product ids purchased",
		token: "product_id_arr",
		uv: "universal_variable.transaction.line_items[#].product.id"
	},
	{
		id: 1460557600423673873,
		name: "Category Name List",
		description: "An array of category names of the products ordered",
		token: "category_name_arr",
		uv: "universal_variable.transaction.line_items[#].product.category"
	},
	{
		id: 1460557600439402514,
		name: "Product Name List",
		description: "An array of product names purchased",
		token: "product_name_arr",
		uv: "universal_variable.transaction.line_items[#].product.name"
	},
	{
		id: 1460557600450936851,
		name: "Product Count List",
		description: "An array of the quantities of each product purchased",
		token: "product_count_arr",
		uv: "universal_variable.transaction.line_items[#].quantity"
	},
	{
		id: 1460557600459325460,
		name: "Product Sales List",
		description: "A list of the total sales of the product (qty x product value)",
		token: "product_sales_arr",
		uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
(function() {

  // The basic tracker
  window._adftrack = {
    pm: '' + this.getValueForToken("campaignid") + '',
    id: '' + this.getValueForToken("pointid") + ''
  };

  // Split the user name into first and last name
  var full_name = '' + this.getValueForToken("name") + '';
  var name_arr = full_name.split(' ');
  var first_name = name_arr[0];
  name_arr.splice(0, 1);
  var last_name = name_arr.join(' ');
  
  // Get items and total order quantity
  var i=0, ii = this.getValueForToken("product_id_arr").length, total_quantity=0, items = [];
  for (; i < ii; i++) {
    total_quantity += this.getValueForToken("order_quantity_list")[i];
    var item = {
      categoryname: this.getValueForToken("category_name_arr")[i],
      productid: this.getValueForToken("product_id_arr")[i], 
      productname: this.getValueForToken("product_name_arr")[i],
      productcount: this.getValueForToken("product_count_arr")[i],
      productsales: this.getValueForToken("product_sales_arr")[i]
    }
    items[i] = item;
  }
  
  // Add the order details
  window._adftrack.order = {
      sales: '' + this.getValueForToken("subtotal") + '',
      currency: '' + this.getValueForToken("currency") + '',
      basketsize: total_quantity,
      country: '' + this.getValueForToken("country") + '',
      agegroup: '' + this.getValueForToken("agegroup") + '',
      gender: '' + this.getValueForToken("gender") + '',
      orderid:'' + this.getValueForToken("order_id") + '',
      email: '' + this.getValueForToken("email") + '',
      firstname: first_name,
      lastname: last_name,
      address1: '' + this.getValueForToken("delivery_address_1") + '',
      address2: '' + this.getValueForToken("delivery_address_2") + '',
      phone: '' + this.getValueForToken("phone") + '',
      zip: '' + this.getValueForToken("postcode") + '',
      itms: items
  };

})();
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
