# Express

Express was the original server framework. It has largely kept up with current trends, although this is not necessarily true.


## Servers
Servers generally have two things:
 - router that defines endpoints
 - functions to call for those endpoints

Over time those functions will grow bigger and bigger. We will want to seperate them on functionality. Generally, we:
 - keep business logic to the highest levels
 - add directionality to our code, so that what our code references, does not come back to reference this

