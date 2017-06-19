
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Articles from "./pages/Articles";
import Layout from "./pages/Layout";


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Articles}></IndexRoute>
        </Route>
    </Router>,
    app);