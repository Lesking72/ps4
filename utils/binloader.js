var PS4_IP = "127.0.0.1",
    PAYLOAD = "",
    HOST = "http://"+PS4_IP+":9090";

var getPayload = function(payload, onLoadEndCallback) {
    var req = new XMLHttpRequest();
    req.open('GET', payload);
    req.send();
    req.responseType = "arraybuffer";
    req.onload = function (event) {
        if (onLoadEndCallback) onLoadEndCallback(req, event);
    };
}

var sendPayload = function(url, data, onLoadEndCallback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(data);

    req.onload = function (event) {
        if (onLoadEndCallback) onLoadEndCallback(req, event);
        console.log("sendPayload.onload");
    };
}

var checkStatus = function(onLoadEndCallback) {
    var req = new XMLHttpRequest();
    req.open("POST", HOST + "/status");
    req.send();
    req.onerror = function(){ alert("Load error. Are you sure the bin loader is enabled?"); };
    req.onload = function (event) {
        if (req.status === 200) {
            try {
                var responseJson = JSON.parse(req.responseText);
                if (responseJson.status == "ready") {
                    if (onLoadEndCallback) onLoadEndCallback(req, event);
                }
            } catch (e) {
            }
        }
        console.log("checkStatus.onload");
    };
}

var binload = function(binfile) {
    if (location.protocol != 'http:') {
        alert("Self-host to use the bin loader!");
        return;
    }
    PAYLOAD = "payloads_bin/" + binfile + ".bin";
    getPayload(PAYLOAD, function (req) {
        if ((req.status === 200 || req.status === 304) && req.response) {
            checkStatus(function () {
                sendPayload(HOST, req.response, function (req) {
                    if (req.status === 200) {
                        alert("Payload injected!");
                    }
                })
            })
        }
    });
}