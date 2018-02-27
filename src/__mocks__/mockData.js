const mockData = {
    signInData: {
        email: "pwalukagga@gmail.com",
        password: "pato1234"
    },
    authResponse: {
        data: {
            "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTEyODU1MjEsImlhdCI6MTUxOTc0OTUyMSwidXNlcl9pZCI6NCwiZW1haWwiOiJwYXRyaWNrLndhbHVrYWdnYUBhbmRlbGEuY29tIiwiZmlyc3RfbmFtZSI6IlBhdHJpY2siLCJsYXN0X25hbWUiOiJXYWx1a2FnZ2EiLCJwdWJsaWNfaWQiOiJiYjFkNTFlMC0xNGIzLTQyMjAtYmU0NS0zOTdhZTViZTlkOTAifQ.a624_Hg_ElxuGvqUHhhRWbhwGg4uSd9EU9Glq7oCuik",
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
    regResponse: {
        message: "Successfully registered",
        status: "success"
    },
    logoutResponse: {
        message: "User has logged out successfully.",
        status: "success"
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