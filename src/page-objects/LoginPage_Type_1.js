

const USER_NAME_TXTBX = '#username';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDisplayed(15000);
    }
    get username() {
        return $(USER_NAME_TXTBX);

    }

    get password() {
        return $(PASSWORD_TXTBX);
    }

    get loginBtn() {
        return $(LOGIN_BTN);

    }
}

module.exports =new LoginPage();