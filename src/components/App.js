import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamCreate from './streams/StreamCreate'
import Header from './Header'
import history from '../history'

const App = () => {

    return (
        <div className='container ui'>

            <Router history={history}>
                <Header />
                <Switch>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/:id' exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
