
const { kafka }=require('./client')

async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting...")
    admin.connect();
    console.log("Admin connected!!")

    console.log("Creating topic...")
    await admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions:2
            }
        ]
    })

    console.log("topic created...")


    console.log("disconnecting...")
    await admin.disconnect();

}

init();