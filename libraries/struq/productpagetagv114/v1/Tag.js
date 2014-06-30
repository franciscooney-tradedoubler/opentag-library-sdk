//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("struq.productpagetagv114.v1.Tag", {
	config: {
		/*DATA*/
		name: "Product Page Tag v1.14",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product Page Pixel ID",
			description: "",
			token: "pixelid",
			uv: ""
		}, {
			name: "Product ID",
			description: "",
			token: "productid",
			uv: "universal_variable.product.id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window._struqPI = window._struqPI || [];
		window._struqPI.push(['injectTrackingPixel', {
			trackingPixelId: '' + this.valueForToken("pixelid"),
			route: '/s/sa/',
			collectData: false,
			data: [{
				title: "detail",
				pid: "" + this.valueForToken("productid")
			}],
			options: {
				timeoutMs: 2000,
				firstPartyDomain: '',
				firstPartyCookie: '',
				firstPartyUid: ''
			}
		}]);

		window.struq = document.createElement('script');
		struq.type = 'text/javascript';
		struq.async = true;
		struq.src = ('https:' == document.location.protocol ? 'https://' :
			'http://') +
			'media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-14.js';
		document.getElementsByTagName('head')[0].appendChild(struq);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});