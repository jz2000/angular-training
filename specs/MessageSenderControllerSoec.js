describe("message sender controller", function () {
    var sut, mockDataModelService;

    var MESSAGE_TEXT = 'MESSAGE-TEXT';

    beforeEach(function () {
        module("chatApp.MessageSender");

        mockDataModelService = {
            isLoggedIn: jasmine.createSpy(),
            postMessage: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("MessageSenderController", {
            $scope: sut,
            DataModelService: mockDataModelService
        });
    }));
    
    describe('isLoggedIn function',function() {
       beforeEach(function() {
           sut.isLoggedIn();
       });
    
       it("should call DataModelService isLoggedIn function", function () {
           expect(mockDataModelService.isLoggedIn).toHaveBeenCalled();
       });
    });

    describe('postMessage function',function() {
        beforeEach(function() {
            sut.messageText = MESSAGE_TEXT;
            sut.postMessage();  
        });
    
        it("should call DataModelService postMessage function", function () {
            expect(mockDataModelService.postMessage).toHaveBeenCalledWith(MESSAGE_TEXT);
        });
        
        afterEach(function() {
            expect(sut.messageText).toEqual('');
        });
    });

});
