# ApiDocumentation.TourControllerApi

All URIs are relative to *https://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saveTourArticleUsingPOST**](TourControllerApi.md#saveTourArticleUsingPOST) | **POST** /tour-upload | saveTourArticle
[**tourSearchUsingGET**](TourControllerApi.md#tourSearchUsingGET) | **GET** /tour | tourSearch


<a name="saveTourArticleUsingPOST"></a>
# **saveTourArticleUsingPOST**
> Tour saveTourArticleUsingPOST(opts)

saveTourArticle

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.TourControllerApi();

var opts = { 
  'nickname': "nickname_example", // String | 
  'tourContent': "tourContent_example", // String | 
  'tourEndDate': "tourEndDate_example", // String | 
  'tourLocation': "tourLocation_example", // String | 
  'tourNeed': "tourNeed_example", // String | 
  'tourStartDate': "tourStartDate_example", // String | 
  'tourTeam': "tourTeam_example", // String | 
  'tourTitle': "tourTitle_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveTourArticleUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nickname** | **String**|  | [optional] 
 **tourContent** | **String**|  | [optional] 
 **tourEndDate** | **String**|  | [optional] 
 **tourLocation** | **String**|  | [optional] 
 **tourNeed** | **String**|  | [optional] 
 **tourStartDate** | **String**|  | [optional] 
 **tourTeam** | **String**|  | [optional] 
 **tourTitle** | **String**|  | [optional] 

### Return type

[**Tour**](Tour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="tourSearchUsingGET"></a>
# **tourSearchUsingGET**
> [TourSave] tourSearchUsingGET(opts)

tourSearch

### Example
```javascript
var ApiDocumentation = require('api_documentation');

var apiInstance = new ApiDocumentation.TourControllerApi();

var opts = { 
  'tourEndDate': "tourEndDate_example", // String | 
  'tourLocation': "tourLocation_example", // String | 
  'tourStartDate': "tourStartDate_example", // String | 
  'tourTeam': "tourTeam_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tourSearchUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tourEndDate** | **String**|  | [optional] 
 **tourLocation** | **String**|  | [optional] 
 **tourStartDate** | **String**|  | [optional] 
 **tourTeam** | **String**|  | [optional] 

### Return type

[**[TourSave]**](TourSave.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

