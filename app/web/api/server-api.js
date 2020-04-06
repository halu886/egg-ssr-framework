export default function(ctx) {
  return {
    fetchTop: ctx.service.header.getTop,
    fetchBottom: ctx.service.bottom.getBottom,
    fetchRecommder: ctx.service.recommender.getRecommender,
    fetchMain: ctx.service.recommender.getMain
  };
}
