const keys = require('./key').keys
const https = require('https');
const axios = require('axios')


const sampleData = {"customAttributes":[{"customAttributeId":"input_1528893649501_367_1127461528893649501_704","customAttributeValue":"","customAttributeType":"input","customAttributeTagName":"input_1528893649501_117_839291528893649501_645","customAttributeName":"input_1528893649501_117_839291528893649501_645","fieldType":"NUMBER","input_1528893649501_117_839291528893649501_645":""},{"customAttributeId":"input_1530531982205_792_1049571530531982205_275","customAttributeValue":"","customAttributeType":"input","customAttributeTagName":"input_1530531982205_532_982921530531982205_335","customAttributeName":"input_1530531982205_532_982921530531982205_335","fieldType":"NUMBER","input_1530531982205_532_982921530531982205_335":""},{"customAttributeId":"select_1528893649502_389_820021528893649502_920","customAttributeValue":"","customAttributeType":"select","customAttributeTagName":"select_1528893649502_583_987801528893649502_923","customAttributeName":"select_1528893649502_583_987801528893649502_923","fieldType":"NUMBER","select_1528893649502_583_987801528893649502_923":""}],"customerId":null,"customerName":"FEED YOUR ZEBRA ABC","customerNumber":"FEED012","customerCategory":"","customerCategoryId":null,"statusName":"Active","statusId":10000,"defaultBillingCurrency":"USD","assigneeObjectRefName":"sites user","assigneeObjectRefId":76886,"assigneeObjectId":8,"description":"","phoneNumber":"","contactEmail":"","skypeName":"","parentCustomerName":"","parentCustomerId":null,"employeeRange":"","employeeRangeId":null,"website":"","tickerSymbol":"","annualRevenue":null,"annualRevenueCurrencyCode":"USD","campaignName":"","campaignId":null,"creditRating":"","marketName":"","marketId":null,"segmentName":"","segmentId":null,"industryName":"","industryId":null,"paymentTerm":"Net 30","paymentTermId":98234,"ownership":"","slaName":"","slaId":null,"isUnsubscribed":"N","accounts":[],"territories":[],"isBounced":"N","bouncedReason":null,"isResponded":"N","syncToGoogle":"N","followUpDate":null,"followUpDescription":null,"createdByName":"","lastUpdatedByName":"","creationDate":"","lastUpdateDate":"","isExistingCustomer":"N","isAffiliate":"N","faceBookURL":"","twitterURL":"","linkedInURL":"","createdBy":null,"lastUpdatedBy":null,"labels":[],"phoneNumbers":[{"phoneNumber":"5555555555","phoneType":"Business","phoneTypeCode":"PHONE_BUSINESS","id":"cust_phone_input"}],"removePhoneNumbers":[],"emailAddresses":[{"emailAddress":"support@apptivo.com","emailTypeCode":"BUSINESS","emailType":"Business","id":"cont_email_input"}],"addresses":[{"addressAttributeId":"address_section_attr_id","addressTypeCode":"1","addressType":"Billing Address","addressLine1":"","addressLine2":"","city":"","stateCode":"","addressGroupName":"Address1","state":"","zipCode":"","countryId":176,"countryName":"United States","countryCode":"US","deliveryInstructions":null,"county":null}],"lastContactedDate":null}


axios
  .post(`https://api.apptivo.com/app/dao/v6/customers?a=save&customerData=${sampleData}&apiKey=${keys.api}&accessKey=${keys.access}`, sampleData)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
