import { create } from "apisauce";

import { networkCallWithApisauce } from "../../utils/APIUtils"

import { apiMethods } from "../../constants/APIConstants"

class EcommerceAppService {
  api
  constructor() {
      this.api = create({
          baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
      })
  }
  
  getEcommerceApi() {
      return networkCallWithApisauce(
        this.api,
        'v1/products/',
        {},
        apiMethods.get
      );
  }
  
}

const eCommerceAppService = new EcommerceAppService();

export default eCommerceAppService;