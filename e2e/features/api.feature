Feature: Weather Station https://openweathermap.org/stations API validations

    Scenario: Return an error when NO API Key is passed
        Given A <request> with missing API Key
        When I send POST request to <url>
        Then I get a response code 401
        And the error "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        
        Examples:
            | request                                                                                                                     | url                                 |
            | {"external_id": "DEMO_TEST001","name": "Team Demo Test Station 001","latitude": 33.33,"longitude": -122.43,"altitude": 222} | https://openweathermap.org/stations |