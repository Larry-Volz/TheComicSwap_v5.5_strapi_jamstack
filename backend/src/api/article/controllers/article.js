'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({
    async customAction(ctx) {
        try {
            ctx.body = 'ok';
        } catch(err) {
            ctx.body = err;
        }
    }
}));
