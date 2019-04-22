'use strict';

/**
 * Tool.js controller
 *
 * @description: A set of functions called "actions" for managing `Tool`.
 */

module.exports = {

  /**
   * Retrieve tool records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tool.search(ctx.query);
    } else {
      return strapi.services.tool.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tool record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tool.fetch(ctx.params);
  },

  /**
   * Count tool records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.tool.count(ctx.query, populate);
  },

  /**
   * Create a/an tool record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tool.add(ctx.request.body);
  },

  /**
   * Update a/an tool record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tool.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tool record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tool.remove(ctx.params);
  }
};
