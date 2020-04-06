import api from "api";

export async function fetchTop(context) {
  return await api(context).fetchTop();
}

export async function fetchBottom() {
  return await api.fetchBottom();
}

export async function fetchRecommder(context) {

  return await api(context).fetchRecommder();
}

export async function fetchMain() {
  return await api.fetchMain();
}

// let apiEnum = null;

// // export default function getApiEnum(ctx) {
// //   if (!ctx) {
// //     return {};
// //   }
// //   if (apiEnum) {
// //     return apiEnum;
// //   }
//   return getApiEnumHydrate();
// }
