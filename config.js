require('dotenv').config();

module.exports = {
    aws_table_name: 'ChilisMenu',
    aws_local_config: {
        region: "us-east-2",
        endpoint: "http://localhost:8000"
    },
    aws_remote_config: {
        accessKeyId: process.env.ACCESS_KEY_ID.toString(),
        secretAccessKey: process.env.SECRET_ACCESS_KEY.toString(),
        region: 'us-east-2',
    }
};
