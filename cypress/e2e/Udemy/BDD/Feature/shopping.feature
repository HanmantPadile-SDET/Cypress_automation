Feature: End to End shopping experiece

Feature Description
@regression
Scenario: checkout with multiple products

Given User in on home page
When User clicks on shop 
And adds items to the cart
And click on checkout
And validating the total price
Then Select country and submit the order should be success

@smoke
Scenario: Filling the form to shop
Given User in on home page
When User fills form details
    |name  | gender   |
    |bob   | Female   |

And validates the forms behavior
Then Select the shop page




    