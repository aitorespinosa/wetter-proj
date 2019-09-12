Feature: As new User I want to select a city

Scenario: I want to see the main page
    Given I am on the "splash"
    When I fill "city" field with "Madrid"
    And I click "intro" on keyboard
    Then I should be redirected on "main page"