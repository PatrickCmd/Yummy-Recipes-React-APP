const mockData = {
    signInData: {
        email: "pwalukagga@gmail.com",
        password: "pato1234"
    },
    authResponse: {
        data: {
            "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTg2MTQzNzUsImlhdCI6MTUxODUyNzk3NSwidXNlcl9pZCI6MywiZW1haWwiOiJwd2FsdWthZ2dhQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJQYXRyaWNrIiwibGFzdF9uYW1lIjoiV2FsdWthZ2dhIiwicHVibGljX2lkIjoiNzNjMzk2MWUtZWE1YS00ZDBjLTlmYjgtNjdiMmU3ZGQyMzhhIn0._v1tjLCmJAL15w-vryXOlu1RkwEzN3Jsx82To5jr-Ek",
            "message": "Successfully logged in",
            "status": "success"
        }
    },
    signUpData: {
        first_name: "Patrick",
        last_name: "Walukagga",
        email: "pwalukagga@gmail.com",
        password: "pato1234"
    },
    categories: {
        "1": {id: 1, name: "Lunch", description: "Awesome lunch"},
        "2": {id: 2, name: "Dinner", description: "Awesome dinner"},
        "3": {id: 2, name: "Supper", description: "Awesome Supper"},
    },
    recipes: {
        "1": {id: 1, name: "Lunch recipe", description: "Awesome lunch", ingredients: "food, juice", directions: "Prepare well"},
        "2": {id: 2, name: "Dinner recipe", description: "Awesome dinner", ingredients: "food, juice", directions: "Prepare well"},
        "3": {id: 2, name: "Supper recipe", description: "Awesome Supper", ingredients: "food, juice", directions: "Prepare well"},
    }
}

export default mockData;