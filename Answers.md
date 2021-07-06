1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map(), Array.filter(), Array.concat(), Object.assign() => These methods keep our code immutable because they create a new array/object, and do not mutate the original array/object. We use Object.assign() to create a new object extending the properties of the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store - A JS object that contains our state for our application. It is called the single source of truth because the store is made up of a single object.

Actions - Pieces of information that contain an action type and an optional payload property. Actions are dispatched to our reducers to handle state changes.

Reducers - Pure functions that calculate the new state based off of the current state, and the action it receives. Reducers don't update the state directly, but return a new object with the updated state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is stored locally within a component and is not accessible from other components unless it's passed as props to sub-components.

Application state is akin to global state and is available to all components.

It would be a good idea to use component state when the data is required only by the component it lives in or in child components. You should use application state when the state is used by multiple components that don't have parent/child relationships.

1.  What is middleware?

Middleware is used to intercept an action, execute some function, then either stop the flow of data, or pass it to the next middleware or reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to perform asynchronous API requests. Since reducers are synchronous by default, redux-thunk allows us the ability to make async requests in our action creators. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

{ Provider }
