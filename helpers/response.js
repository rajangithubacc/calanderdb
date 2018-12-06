'use strict';
var models = require('mongoose').models;
module.exports = function(res) {
    return {
        success: function(message, code) {
            res.status(code).send({
                is_success: true,
                responseCode: code,
                message: message,
                data: {}
            });
        },
        failure: function(error, code) {
            res.status(code).send({
                is_success: false,
                responseCode: code,
                message: error,
                data: {}
            });
        },
        data: function(item, code) {
            // console.log('item',item.paginationDetail);
            res.status(code).send({
                is_success: true,
                responseCode: code,
                data: item
            });
        },
        page: function(items, code, total, skiped) {
            res.status(code).send({
                is_success: true,
                responseCode: code,
                data: {
                    items: items,
                    skiped: skiped || 0,
                    total: total || items.length
                }
            });
        },
        productData: function(item, code, count, sideBarCount, paginationDetail) {
            res.status(code).send({
                is_success: true,
                responseCode: code,
                data: item,
                count: count,
                sideBarCount: sideBarCount,
                paginationDetail: paginationDetail
            });
        }
    };
};