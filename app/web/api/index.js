import api from "api";

export async function fetchTop(context) {
  return await api.fetchTop(context);
}

export async function fetchBottom() {
  return await api.fetchBottom();
}

export async function fetchRecommder(context) {
  return await api.fetchRecommder(context);
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
