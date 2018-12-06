"use strict";

var config = {
    "development": {
        "db_server": {
            "database": "test",
            "host": "mongodb://localhost:27017/test"
        },
        "auth": {
            "secret": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
            "tokenPeriod": 1440
        },
        "web_server": {
            "url": "http://localhost:8000",
            "port": 8000
        },
        "push_notification": {
            // "serverKey": "AIzaSyBVpK42Xm23TiwvI3hVIP-m356uSYeChaw"
            "serverKey": "AIzaSyAUReWORiahQT87i2Yl2ZmdmPU-Zxm5hEA"
        }
    },
    "production": {
        "db_server": {
            "database": "tpt",
            "host": "mongodb://localhost:27017/tpt"
        },
        "auth": {
            "secret": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
            "tokenPeriod": 1440
        },
        "web_server": {
            "url": "http://ec2-18-218-133-217.us-east-2.compute.amazonaws.com:8000",
            "port": 8000
        },
        "push_notification": {
            // "serverKey": "AIzaSyBVpK42Xm23TiwvI3hVIP-m356uSYeChaw"
            "serverKey": "AIzaSyAUReWORiahQT87i2Yl2ZmdmPU-Zxm5hEA"
        }
    }
};

var node_env = process.env.NODE_ENV || 'development';
//  var node_env = process.env.NODE_ENV || 'production';

module.exports = config[node_env];