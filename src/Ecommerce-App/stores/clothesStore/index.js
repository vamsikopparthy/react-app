import {observable,action} from "mobx";

import ProductModel from '../Models/ClothModel';

import eCommerceAppService from '../../Services';

import {API_INITIAL,API_SUCCESS,API_FAILED,API_FETCHING} from '@ib/api-constants';

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';

class ProductStore {
    
    @observable getProductsApiError;
    @observable sortBy;
    @observable sizeFilter;
    @observable productList;
    productsApiService;
    @observable getProductListApiStatus;
    orginalProductList;
    OrginalProductList;
    @observable geteCommerceApiError;
    sizebuttonFilter;
    sizes;
    
    constructor() {
        this.productList = [];
        this.sizeFilter = [{size:'XS',isClicked:false},{size:'S',isClicked:false},{size:'M',isClicked:false},{size:'L',isClicked:false},{size:'Xl',isClicked:false},{size:'XXL',isClicked:false}];
        //this.sizeFilter = [];
        this.sortBy = "Select";
        this.init();
        this.orginalProductList = [];
        this.OrginalProductList = [];
        this.sizes = [];
    }
    
    init() {
        this.getProductListApiStatus = API_INITIAL;
        this.geteCommerceApiError = null;
    }
    
    
    
    @action.bound
    setProductListResponse(productResponse) {
       // console.log(productResponse);
        this.productList = productResponse.map((eachItem) => {
        const productModel = new ProductModel(eachItem);
        return productModel});
        this.orginalProductList = this.productList.slice(0);
        this.OriginalProductList = this.productList.slice(0);
        console.log("originalProductList:",this.orginalProductList)
        }
    
    @action.bound
    setGetProductListApiStatus(apiStatus) {
        this.getProductListApiStatus = apiStatus;
    }
    
    @action.bound
    onChangeSortBy(sortingOrder) {
        this.sortBy = sortingOrder;
        if(this.sortBy == 'Ascending') {
            this.productList = this.productList.sort((a, b) => (a.price > b.price) ? 1 : -1);
            
        }
        else {
            this.productList = this.productList.sort((a,b) => (a.price < b.price) ? 1 : -1);
            
        }
    }
    
    @action.bound
    onSelectSize(selectedSize) {
        
       // this.sizeFilter.filter(eachObject => each)
        //this.sizeFilter.push(selectedSize)
        
        
          this.sizeFilter.filter((eachObject) => {
            if(eachObject.size === selectedSize) {
               eachObject.isClicked = !(eachObject.isClicked)
               return eachObject
            }})
        
        console.log("sizeFilter",this.sizeFilter);
        
        this.sizes = this.sizeFilter.filter(eachObject => (eachObject.isClicked));
        
        //this.sizes = this.sizes.filter(eachSize => (eachSize.isClicked === true));
        
        console.log("sizes",this.sizes);
        // this.sizebuttonFilter.filter(eachSize => this.productList.some())
        
        //this.productList = this.orginalProductList.filter(product => this.sizeFilter.some(eachSize => product.availableSizes.indexOf(eachSize) !== -1));
        
        //this.productList = this.orginalProductList.filter(product => this.sizeFilter.some(eachSize => product.availableSizes.indexOf(eachSize) !== -1));
        
        this.productList = this.orginalProductList.filter(product => this.sizes.some(eachSize => product.availableSizes.indexOf(eachSize.size) !== -1));
        
        if(this.productList.length === 0) {
            this.productList = this.OriginalProductList;
        }
        
        console.log("productList:",this.productList);
    }
    
    @action.bound  
    geteCommerceApiError (error) {
        this.getProductsApiError = error;
    }
    
    
    
    
    @action.bound
    geteCommerceAppApi() {
        const AppPromise = eCommerceAppService.getEcommerceApi();
        return bindPromiseWithOnSuccess(AppPromise)
        .to(this.setGetProductListApiStatus,this.setProductListResponse)
        .catch(this.geteCommerceApiError);
    }
    
}

const productStore = new ProductStore();

export default productStore;