# Inlaze Automation Testing Project

This project contains automated tests for the login, registration, and basic functionalities of the **Inlaze Test Project** ([Visit Website](https://test-qa.inlaze.com/)). The tests are developed using [Cypress](https://www.cypress.io/) to ensure the reliability of the core features.

---

## 🚀 Features Tested

### 1. **Login Functionality**
- Users can log in with valid credentials.  
- All required fields must be filled to successfully log in.  

### 2. **Registration Functionality**
- Users must provide:  
  - Full name (at least two words).  
  - Password (minimum 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character).  
  - Email with proper syntax.  
- All fields are mandatory to complete the registration.  
- Email must be unique.  
- Password must be confirmed by entering it twice, ensuring both entries match.  

### 3. **Homepage Functionalities**
- Displays the username of the logged-in user.  
- Allows users to sign out successfully.  

---

## 🛠️ How to Run Tests

Follow these steps to set up and execute the automated tests:

1. **Clone the Repository**  
Clone the repository and navigate to the project directory:  
```bash
git clone <repository-url>
cd <repository-directory>
```
2. **Install Dependencies**
```bash
npm install
```
3. **Run Cypress**
```bash
npx cypress run
```
## 🐞 Bug Reports
Below are the reported bugs during testing:
- **Invalid Email Validation**: The email fields in both the Register and Login components accept invalid values such as "sas", "mi", and "@gmail.com".
- **Duplicate Email Registration**: The system allows the registration of emails that are already registered.
- **Invalid Password Validation**: The password fields in both the Register and Login components accept passwords with fewer than 8 characters or without any special characters.

For detailed bug reports, refer to the linked Jira board below.

## 📋 Test Cases
The following test cases are automated in this project:
### Login
- Test Case 1: Login with valid credentials.
- Test Case 2: Login with an unregistered email.
- Test Case 3: Login with a registered email and an incorrect password.
- Test Case 4: Login with empty input fields: Scenarios for empty email and password fields.
### Menu
- Test Case 5: Sign out from the menu.
- Test Case 6: Verify the user's full name is displayed in the menu.
### Register
- Test Case 7: Register with valid credentials.
- Test Case 8: Register with an invalid name (single word).
- Test case 9: Register with an invalid email format.
- Test case 10: Register with an invalid password: Scenarios include passwords with less than 8 characters, without an uppercase letter, without a lowercase letter, without numbers, and without special characters.
- Test case 11: Register with a password that does not match the confirmation password.
- Test case 12: Register with empty input fields: Scenarios for empty email, name, password, and confirmation password fields.


## 🔗 Additional Resources
- Jira Board: Test Cases and Bug Reports
- Cypress Documentation: https://docs.cypress.io