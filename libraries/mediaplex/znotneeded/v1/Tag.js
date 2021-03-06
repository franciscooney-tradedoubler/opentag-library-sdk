//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("mediaplex.znotneeded.v1.Tag", {
	config: {
		/*DATA*/
		name: "z Not Needed",
		async: true,
		description: "Converted all pixels to use the same protocol as the page.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "https://secure.img-cdn.mediaplex.com/0/${client_id}/universal.html?page_name=${page_name}&${event_name}=1&mpuid=",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Mediaplex Client ID",
			description: "The ID assigned to you by Mediaplex",
			token: "client_id",
			uv: ""
		}, {
			name: "Page Name",
			description: "The name of the page being accessed. Typically all lowercase, with underscores",
			token: "page_name",
			uv: ""
		}, {
			name: "Event Name",
			description: "The name of the event triggered. Typically, this is a CamelCased version of the page name",
			token: "event_name",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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