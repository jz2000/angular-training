describe("data model service", function () {
    var sut;

    var ACTIVE_USER_NAME = 'ACTIVE_USER_NAME';
    var MESSAGE_TEXT = 'MESSAGE_TEXT';

    beforeEach(function () {
        module("chatApp.DataModel");
    });

    beforeEach(inject(function (DataModelService) {
        sut = DataModelService;
    }));

    it("will return 100 users", function () {
        expect(sut.getUsers().length).toBe(100);
    });

    it("will return 1000 messages", function () {
        expect(sut.getMessages().length).toBe(1000);
    });

    it("will be not logged in", function () {
        expect(sut.isLoggedIn()).toBe(false);
    });

    it("won't have an active user", function () {
        expect(sut.getActiveUser()).toBe(null);
    });
    
    describe('setActiveUser function', function() {
        beforeEach(function() {
            sut.setActiveUser(ACTIVE_USER_NAME);
        });
        
        it("should be logged in", function() {
            expect(sut.isLoggedIn()).toBe(true);
        });

        it("active user must be set", function() {
            //expect(sut.getActiveUser()).toBeNot(null);
        });

        it("active user name must be valid", function() {
            expect(sut.getActiveUser().userName).toBe(ACTIVE_USER_NAME);
        });

        it("will return 100+1 users", function () {
            expect(sut.getUsers().length).toBe(101);
        });

    });

    describe('postMessage function', function() {
        beforeEach(function() {
            sut.setActiveUser(ACTIVE_USER_NAME);
            sut.postMessage(MESSAGE_TEXT);
        });
        
        it("will return 1000+1 messages", function () {
            expect(sut.getMessages().length).toBe(1001);
        });

        it("last message text must be known", function () {
            expect(sut.getMessages()[sut.getMessages().length - 1].messageText).toBe(MESSAGE_TEXT);
        });

        it("last message user's name must be active user's", function () {
            expect(sut.getMessages()[sut.getMessages().length - 1].user.userName).toBe(ACTIVE_USER_NAME);
        });

    });
});