Feature: Test log in
    Test log in
    @focus 
    Scenario: Incorrect credentials
    Given I visit the login page 
    When I type in a random username and password
    Then I should see the error message and stay on the same page