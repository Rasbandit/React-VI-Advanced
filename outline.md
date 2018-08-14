# Advanced React

## Functional vs Class

- Open up babel compiler and show the difference between the two
- Talk about the speed between the two

## Prop Types

- import the package `prop-types`
- this is a way to to TDD and check for the types of the props to make sure things line up properly
- you should also use default props to go along with prop types.
  - if something is not required add default prop for it.

## Setup

- run componentDidMount and get data from API (swapi or/and pokeapi)
- start by building out a component that can display info from the api and map over the data.
- add in functionality to filter through the two.
  - make an input that can update state to be used to filter by names to display
  - also give the input a name property that matches the property on state
  - show how you can just put in just the method for the onChange function and how the event is the param
  - show how you can use `[]` in the property name of setState so this input could be an all in one for multiple inputs, using `e.target.name` and `e.target.name`
  - once you have written that out show them how you can destrucure params, and use nested params to get the name and value of the input in one fel swoop.

## Higher order components

- notice the time lag and how long it takes for the data to show up because of the time lag from the API. (good idea to wrap the setState with a setTimeout to exaggerate a slow api)
  - Wouldn't it be nice to show a loading animation while we wait?
  - We could just conditionally render inside the component but we are going to be making other component that both need the same functionality so lets try and keep our code dry.
- Make a HOC file.
  - import react and Component and export default a function that takes in a componentToRender, and returns a class.
    - Dont make it an implicit return so you can add prop type and default props to the class inside the function
      - props for this should be, `data, filterBy, loadingImages`
  - in the render of the class have it display either the passed in Loading Image, or the passed in componentToRender
    - This is also a cool time to show them this pattern uses a closure to access componentToRender.
  - The Hoc should have 3 props, `data, filterBy, loadingImages`
  - pass the data and filterBy to the other component inside the render.
- import HOC into App.js and put our Component through it.
  - convention often has you name the new component we made as `componentWithFeature` so in our case `SwapiWithLoading`;
- then we can use that component with the loader.
- bring in a second API and build out a display for that and do the same thing.
  - this is a great way to show them the reusability of the code.
- lets make one more change, and also have the HOC be incharge of the filtering so all we do in the display component is map over the passed in data.

## Render Props

- there is a way to do the same thing that has become a bit more popular, thanks to michael jackson.
- build a render component with the render prop.
  - show how we can use the rest operator here
  - we can give it to the render prop and spread the results into the component
- again we can do the same thing

## props.children

- if there is time
- show how you can put JSX inside a component and render it inside the comp using props.children
- make a basic carousel