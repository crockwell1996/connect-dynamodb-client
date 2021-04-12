const AWS = require('aws-sdk');
const config = require('./config');

AWS.config.update(
    config.aws_remote_config
);

const docClient = new AWS.DynamoDB.DocumentClient();
console.log(`Querying for all items in DynamoDB table: ${config.aws_table_name}`);

const params = {
    TableName: config.aws_table_name
}

docClient.scan(params, (err, data) => {
    if (err) {
        console.error("Unable to scan. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Scan succeeded.");
        data.Items.forEach((item) => {
            console.log(item);
        });
    }
});
