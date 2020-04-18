# Deliah-Restó API

Esta API fue desarrollada en el marco del tercer proyecto de la "carrera" de desarrollo web full stack de Acamica.

## Stack Tecnológico

- Node.js
- Express.js
- Jest
- Mongo DB
- Mongoose
- Swagger UI
- Awilix Dependency Injection
- GIT para control de versiones
- Postman

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

## Error Responso Format

    {
      "status" : 404,
      "message" : "Resource not found"
    }

## API Endpoints

### Autenticacion

#### POST /auth/signup

Url: https://deliah-api.herokuapp.com/vi/api/auth/signup

Ejemplo del cuerpo de la peticion:

    {
        "username": "user",
        "fullname": "Common User",
        "email": "comUser@gmail.com",
        "phone": "3514121232",
        "password": "user"
    }

#### POST /auth/login

Url: https://deliah-api.herokuapp.com/vi/api/auth/signup

Ejemplo del cuerpo de la peticion:

    {
        "username": "user",
        "fullname": "Common User",
        "email": "comUser@gmail.com",
        "phone": "3514121232",
        "password": "user"
    }

Ejemplo de respuesta:

    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJpZCI6IjVlOWExYzc2OWU4YTc4MDAxNzgyNTU5NCIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE1ODcyMjMyNjcsImV4cCI6MTU4NzIzNzY2N30.f0W9YNh7BLzZgKoc6krqNj5Ge0lHLVk9nNVZ5b3F6UA",
        "user": {
            "isAdmin": true,
            "\_id": "5e9a1c769e8a780017825594",
            "username": "admin",
            "fullname": "Adminitrator",
            "email": "admin@gmail.com",
            "phone": "3514121232",
            "\_\_v": 0
        }
    }

### Uuarios

#### GET /users

Url: https://deliah-api.herokuapp.com/vi/api/users

Ejemplo de respuesta:

    [
        {
            "isAdmin": false,
            "_id": "5e9a1b839e8a780017825593",
            "username": "user",
            "fullname": "User without admin priviledges",
            "email": "comUser@gmail.com",
            "phone": "3514121232",
            "_v": 0
        },
        {
            "isAdmin": true,
            "_id": "5e9a1c769e8a780017825594",
            "username": "admin",
            "fullname": "Adminitrator",
            "email": "admin@gmail.com",
            "phone": "3514121232",
            "_v": 0
        }
    ]

### GET /users/[id]

Url: https://deliah-api.herokuapp.com/vi/api/users/[id]

Ejemplo de respuesta:

    {
        "isAdmin": true,
        "_id": "5e9a1c769e8a780017825594",
        "username": "admin",
        "fullname": "Adminitrator",
        "email": "admin@gmail.com",
        "phone": "3514121232",
        "_v": 0
    }

### Productos

#### GET /products

Url: https://deliah-api.herokuapp.com/vi/api/products

Ejemplo de respuesta:

    [
        {
            "_id": "5e9a1eb89e8a780017825595",
            "name": "Coca Cola",
            "price": 58,
            "__v": 0
        },
        {
            "_id": "5e9a1eea9e8a780017825596",
            "name": "Pizza",
            "price": 260,
            "__v": 0
        },
        {
            "_id": "5e9a1ef89e8a780017825597",
            "name": "Lomito Simple",
            "price": 300,
            "__v": 0
        }
    ]

#### GET /products/[id]

Url: https://deliah-api.herokuapp.com/vi/api/products/[id]

Ejemplo de respuesta:

    {
        "_id": "5e9a1ef89e8a780017825597",
        "name": "Lomito Simple",
        "price": 300,
        "_v": 0
    }

#### POST /products/

Url: https://deliah-api.herokuapp.com/vi/api/auth/products

Ejemplo del cuerpo de la peticion:

    {
        "name": "Coca Cola",
        "price": 58
    }

Ejemplo de respuesta:

    {
        "_id": "5e9a1ef89e8a780017825597",
        "name": "Coca Cola",
        "price": 58,
        "_v": 0
    }

#### PATCH /products/[id]

Url: https://deliah-api.herokuapp.com/vi/api/auth/products/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

    {
        "price": 100
    }

Ejemplo de respuesta:

    {
        "_id": "5e9a1ef89e8a780017825597",
        "name": "Coca Cola",
        "price": 100,
        "_v": 0
    }

#### DELETE /products/[id]

Url: https://deliah-api.herokuapp.com/vi/api/auth/products/[id]

Ejemplo de respuesta: true

### Ordenes

#### GET /orders

Url: https://deliah-api.herokuapp.com/vi/api/orders

