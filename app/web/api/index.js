import api from "api";

export async function fetchTop(){
   return await api.fetchTop();
}

export async function fetchBottom(){
    return await api.fetchBottom();
}

export async function fetchRecommder(){
    return await api.fetchRecommder();
}

export async function fetchMain(){
    return await api.fetchMain();
}

let apiEnum = null;

export default function getApiEnum(ctx) {
    if(!ctx){
      return {} 
    }
    if(apiEnum){
        return apiEnum;
    }
    return getApiEnumHydrate();
}
