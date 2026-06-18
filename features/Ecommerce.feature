Feature: Ecommerce Validations

   Scenario: Placing the order
    Given : A Login to Ecommerce application using "nemishra2295@gmail.com" and "22041995@April"
    When Add "Zara Coat 3" to Cart
    Then Check "Zara Coat 3" is displayed in the Cart
    When Enter valid details and Place the order
    Then Verify odrer is present in the OrderHistory