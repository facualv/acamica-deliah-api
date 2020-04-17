# White House Web API Standards

- [Guidelines](#guidelines)
- [Pragmatic REST](#pragmatic-rest)
- [RESTful URLs](#restful-urls)
- [HTTP Verbs](#http-verbs)
- [Responses](#responses)
- [Error handling](#error-handling)
- [Versions](#versions)
- [Record limits](#record-limits)
- [Request & Response Examples](#request--response-examples)
- [Mock Responses](#mock-responses)
- [JSONP](#jsonp)

## Guidelines

### General guidelines for RESTful URLs

- A URL identifies a resource.
- URLs should include nouns, not verbs.
- Use plural nouns only for consistency (no singular nouns).
- Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements.
- You shouldn’t need to go deeper than resource/identifier/resource.
- Put the version number at the base of your URL, for example http://example.com/v1/path/to/resource.
- URL v. header:
  - If it changes the logic you write to handle the response, put it in the URL.
  - If it doesn’t change the logic for each response, like OAuth info, put it in the header.
- Specify optional fields in a comma separated list.
- Formats should be in the form of api/v2/resource/{id}.json

## HTTP Verbs

| HTTP METHOD         | POST                          | GET               | PUT            | DELETE         |
| ------------------- | ----------------------------- | ----------------- | -------------- | -------------- |
| CRUD OP             | CREATE                        | READ              | UPDATE         | DELETE         |
| /signup             | Create new user               | Error             | Error          | Error          |
| /login              | Return token with credentials | Error             | Error          | Error          |
| /user               | Error                         | List All Users    | Error          | Error          |
| /user/:userId       | Error                         | Show User         | Update User    | Delete User    |
| /product            | Create new product            | List All Products | Error          | Error          |
| /product/:productId | Error                         | Show Product      | Update Product | Delete Product |
| /order              | Create new order              | List All orders   | Error          | Error          |
| /order/:orderId     | Error                         | Show order        | Update order   | Delete order   |

(Example from Web API Design, by Brian Mulloy, Apigee.)

## Error handling

Error responses include a common HTTP status code and a message for the end-user. For example:

    {
      "status" : 404,
      "message" : "Resource not found"
    }

## Request & Response

### API Resources

- [GET /magazines](#get-magazines)
- [GET /magazines/[id]](#get-magazinesid)
- [POST /magazines/[id]/articles](#post-magazinesidarticles)

### GET /magazines

Example: http://example.gov/api/v1/magazines.json

Response body:

    {
        "metadata": {
            "resultset": {
                "count": 123,
                "offset": 0,
                "limit": 10
            }
        },
        "results": [
            {
                "id": "1234",
                "type": "magazine",
                "title": "Public Water Systems",
                "tags": [
                    {"id": "125", "name": "Environment"},
                    {"id": "834", "name": "Water Quality"}
                ],
                "created": "1231621302"
            },
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Elementary"},
                    {"id": "834", "name": "Charter Schools"}
                ],
                "created": "126251302"
            }
            {
                "id": 2351,
                "type": "magazine",
                "title": "Public Schools",
                "tags": [
                    {"id": "125", "name": "Pre-school"},
                ],
                "created": "126251302"
            }
        ]
    }

### GET /magazines/[id]

Example: http://example.gov/api/v1/magazines/[id].json

Response body:

    {
        "id": "1234",
        "type": "magazine",
        "title": "Public Water Systems",
        "tags": [
            {"id": "125", "name": "Environment"},
            {"id": "834", "name": "Water Quality"}
        ],
        "created": "1231621302"
    }

### POST /magazines/[id]/articles

Example: Create – POST http://example.gov/api/v1/magazines/[id]/articles

Request body:

    [
        {
            "title": "Raising Revenue",
            "author_first_name": "Jane",
            "author_last_name": "Smith",
            "author_email": "jane.smith@example.gov",
            "year": "2012",
            "month": "August",
            "day": "18",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ante ut augue scelerisque ornare. Aliquam tempus rhoncus quam vel luctus. Sed scelerisque fermentum fringilla. Suspendisse tincidunt nisl a metus feugiat vitae vestibulum enim vulputate. Quisque vehicula dictum elit, vitae cursus libero auctor sed. Vestibulum fermentum elementum nunc. Proin aliquam erat in turpis vehicula sit amet tristique lorem blandit. Nam augue est, bibendum et ultrices non, interdum in est. Quisque gravida orci lobortis... "
        }
    ]

## Mock Responses

It is suggested that each resource accept a 'mock' parameter on the testing server. Passing this parameter should return a mock data response (bypassing the backend).

Implementing this feature early in development ensures that the API will exhibit consistent behavior, supporting a test driven development methodology.

Note: If the mock parameter is included in a request to the production environment, an error should be raised.
