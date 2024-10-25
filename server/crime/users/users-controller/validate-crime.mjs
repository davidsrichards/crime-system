export const crimeValidator = {
    description: {
        isLength: {
            options: {
                min: 20,
                max: 500,
            },
            errorMessage: "description must be greater than 20 and less that 500 characters"
        }
    },
    street: {
        isEmpty: {
            errorMessage: 'street must not be empty'
        }
    },
    city: {
        isEmpty: {
            errorMessage: 'street must not be empty'
        }
    },
    address: {
        isEmpty: {
            errorMessage: 'street must not be empty'
        }
    },
    contact: {
        isEmpty: {
            errorMessage: 'street must not be empty'
        }
    }
}