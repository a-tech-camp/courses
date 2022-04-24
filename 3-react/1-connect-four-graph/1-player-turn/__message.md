# Player Turn
We want to create a way for the player turn to change. We need to display this information and create a button for changing it.

For this, we need to create a state inside of our app that contains this information. State is responsible for telling us what has happened in the app. In our app, we would like to keep track

We call the `useState` function with our initial state for the app `yellow`. This gives us an array with red values: a variable with the value and a function for updating the value. We call these `playerTurn` and `changePlayerTurn`.

We then create another function called `togglePlayerTurn` that checks the current player turn. If `playerTurn` is `yellow` we use `changePlayerTurn` to change it to `red`. Otherwise we know the player turn is `red` and we change the player turn to `yellow`.

Lastly, we want to display this information in our app. We use curly bracket, `{` and `}`, to signal we want the information between to be displayed. We also include a button

## Further Reading
 - [https://www.google.com/search?q=mozilla+html+button](mozilla HTML button) for mozilla documentation on the button html tag
 - [https://www.google.com/search?q=react+use+state](react use state) for reactjs documentation on how to handle state in react
 - [https://www.google.com/search?q=computer+science+state](computer science state) for a wikipedia article on general consideration
