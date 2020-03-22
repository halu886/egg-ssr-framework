export default function(ctx){
   return {
      fetchTop:ctx.service.top.getTop,
      fetchBottom:ctx.service.bottom.getBottom,
      fetchRecommder:ctx.service.recommder.fetchRecommder,
      fetchMain:ctx.service.recommder.getMain
   }
}