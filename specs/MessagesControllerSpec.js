describe("messages controller", function () {
    var sut, mockDataModelService;

    beforeEach(function () {
        module("chatApp.MessageList");

        mockDataModelService = {
            getMessages: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("MessagesController", {
            $scope: sut,
            DataModelService: mockDataModelService
        });
    }));
    
    it("should call DataModelService getMessages function", function () {
        expect(mockDataModelService.getMessages).toHaveBeenCalled();
    });

});

