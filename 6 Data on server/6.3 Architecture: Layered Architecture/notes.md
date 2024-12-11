# Architecture: Layered Architecture

Learning objectives
You know the concept layered architecture.
You know how to divide an application into layers.

>layered architecture refers to organizing code into layers that each have their own responsibility within the application
>The term layer refers to a group of related functionality that is separated from other functionality in the application
>The term architecture refers to the overall structure of the application

### Layers in an application


They are organized horizontally and implementation details below are abstracted away.

The layers only communicate within the layers and with the layers below them. 
call the functions exposed by the layers below them

communication with the above layers is not allowed lower layers must not call a function of an above layer 

in web development we sue the terms `view` and `service` instead of presentation and business logic in addition a layer of `controller` is often added to the architecture which is responsible for handling incoming requests and directing them to the correct functionality.

