@api
Feature: Weather Station https://openweathermap.org/stations API validations

    Scenario: Return an error when NO API Key is passed
        Given A Request <request> with <headers> and "Missing" API key
        When I send POST request to http://api.openweathermap.org/data/3.0/stations?
        Then I get a response code 401
        And the error "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."

        Examples:
            | request                                                                                                                     | headers                               |
            | {"external_id": "DEMO_TEST001","name": "Team Demo Test Station 001","latitude": 33.33,"longitude": -122.43,"altitude": 222} | { "Content-Type": "application/json"} |

    Scenario Outline:  Create and Verify station <StationId>
        Given A Request <request> with <headers> and "Valid" API key
        When I send POST request to http://api.openweathermap.org/data/3.0/stations?
        Then I get a response code 201
        When I send GET request to http://api.openweathermap.org/data/3.0/stations/{id}?
        Then I get a response code 200
        And the response body matches the request sent

        Examples:
            | request                                                                                                                     | headers                               |
            | {"external_id": "DEMO_TEST001","name": "Team Demo Test Station 001","latitude": 33.33,"longitude": -122.43,"altitude": 222} | { "Content-Type": "application/json"} |
            | {"external_id": "DEMO_TEST002","name": "Team Demo Test Station 002","latitude": 44.44,"longitude": -122.44,"altitude": 111} | { "Content-Type": "application/json"} |
