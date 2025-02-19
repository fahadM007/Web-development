# Authentication and Authorization


The term authentication refers to identifying a user. Users can be identified through multiple means, including asking about something they know, asking for something they have, or checking for something they are. In the context of web applications, passwords are often used for identification -- passwords are an instance of something the users know. Asking for something they have could involve a user's mobile phone being sent a message or a code, checking that the mobile phone is at the user's disposal. Similarly, checking for something they are could involve biometric authentication, such as using iris or fingerprint recognation, or for example checking the identity of the user through keystroke dynamics.

The term 2-factor authentication refes to using at least two means to identify the user, e.g. checking for a password and assessing whether the user has their phone by sending a code to the phone. In the context of this course, we rely on simpler means, i.e. password-based authentication.

Simple authentication
A very crude application for authentication could be as follows. The following application expects that a password is sent in the request body. If the user sends a password "very secret password", then the user is shown a message "You knew the password, you are authenticated!". Otherwise, the user is sent the HTTP status code 401, indicating bad credentials or unauthorized access, and the text "Invalid password, you are not authenticated!".