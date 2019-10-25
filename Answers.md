1. What problem does the context API help solve?

    Context API solves the issue of prop drilling. While prop drilling is fine
    for smaller applications context looks to the bigger picture where you don't
    have to pass data to via each and every component manually in order to share.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Actions are info that send data from your app to your store.
    - Reducers are simply put one way to manage state.
    - Store is a 'single source of truth' because it holds the whole state tree
    of your application. The only way to change the state is to dispatch
    an action on it. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is globally accessed and Component state is local to a specific component. A good time to use Application state would be API calls
    or maybe a user submitting a form. Component state would be good for smaller
    state changes such as characters present in a text field.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is a middleware that lets you call action creatores taht return a function instead of an action object.  

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I'd have to say Redux because it makes the most sense to me despite still
    just trying to grasp the new syntax I can see how powerful it can be.