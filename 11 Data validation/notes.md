# Starting with Validation

* Learning objectives*
You know what data validation is.
You understand the utility of validating data on the client and validating data on the server.
You understand why validating data only on client is not a good practice.


![Data validation link](https://www.linkedin.com/advice/0/what-most-common-data-validation-techniques-web-development-yvfef[])

At this point, we've learned to work with forms and stored submitted data to a key-value storage. When storing the data, we have not, however, been concerned with the correctness or the validity of the data. For example, we have not cared whether submitted form data has been empty or not.

## Verifying that data is in expected format.

Is the process of checking the accuracy and quality of source data before using , importing or otherwise processing data. 

Verifying the data type, e.g. numeric fields should only accept numeric data and email addresses should be formatted like email addresses.
Checking the input data against a known list of accepted values, e.g. when entering country information, colors, or other enumerable data.
Checking that numeric data falls within a range, e.g. when entering a year of birth, depending on the application, it is meaningful to verify that the year of birth has four digits and cannot be in the future.
Checking that the data follows a specific format, e.g. the Finnish social security number has 11 characters, which encode date of birth and gender; similarly, dates are formatted differently in different countries.
Checking for uniqueness, e.g. verifying that a specific email should be entered only once to a list of emails.

## Locations for data validation

types of data validation that are common 

1. client side validation 
2. server side validation 
3. database validation 

* client side validation:refers to verifying that the users type in data in a specific format. This is done with specific input fields as well as with client-side JavaScript. In practice, client-side validation is done for usability -- anyone who knows a bit about how the web works can bypass client-side data validation and send invalid data to the server.

* server side validation is verify the data that is sent to the server follows a specific rule.
in practice this is added to the the functions that handle the request . it may also include verifying that data sent from the server to the user is valid.

* data validation in the database  this refers to verifying that the data stored in the database follows the correct format With relational databases


**Our focus is mostly on server-side data validation.**


**Validation on the serve**