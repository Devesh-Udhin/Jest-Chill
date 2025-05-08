public with sharing class DisplayAccountController {
    @AuraEnabled
    public static List<Account> getMyAccounts(){
        try {
            return [SELECT Name FROM Account WHERE Name IN :new List<String> {'Joe', 'William', 'Jack', 'Averell'} WITH USER_MODE];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}