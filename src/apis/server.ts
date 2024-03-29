import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1GuideMapQueryAllApiRequest,
  YapiGetV1GuideMapQueryAllApiResponse,
} from '@/typings/yapi/GuideMapQueryAllV1GetApi'
import {
  YapiPostV1GuideMapUpdateApiRequest,
  YapiPostV1GuideMapUpdateApiResponse,
} from '@/typings/yapi/GuideMapUpdateV1PostApi'

/**
 * [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5614)
 * */
export const getV1GuideMapQueryAllApiRequest: MarkcoinRequest<
  YapiGetV1GuideMapQueryAllApiRequest,
  YapiGetV1GuideMapQueryAllApiResponse['data']
> = params => {
  return request({
    path: '/v1/guideMap/queryAll',
    method: 'GET',
    params,
  })
}

/**
 * [修改引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5619)
 * */
export const postV1GuideMapUpdateApiRequest: MarkcoinRequest<
  YapiPostV1GuideMapUpdateApiRequest,
  YapiPostV1GuideMapUpdateApiResponse['data']
> = data => {
  return request({
    path: '/v1/guideMap/update',
    method: 'POST',
    data,
  })
}
