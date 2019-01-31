import { OperationId } from '../operationid';

export const operationIds: OperationId[] = [
  {name: 'Version 2.4', api: '2.4', type: 'check'},
  {name: 'Get Basic Customer Info', api: 'CustProfileCustinfoApi.listCustinfoByID', type: 'check'},
  {name: 'Get Individual', api: 'CustomerProfileIndividualsV3Api.getIndividual2', type: 'check'},
  {name: 'Customer Deposits Account', api: 'CustProfileCustinfoApi.listCustomerAccounts', type: 'check'},
  {name: 'Customer Account', api: 'CustProfileCustinfoApi.listCustomerAccounts1', type: 'check'},
  {name: 'Mutualfund BAA check', api: 'CustomerMutualFundsApi.inquireBaa', type: 'check'},
  {name: 'Mutualfund OEF check', api: 'CustomerMutualFundsApi.findCustomerByID', type: 'check'},
  {name: 'Securities risk score check', api: 'AccountsSecuritiesApi.calculateRiskScore', type: 'check'},
  {name: 'Easy Net check', api: 'CustomerServicesRegistrationApi.findByID', type: 'check'},
  {name: 'Easy App check', api: 'ScbEasyApi.getChannelStatus', type: 'check'},
  {name: 'Securities check', api: 'AccountsSecuritiesApi.getOpenAccountStatus', type: 'check'},
  {name: 'AUM check', api: 'AumApi.processDate', type: 'check'},
  {name: 'Captiva', api: 'CaptivaApi.getTicket', type: 'check'},
  {name: 'Generate OTP', api: 'TxnAuthOTPApi.generateOTP', type: 'check'},
  {name: 'VChannel', api: 'DocumentManagementVChannelApi.getIDCard', type: 'check'},
  {name: 'SMS Sabai Jai', api: 'ServicingAlertsRegistrationApi.getFeeProfileByProductType', type: 'check'},
  {name: 'Watchlist', api: 'ExternalAgencyWATCHLISTApi.exactMatch', type: 'check'},
  {name: 'Set DebitCard Pin', api: 'ISprintApi.preAuth', type: 'check'},
  {name: 'Read Debit Card', api: 'AccountsCreditcardsCompositeGWApi.convertCardV3', type: 'check'},
  {name: 'Validate FATCA', api: 'ExternalAgencyFATCAApi.validateFATCA', type: 'check'},
  {name: 'Face Matching', api: 'SupportUtilityFaceMatchingApi.utilityFaceMatching', type: 'check'},
  {name: 'Dopa', api: 'ExternalAgencyDOPAApi.dOPAFindByCardInfo', type: 'check'},
  {name: 'Create Customer', api: 'CustProfileIndividualsApi.createIndividual', type: 'submission'},
  {name: 'Update Customer', api: 'CustProfileIndividualsApi.updateIndividual', type: 'submission'},
  {name: 'Activate DebitCard', api: 'AccountsCardsDebitcardsApi.activatePinblockAndLinking', type: 'submission'},
  {name: 'Update Marketing Info', api: 'CustProfileIndividualsApi.updateIndividualsMarketingInfo', type: 'submission'},
  {name: 'Create Marketing Info', api: 'CustProfileIndividualsApi.createIndividualsMarketingInfo', type: 'submission'},
  {name: 'Add FATCA', api: 'ExternalAgencyFATCAApi.createFATCA', type: 'submission'},
  {name: 'Create Customer Address', api: 'CustProfileIndividualsApi.createIndividualAddress', type: 'submission'},
  {name: 'Update Customer Address', api: 'CustProfileIndividualsApi.updateIndividualAddress', type: 'submission'},
  {name: 'Customer Images - VChannel', api: 'DocumentManagementVChannelApi.createOrUpdateAll', type: 'submission'},
  {name: 'Customer Remark', api: 'CustProfileIndividualsApi.createCustRemark', type: 'submission'},
  {name: 'Create Customer Relationship', api: 'CustProfileIndividualsApi.createCustAcctRelationship', type: 'submission'},
  {name: 'Update Customer Reference', api: 'CustProfileIndividualsApi.bulkUpdateReferenceIdInfo', type: 'submission'},
  {name: 'SCB Easy register', api: 'ScbEasyApi.preregistration', type: 'submission'},
  {name: 'JakJai', api: 'AccountsInsurancesApi.createAccount', type: 'submission'},
  {name: 'Customer Mutualfund', api: 'AccountMutualFundsApi.createSingleAccount', type: 'submission'},
  {name: 'Account Mutualfund', api: 'AccountMutualFundsApi.createSingleAccount', type: 'submission'},
  {name: 'Notify customer', api: 'ServicingAlertsRegistrationV3Api.sendAlert', type: 'submission'},
  {name: 'Add NSS Email/SMS', api: 'ServicingAlertsRegistrationApi.registerAlert', type: 'submission'},
  {name: 'Update NSS Email/SMS', api: 'ServicingAlertsRegistrationApi.updateAlert', type: 'submission'},
  {name: 'Open Account', api: 'AccountsDepositsV2Api.openDepositAccount1', type: 'submission'},
  {name: 'Payment Order', api: 'ServicingBranchPaymentOrderApi.createBranchPaymentOrder', type: 'submission'},
  {name: 'Promptpay', api: 'CustomerServicesApi.registerPromptpay', type: 'submission'},
  {name: 'Securities', api: 'AccountsSecuritiesApi.submitAccountOpening', type: 'submission'},
  {name: 'Create Contact Channel', api: 'CustProfileIndividualsApi.createIndividualContactChannels', type: 'submission'},
  {name: 'Update Contact Channel', api: 'CustProfileIndividualsApi.updateIndividualContactChannels', type: 'submission'},
  {name: 'Update NDID Enroll Flag', api: 'CustomerProfileCustinfoApi.addEnrollmentFlag', type: 'submission'},
  {name: 'Delete T49 Flag', api: 'AccountsDepositsMessageServiceApi.deleteMessageCode', type: 'submission'},
  {name: 'Update Account Address', api: 'AccountsDepositsApi.updateAccountAddress', type: 'submission'},
  {name: 'Update Account LongName', api: 'AccountsDepositsApi.updateAccountAddress', type: 'submission'}
];