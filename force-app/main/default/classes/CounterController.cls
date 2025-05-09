public with sharing class CounterController {
    @AuraEnabled
    public static String getName(Id recordId) {
        try {
            return [SELECT LastName FROM Contact WHERE Id = :recordId WITH USER_MODE][0].LastName;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}