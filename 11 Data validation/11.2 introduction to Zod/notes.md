# Introduction to Zod

Learning objectives
You know of the Zod validation library and know how to use Zod to validate data.
You know of some of the validation primitives that Zod offers.
You know what coercion is and what it is used for.


Zod is the validation libarary that is based on the notaion pre defining the expected data format 

**the schema**

after the schema has been defined it can be used to validate provided input.



# Coercion


z.object()
├── shape                           # The shape (properties) of the object schema
│   ├── {                         # Example shape for an object
│   │   ├── name: z.string()       # Example: String property
│   │   ├── age: z.number()        # Example: Number property
│   │   └── email: z.string().email()  # Example: String property with email validation
│   └── }
├── methods
│   ├── .pick()                    # Creates a new schema with selected properties
│   │   ├── Example: personSchema.pick({ name: true })  # Only includes 'name'
│   ├── .omit()                    # Creates a new schema without certain properties
│   │   ├── Example: personSchema.omit({ email: true })  # Excludes 'email' property
│   ├── .extend()                  # Adds new properties or modifies existing ones
│   │   ├── Example: personSchema.extend({ phone: z.string() })  # Adds 'phone' property
│   ├── .partial()                 # Makes all properties optional
│   │   ├── Example: personSchema.partial()  # Makes 'name', 'age', 'email' optional
│   ├── .required()                # Makes all properties required
│   │   ├── Example: personSchema.required()  # Ensures all properties are required
│   ├── .strict()                  # Makes the object strict (no extra properties allowed)
│   │   ├── Example: personSchema.strict()  # Disallows any other properties besides defined ones
│   ├── .refine()                  # Adds custom validation to the object schema
│   │   ├── Example: personSchema.refine(val => val.age >= 18, { message: "Age must be 18 or older" })
│   ├── .superRefine()             # More advanced version of refine(), for detailed errors
│   │   ├── Example: personSchema.superRefine((val, ctx) => { if (val.age < 18) ctx.addIssue({ message: 'Age must be at least 18' }); })
│   ├── .transform()               # Allows transforming the result after validation
│   │   ├── Example: personSchema.transform(data => ({ ...data, isAdult: data.age >= 18 }))
├── properties
│   ├── .string()                  # Validates string properties
│   │   ├── Example: z.string()    # Ensures the property is a string
│   ├── .number()                  # Validates number properties
│   │   ├── Example: z.number()    # Ensures the property is a number
│   ├── .boolean()                 # Validates boolean properties
│   │   ├── Example: z.boolean()   # Ensures the property is a boolean
│   ├── .date()                    # Validates date properties
│   │   ├── Example: z.date()      # Ensures the property is a date object
│   ├── .array()                   # Validates array properties
│   │   ├── Example: z.array(z.string())  # Ensures the property is an array of strings
│   ├── .object()                  # Validates nested objects
│   │   ├── Example: z.object({ nested: z.string() })  # Validates a nested object
│   ├── .literal()                 # Validates that the property is a specific value (literal)
│   │   ├── Example: z.literal(42)  # Ensures the property is exactly 42
│   ├── .enum()                    # Validates that the property is one of the given enum values
│   │   ├── Example: z.enum(['small', 'medium', 'large'])  # Validates that the property is one of the enum values
│   ├── .any()                     # Validates any type (i.e., no specific type enforcement)
│   │   ├── Example: z.any()       # Accepts any value without validation
│   ├── .unknown()                 # Validates unknown (undefined) type
│   │   ├── Example: z.unknown()   # Accepts undefined values or types that are not specifically checked
│   ├── .union()                   # Validates if the value matches one of several types
│   │   ├── Example: z.union([z.string(), z.number()])  # Validates that the property is either a string or a number
│   ├── .intersect()               # Validates if the value matches the intersection of two schemas
│   │   ├── Example: z.intersect([z.object({ name: z.string() }), z.object({ age: z.number() })])  # Validates both 'name' and 'age'
│   ├── .optional()                # Makes the property optional
│   │   ├── Example: z.string().optional()  # Makes the string property optional
│   ├── .nullable()                # Allows the property to be null
│   │   ├── Example: z.string().nullable()  # Allows the string property to be null
│   ├── .default()                 # Specifies a default value for the property if it’s undefined
│   │   ├── Example: z.string().default('Anonymous')  # Default value is 'Anonymous' if no value is provided
│   ├── .refine()                  # Adds custom validation to a single property
│   │   ├── Example: z.string().refine(val => val.length > 3, { message: 'String must be longer than 3 characters' })
│   └── .superRefine()             # Advanced version of .refine() that adds issues with more control
│       ├── Example: z.string().superRefine((val, ctx) => { if (val.length < 5) ctx.addIssue({ message: 'String is too short' }) })
├── static methods
│   ├── .create()                  # Instantiates a Zod object schema
│   ├── .merge()                   # Merges two object schemas into one
│   └── .intersection()             # Combines two schemas into a single schema
└── other utility methods
    ├── .is()                       # Checks if the value is valid according to the schema
    ├── .parse()                    # Parses the value according to the schema and returns the parsed value
    ├── .safeParse()                # Parses the value and returns a result with error handling
    ├── .catch()                    # Catches errors and provides fallback value or message
    └── .refine()                   # For refining the validation logic


we using 