Ejemplo de respuesta:

    [
        {
            "orderStatus": "recieved",
            "_id": "5e9a22379e8a78001782559c",
            "user": {
                "isAdmin": false,
                "_id": "5e9a1b839e8a780017825593",
                "username": "user",
                "fullname": "User without admin priviledges",
                "email": "comUser@gmail.com",
                "phone": "3514121232",
                "__v": 0
            },
            "cart": [
                {
                    "quantity": 1,
                    "_id": "5e9a22379e8a78001782559d",
                    "product": {
                        "_id": "5e9a1eb89e8a780017825595",
                        "name": "Coca Cola",
                        "price": 58,
                        "__v": 0
                    }
                },
                {
                    "quantity": 1,
                    "_id": "5e9a22379e8a78001782559e",
                    "product": {
                        "_id": "5e9a1eea9e8a780017825596",
                        "name": "Pizza",
                        "price": 260,
                        "__v": 0
                    }
                }
            ],
            "paymentMethod": "cash",
            "date": "2020-04-17T21:40:07.211Z",
            "__v": 0
        }
    ]

#### GET /orders/[id]

Url: https://deliah-api.herokuapp.com/vi/api/orders/[id]

Ejemplo de respuesta:

    {
        "orderStatus": "recieved",
        "\_id": "5e9a22379e8a78001782559c",
        "user": {
            "isAdmin": false,
            "\_id": "5e9a1b839e8a780017825593",
            "username": "user",
            "fullname": "User without admin priviledges",
            "email": "comUser@gmail.com",
            "phone": "3514121232",
            "**v": 0
        },
        "cart": [
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559d",
                "product": {
                    "\_id": "5e9a1eb89e8a780017825595",
                    "name": "Coca Cola",
                    "price": 58,
                    "**v": 0
            }
            },
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559e",
                "product": {
                    "\_id": "5e9a1eea9e8a780017825596",
                    "name": "Pizza",
                    "price": 260,
                    "**v": 0
            }
            }
        ],
        "paymentMethod": "cash",
        "date": "2020-04-17T21:40:07.211Z",
        "**v": 0
        }

    #### POST /orders/

    Url: https://deliah-api.herokuapp.com/vi/api/auth/orders

    Ejemplo del cuerpo de la peticion:

    {
        "user": "5e9a1b839e8a780017825593",
        "cart": [
            {
                "product": "5e9a1eb89e8a780017825595",
                "quantity": 1
            },
            {
                "product": "5e9a1eea9e8a780017825596",
                "quantity": 1
            }
        ],
        "paymentMethod": "cash"
    }

    Ejemplo de respuesta:

    {
        "orderStatus": "recieved",
        "\_id": "5e9a22379e8a78001782559c",
        "user": {
            "isAdmin": false,
            "\_id": "5e9a1b839e8a780017825593",
            "username": "user",
            "fullname": "User without admin priviledges",
            "email": "comUser@gmail.com",
            "phone": "3514121232",
            "**v": 0
        },
        "cart": [
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559d",
                "product": {
                    "\_id": "5e9a1eb89e8a780017825595",
                    "name": "Coca Cola",
                    "price": 58,
                    "**v": 0
            }
            },
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559e",
                "product": {
                    "\_id": "5e9a1eea9e8a780017825596",
                    "name": "Pizza",
                    "price": 260,
                    "**v": 0
            }
            }
        ],
        "paymentMethod": "cash",
        "date": "2020-04-17T21:40:07.211Z",
        "**v": 0
        }

#### PATCH /orders/[id]

Url: https://deliah-api.herokuapp.com/vi/api/auth/orders/[id]

Ejemplo del cuerpo de la peticion para actualizar el precio:

    {
        "orderStatus": "preparing"
    }

Ejemplo de respuesta:

    {
        "orderStatus": "preparing",
        "\_id": "5e9a22379e8a78001782559c",
        "user": {
            "isAdmin": false,
            "\_id": "5e9a1b839e8a780017825593",
            "username": "user",
            "fullname": "User without admin priviledges",
            "email": "comUser@gmail.com",
            "phone": "3514121232",
            "**v": 0
        },
        "cart": [
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559d",
                "product": {
                    "\_id": "5e9a1eb89e8a780017825595",
                    "name": "Coca Cola",
                    "price": 58,
                    "**v": 0
                }
            },
            {
                "quantity": 1,
                "\_id": "5e9a22379e8a78001782559e",
                "product": {
                    "\_id": "5e9a1eea9e8a780017825596",
                    "name": "Pizza",
                    "price": 260,
                    "**v": 0
                }
            }
        ],
        "paymentMethod": "cash",
        "date": "2020-04-17T21:40:07.211Z",
        "**v": 0

}

#### DELETE /orders/[id]

Url: https://deliah-api.herokuapp.com/vi/api/auth/orders/[id]

Ejemplo de respuesta:

true
