//:include tagsdk-0.0.1.js

qubit.qtag.LibraryTag.define("qubit.PongTimers", {
    config: {/*DATA*/
	id: 36182,
	name: "Pong Timers",
	async: false,
	description: "Times how long it takes to load pong and pings the stats back.",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/qubit_Q.png",
	locationDetail: "",
	priv: true,
	url: "",
	usesDocWrite: false,
	parameters: [
	{
		id: 35276,
		name: "Pong URL",
		description: "URL of the pong to be tested",
		token: "pong_url",
		uv: ""
	}
	]
    },/*~DATA*/
    script: function () {/*SCRIPT*/

(function() {

  if (performance && performance.timing && (window.XDomainRequest || XMLHttpRequest)) {

    var r = Math.floor(Math.random()*50000);
    var url = "//pong.qubitproducts.com/qc?" + r;

    var start = new Date();
    if (window.XDomainRequest) {
      var xdr = new window.XDomainRequest();
      xdr.open("GET", url);
      xdr.send();
    } else {
      var request = new XMLHttpRequest();
      request.open("GET",  url, false);
      request.send(null);
    }

    var end = new Date();
    var times = {
      _c_ping_start: start.getTime() - performance.timing.requestStart,
      _c_ping_end: end.getTime() - performance.timing.requestStart
    };

    window._qtd = window._qtd || [];
    window._qtd.push({
      data: times
    });

  }

}());


    },/*~SCRIPT*/
    pre: function () {/*PRE*/
    },/*~PRE*/
    post: function () {/*POST*/
    }/*~POST*/
});
