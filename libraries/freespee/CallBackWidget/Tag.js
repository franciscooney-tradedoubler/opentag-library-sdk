//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("freespee.CallBackWidget", {
    config: {/*DATA*/
	id: 30180,
	name: "CallBack Widget",
	async: true,
	description: "The Callback Widget is a convient way for the end-user to be called directly or schedule a call within the next couple of days. When implemented on the advertiser site, it'll show up as a green phone symbol on the right hand side of the browser window. When the end-user activates the widget with a click it launches an overlay presenting a simple form. The form allows the end-user to enter his phone number and schedule the call to take place within 5 minutes or at a specific time in the next couple of days. When connecting the call, Freespee will first call the advertiser and after having confirmed that the advertiser did pick up the phone, the end-user will be called. Upon successful call establishment to both parties, the calls will be joined together, allowing the end-user and the advertiser to have a chat.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/freespee_logo.png",
	locationDetail: "",
	priv: true,
	url: "//${domain_name}.freespee.com/js/external/fs.js",
	usesDocWrite: false,
	parameters: [
	{
		id: 29269,
		name: "FreeSpee ID",
		description: "the ID provided by FreeSpee when entering the \"allowed number\" in the FreeSpee Dashboard. [REQUIRED]",
		token: "client_id",
		uv: ""
	},
	{
		id: 29270,
		name: "FreeSpee Answer Number ID",
		description: "The ID of the phone number for the advertiser to connect calls to. Provided by FreeSpee. [REQUIRED]",
		token: "cbw_answering_number_id",
		uv: ""
	},
	{
		id: 29271,
		name: "FreeSpee Style",
		description: "'desktop' or 'mobile' - defaults to 'desktop' [OPTIONAL]",
		token: "cbw_style",
		uv: ""
	},
	{
		id: 29272,
		name: "FreeSpee Caller ID",
		description: "The phone number to be presented as Caller ID for the end-user [OPTIONAL]",
		token: "cbw_caller_id",
		uv: ""
	},
	{
		id: 29273,
		name: "FreeSpee Visible Number",
		description: "this number will be replaced with a Freespee number as an alternative contact [OPTIONAL]",
		token: "cbw_visible_number",
		uv: ""
	},
	{
		id: 29274,
		name: "FreeSpee Button ID",
		description: "ID of the button used to open the widget. Defaults to “fs-open-callback-widget”. [OPTIONAL]",
		token: "cbw_button_id",
		uv: ""
	},
	{
		id: 29275,
		name: "FreeSpee LowLevel Domain Name",
		description: "Provided by FreeSpee - as in: \"//<--LowLevelDomainName-->.freespee.com/js/external/fs.js\" [REQUIRED]",
		token: "domain_name",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/
    },/*~SCRIPT*/
    pre: function () {/*PRE*/
var __fs_conf = __fs_conf || [];
 
    __fs_conf.push(['setAdv', {
                               'id': '' + this.getValueForToken("client_id") + '', 
                               'cbw_answering_number_id': '' + this.getValueForToken("cbw_answering_number_id") + '', 
                               'cbw_style': '' + this.getValueForToken("cbw_style") + '', 
                               'cbw_caller_id': '' + this.getValueForToken("cbw_caller_id") + '', 
                               'cbw_visible_number': '' + this.getValueForToken("cbw_visible_number") + ''
                              }]);
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
