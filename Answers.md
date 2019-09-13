# Answers

- [ ] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library that tries to make it easier to create interactive UI’s. React allows you to create multiple components that can create your web application. This can include all of you CSS, JS, and HTML within a particular component that can then be attached to a parent component. These components can contain “props” which allow API data to be processed into the components without having to rewrite the entire code. 


- [ ] What does it mean to _think_ in react?
        
    To think in react is the ability to break down your application into multiple components and bring them together under one “master” app. If you plan out your project based on each necessary item individually (a card, title, navigation bar are a few examples) then you can create them in separate folders and bring them together to create your app made of entirely components. 


- [ ] Describe state.

    State is what allows you to create dynamic components with specific behaviors and are more interactive.  
    

- [ ] Describe props.

    Props are a property of a component. They will be replaced by the data that needs to be filtered throughout the component to adjust its state. Props are good to use because it allows the developer to set up a component with specific instructions without needing to use specific words or names for the property.  

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are anything that alters something beyond the scope of the function. So any data coming from beyond the global scope, like data from another website, can effect the entire application. Sync effects like “useEffect” can be used to limit or take out exactly what is necessary for the application, so it does not fully effect the app. 
