function publishMessage() {
    const host = document.getElementById("host").value;
    const port = document.getElementById("port").value;
    const topic = document.getElementById("topic_p").value;
    const msg = document.getElementById("Message").value;
    const clientID = "clientID - " + parseInt(Math.random() * 100);

    const client = new Paho.MQTT.Client(host, Number(port), clientID);

    client.connect({
        onSuccess: function () {
            const Message = new Paho.MQTT.Message(msg);
            Message.destinationName = topic;
            client.send(Message);
            document.getElementById("messages").innerHTML += "<span> Message to topic " + topic + " is sent </span><br>";
            client.disconnect();
        }
    });
}
