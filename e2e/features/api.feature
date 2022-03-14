@api
Feature: Weather Station https://openweathermap.org/stations API validations

    Scenario: Return an error when NO API Key is passed
        Given A Request
            ```
            {
            "external_id": <Id>,
            "name": <StationId>,
            "latitude": <latitude>,
            "longitude": <longitude>,
            "altitude": <altitude>
            }
            ```
        And headers: <headers>
        And "Missing" API key
        When I send POST request to http://api.openweathermap.org/data/3.0/stations?
        Then I get a response code 401
        And the error "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."

        Examples:
            | StationId      | Id                           | latitude | longitude | altitude | headers                               |
            | "DEMO_TEST001" | "Team Demo Test Station 001" | 33.33    | -122.43   | 222      | { "Content-Type": "application/json"} |

    Scenario Outline:  Create and Verify station <StationId>
        Given A Request
            ```
            {
                "external_id": <Id>,
                "name": <StationId>,
                "latitude": <latitude>,
                "longitude": <longitude>,
                "altitude": <altitude>
            }
            ```
        And headers: <headers>
        And "Valid" API key
        When I send POST request to http://api.openweathermap.org/data/3.0/stations?
        Then I get a response code 201
        When I send GET request to http://api.openweathermap.org/data/3.0/stations/{id}?
        Then I get a response code 200
        And the response body matches the request sent

        Examples:
            | StationId      | Id                           | latitude | longitude | altitude | headers                               |
            | "DEMO_TEST001" | "Team Demo Test Station 001" | 33.33    | -122.43   | 222      | { "Content-Type": "application/json"} |
            | "DEMO_TEST002" | "Team Demo Test Station 002" | 44.44    | -122.44   | 111      | { "Content-Type": "application/json"} |

