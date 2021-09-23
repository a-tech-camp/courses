# Grid
Given a column we want to create multiple columns. Simple repetition could be used to do this; however, this could lead to a lot of code. We want to use Components to repeat our code.

To create a component, we define a `function` with the name `Column`. This function should return the values that correspond to the column we created beforehand. We then call this function inside of our `App` function by treating it as an html element `<Column></Column>`. We want 7 of these.

## Further Reading
 - [https://www.google.com/search?q=react+component](react component) for a reactjs documentation on react components
