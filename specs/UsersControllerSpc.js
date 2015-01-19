describe("users controller", function () {
    var sut, mockDataModelService;

    beforeEach(function () {
        module("chatApp.UserList");

        mockDataModelService = {
            getUsers: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("UsersController", {
            $scope: sut,
            DataModelService: mockDataModelService
        });
    }));
    
    it("should call DataModelService getUsers function", function () {
        expect(mockDataModelService.getUsers).toHaveBeenCalled();
    });

});
