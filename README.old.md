# React-routing-hotels-app
Routing is the ability to move between different parts of an application when a user enters a URL or clicks an element (link, button, icon, image etc) within the application.

### Setup
`npm install --save react-router-dom`

### Routing Types
* BrowserRouter
> A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
[BrowserRouter](https://reactrouter.com/docs/en/v6/api#browserrouter)
* HashRouter
> A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.
[HashRouter](https://reactrouter.com/docs/en/v6/api#hashrouter)
* Memory Router
> A <Router> that keeps the history of your “URL” in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.
[Memory Router](https://v5.reactrouter.com/web/api/MemoryRouter)
* Native Router
> the recommended interface for running React Router in a React Native app.
[Native Router](https://reactrouter.com/docs/en/v6/api#hashrouter)

### Routes
* `<Route path=”/items”/>` - This route is matched when the pathname is /items or, all other paths that start with /items/ for example /items/2.
* `<Route exact path=”/items” />` - Only exact match
* `<Route path="/items/:itemId" />` - Dynamic value within the url, can be accessed via `props.match.params.itemId`

### Component Prop
```
<Route 
  exact 
  path=”/items” 
  element={Items}
/>
```
In this example, the Items component will be returned when the path matches the current location.


### Element Prop
```
<Route 
  exact 
  path=”/items” 
  element={<div>List of Items</div>}
/>
```
In this example, when the current location matches the path, a React element is created and the string `List of Items` is rendered in the browser.

### Routes Component (formerly Switch)
The react-router library also contains a <Routes/> component that is used to wrap multiple <Route/> components. The Routes component only picks the first matching route among all its children routes.
```
<Route 
  path=”/items” 
  element={<div><em>List of items</em></div>}
/>
<Route
  path=”/items/2" 
  element={<div>Item with id of 2</div>}
/>
```

### Resources - *do not skip this*
[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming)
[React Router V6](https://reactrouter.com/docs/en/v6)
[React Router V5](https://v5.reactrouter.com/web)


### Assignment
* You are going to build a simple hotels-app using data taken from [Hotels in Haifa](https://data.gov.il/dataset/https-www-haifa-muni-il-informationcity-pages-databasespublic-aspx)
1) convert & modify csv to json string, so you can use it in your app for routing
2) create new react project using CRA (`npx create-reacp-app hotels-app`)
3) design & implement `HotelsGallery`,`HotelCard`,`HotelPage`, `CallNowButton` *class components*
4) use `react-router-dom` to provide the following routes: '/' - homepage, '/hotelName' - in hebrew, kebab-case,
   *Bonus Features*:
* call now button will make a dial (when used by phone)
* the hotel-cards gallery is scrollable
* toggle button will switch between dark-theme and light-theme (using Context)
  ![alt text](./wireframe_hotels.png "Hotels App Mockup")
