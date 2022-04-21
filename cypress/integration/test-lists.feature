Feature: Test list interactions
    Testing different interactions with list component
    @focus 
    Scenario: Add item to list
    Given I visit the site localhost
    When I add an item to the todo list
    Then The item I added should appear in the list
    @focus 
    Scenario: Mark item on list as complete
    Given I click a list item to mark it as complete
    Then The item should have the class completed
    @focus 
    Scenario: Remove item from list
    Given I click the red x on a todo item
    Then The item I removed should no longer be in the list
    @focus 
    Scenario: List state stays same after page refresh
    Given I add items to the list
    And I refresh the page
    Then The list stays in the same state and same order
    #Extra credit***
    @focus 
    Scenario: Reorder the list
    Given I click and drag the bottom list item to the top
    Then The item should be the first item in the list