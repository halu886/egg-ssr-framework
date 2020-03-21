'use strict';
const Service = require('egg').Service;
class RecommenderService extends Service {
  getRecommender(index = 4) {
    const recommender = [];
    for (let i = 0; i < index; i++) {
      recommender.push(Math.random() + 'recommender');
    }
    return recommender;
  }
}
module.exports = RecommenderService;
