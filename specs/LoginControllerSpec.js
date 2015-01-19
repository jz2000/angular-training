describe("login controller", function () {
    var sut, mockDataModelService;

    var USER_NAME = 'USER_NAME';
    var PASSWORD = 'PASSWORD';

    beforeEach(function () {
        module("chatApp.UserSession");

        mockDataModelService = {
            isLoggedIn: jasmine.createSpy(),
            setActiveUser: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("LoginController", {
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

    describe('login function',function() {
        beforeEach(function() {
            sut.userName = USER_NAME;
            sut.password = PASSWORD;
            sut.login();  
        });
    
        it("should call DataModelService setActiveUser function", function () {
            expect(mockDataModelService.setActiveUser).toHaveBeenCalledWith(USER_NAME, PASSWORD);
        });
        
        afterEach(function() {
            expect(sut.userName).toEqual('');
            expect(sut.password).toEqual('');
        });
    });

});
