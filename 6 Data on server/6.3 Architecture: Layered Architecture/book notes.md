# Architecture: Layered Architecture

* Learning objectives
* You know the concept layered architecture.
* You know how to divide an application into layers.

what is layered architecture? 

>**all architectures are a product of their context**

1 Architecture characteristics 
2 Architecture decisions 
3 design principles 
4 Architecture styles used 

what is software architecture 

In this definition software architecture consists of the **structure of the system**.
combined with **architecture characteristics** the system must support **architecture decisions** and finally **design principles**

when we ara talking about the structure of the system we are talking about the **architecture style**

**architecture style**

Software architecture styles (or patterns) are high-level structures that define the organization and interaction of components within a system

1. Layered (n-Tier) Architecture
Definition: Divides the system into layers, each with a distinct responsibility, like presentation (UI), business logic, data access, and data storage.
Use Case: Common in enterprise applications with clear separation of concerns.
Pros: Easy to develop and maintain due to modularity and separation of concerns.
Cons: Performance can suffer if each request needs to pass through multiple layers.

![Architecture style used](./images/Architecture%20characteristics.png/)

**Architecture characteristics**

This defines the success criteria of a system which generally orthogonal to functionality of the system 

>orthogonal statistically independent or dont effect one another in terms of outcome 

>This defines the success criteria of a system which generally dont effect one another in terms of functionality of the system 

`ilities` refers to non functional qualities or attributes that a system should exhibt These attributes often end in "-ility" (hence the name) and are essential for meeting user expectations beyond basic functionality. They focus on how well a system performs, scales, maintains, and integrates over time.

![Architecture characteristics ](./Architecture%20characteristics.png)

**Architecture decisions**

its defines the rules for how a system should be constructed 

* This forms the constrains of the system 

* it direct the development teams on what is and what is not allowed

![Acchitecture decisions](./Architeture%20decisions.png);

f a particular architecture decision cannot be implemented in one part of the system
due to some condition or other constraint, that decision (or rule) can be broken
through something called a variance.

what is **variance** 

short term variance helps us understand how much thing differ from one another 
wheter in data sets financial returs or  

It refers to how different parts ofa program or system behave or perform under different conditions. 

**design principles**

this are fundamental guidlines that help architects adn developers create system that are effective maintainble and scalable   

# Key Design Principles

## Separation of Concerns
- **Definition**: Different parts of the system should address separate concerns or responsibilities.
- **Purpose**: This makes the system easier to understand, maintain, and develop, as changes in one area won’t affect others.

## Single Responsibility Principle
- **Definition**: A module or class should have only one reason to change, meaning it should have only one job or responsibility.
- **Purpose**: This reduces complexity and enhances the maintainability of the system.

## Modularity
- **Definition**: The system should be divided into smaller, independent modules or components.
- **Purpose**: This allows for easier testing, debugging, and scaling. Each module can be developed and deployed separately.

## Abstraction
- **Definition**: Hide complex implementation details and expose only the necessary parts to the user.
- **Purpose**: This simplifies interaction with the system and reduces complexity.

## Encapsulation
- **Definition**: Keep the internal state of an object hidden from the outside world and provide access through well-defined interfaces.
- **Purpose**: This protects the integrity of the data and prevents unintended interference.

## Reusability
- **Definition**: Design components that can be reused in different parts of the system or in other projects.
- **Purpose**: This saves time and resources and promotes consistency across the system.

## Scalability
- **Definition**: The system should be designed to handle increased load without significant changes to the architecture.
- **Purpose**: This ensures that the system can grow with the business needs and user demands.

## Flexibility
- **Definition**: The architecture should allow for changes and extensions without requiring a complete redesign.
- **Purpose**: This enables the system to adapt to new requirements or technologies over time.

## Loose Coupling
- **Definition**: Components should be as independent as possible so that changes in one component have minimal impact on others.
- **Purpose**: This enhances maintainability and makes it easier to replace or modify components.

## High Cohesion
- **Definition**: Related functionalities should be grouped together in a single module or component.
- **Purpose**: This makes the system easier to understand and maintain, as each module has a clear purpose.


## architecture style 

### Architecture: Layered Architecture


what is layerd architecture 

organizing code inot layers that each have their own responsibilities within the application. 

The term **_layered_** refers to a group of related functionality that is separated from other functionality in the application. 

the term **_architecture_** refers to the overall structure of the application. 


# _Layered Architecture_

Its mostly know as the `n-tier` architecture pattern.

This mostly traditional it communication and organizational structures found in companies 

**Pattern Description**

components within the layered architecture pattern are organized in to horizontal layers each layer performing a specific role.
with in the application

does not specify the number of layers that must exist in the pattern 

most layered architecture consist of four standard layers 

* presentation
* business
* persis‐tence
* database 

In some cases, the business layer
and persistence layer are combined into a single business layer, particularly when the persistence logic

Each layer of the layered architecture pattern has a specific role
and responsibility within the application

One of the powerful features of the layered architecture pattern is
the _**separation of concerns**_ among component.

components within specific layer deal only with logic that pertains to that layer. 

example components in the presentation layer deal only with presentation logic where in business layer deal with business logic. 

this makes building effective roles and responsibilities models into your architecture and also makes it easy to develop, test, govern,
and maintain applications using this architecture pattern due to
well-defined component interfaces and limited component scope.

## Key Concepts

a **closed layer** means that a request moves from layer to layer 
its must pass to each layer to go to the next layer. 


![closed layer and request acces ](./Closed%20layer%20and%20request%20access.png)

For example, a request origi‐
nating from the presentation layer must first go through the busi‐
ness layer and then to the persistence layer before finally hitting the database layer.

*why not allow presentation layer direct acces to the persistenc layer or database layer ?*

the answe lies in the concept known as *_layers of isolation_*

This means that changes made in one layer of the architecture generally dont impact or effect components in other layers 

The change is isolated within that layer and dont effect the other layers. 


if you allow the` presentation layer` direct access to the `persistence layer` then changes made to the `SQL` WITH IN persistance layer would impact both `business layer` and the `presentation layer`. 

producing a very tightly coupled application with lots of interdependencies between components.

The layers of isolation concept also means that each layer is inde‐
pendent of the other layers


**open layers**

While closed layers facilitate layers of isolation and therefore help
isolate change within the architecture, there are times when it makes
sense for certain layers to be open.

For example, 

>suppose you want to add a shared-services layer to an architecture containing common service components accessed by components within the business layer (e.g., data and string utility classes or auditing and logging classes). Creating a services layer is usually a good idea in this case because architecturally it restricts access to the shared services to the business layer (and not the presentation layer)

when a layer is open it means the that the request are allowed to bypass this open layer and go directly to the layer below it. 



### Pattern Example

![layered architecture examples](./Screenshot%202024-11-05%20at%2012.54.09.png)









