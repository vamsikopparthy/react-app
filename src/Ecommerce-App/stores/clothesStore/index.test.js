import {API_INITIAL,API_SUCCESS,API_FAILED,API_FETCHING} from '@ib/api-constants';

import productStore from '.';

import eCommerceAppService from '../../Services';

import getProductListAPIResponse from '../../fixtures/productListAPIResponse.json';

describe("ProductStore tests",() => {
    
  let eCommerceAppService
  let ProductStore

beforeEach(() => {
    //eCommerceAppService = new eCommerceAppService;
    //productStore = new ProductStore(eCommerceAppService);
})

it("should test productService", () => {
    expect(productStore.productsApiService).toBe(eCommerceAppService);
  });
  
  it("should initialises productStore properties",() => {
     expect(productStore.geteCommerceApiError).toBe(null);
     expect(productStore.sortBy).toBe('Select');
     expect(productStore.sizeFilter).toEqual([{size:'XS',isClicked:false},{size:'S',isClicked:false},{size:'M',isClicked:false},{size:'L',isClicked:false},{size:'Xl',isClicked:false},{size:'XXL',isClicked:false}]);
     expect(productStore.getProductListApiStatus).toBe(API_INITIAL);
     expect(productStore.productList).toEqual([]);
  });
  
it("should test userSignInAPI data fetching state", () => {
    
    const mockLoadingPromise = new Promise(function (resolve, reject) {});
    
    const mockProductsAPI = jest.fn();
    
    mockProductsAPI.mockReturnValue(mockLoadingPromise);
    
    
    productStore.geteCommerceAppApi();
    
    expect(productStore.getProductListApiStatus).toBe(API_FETCHING);
  });

it("should test userSignInAPI data sucess state",async () => {
    
    const mockLoadingPromise = new Promise(function (resolve, reject) {
        resolve(getProductListAPIResponse)
    });
    
    const mockProductsAPI = jest.fn();
    
    mockProductsAPI.mockReturnValue(mockLoadingPromise);
    
    await productStore.geteCommerceAppApi();
    
    expect(productStore.getProductListApiStatus).toBe(API_SUCCESS);
  });

it("should test userSignInAPI data failed state",async () => {
    
    const mockLoadingPromise = new Promise(function (resolve, reject) {
        reject(new Error('It is an error'))
    });
    
    const mockProductsAPI = jest.fn();
    
    mockProductsAPI.mockReturnValue(mockLoadingPromise);
    
    
    await productStore.geteCommerceAppApi();
    
    expect(productStore.getProductListApiStatus).toBe(API_FAILED);
  });
  
  
});