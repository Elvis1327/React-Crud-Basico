import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AddUser } from '../components/crud/AddUser';
import { EditUser } from '../components/crud/EditUser';
import { ManageUsers } from '../components/crud/ManageUsers';
import { Navbar } from '../components/shared/Navbar';

export const AppRouter = () => {
    
    return (
        <>
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/manage-users" component={ManageUsers} />
                    <Route exact path="/add-user" component={AddUser} />
                    <Route exact path="/edit-user/:id" component={EditUser} />
                    <Redirect to="/add-user" />
                </Switch>
            </div>
        </Router>
        </>
    )
}


