const {Kafka}=require("kafkajs")

exports.kafka=new Kafka({
    clientId:'Vrashank',
    brokers:['192.168.1.8:9092']
})


