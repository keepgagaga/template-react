import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import '../style/cnode.css';
import axios from "axios";


class Cnode extends Component {
    render() {
        return (
            <Router>
            <div className="cnode">
                <CnodeHeader></CnodeHeader>
                <CnodeBody></CnodeBody>
            </div>
            </Router>
        )
    }
}



class CnodeHeader extends Component {
    render() {
        return (
            <div className="cnode-header">
                <h2>Cnode</h2>
            </div>
        )
    }
}

class CnodeBody extends Component {

    constructor() {
        super();
        this.state = {
            topics: [],
        };
        this.getTopics = this.getTopics.bind(this);
    }

    
 getTopics() {
    let baseUrl = 'https://cnodejs.org/api/v1/';

    axios.get(baseUrl + 'topics')
        .then(res => {
            console.log(res, 'get topics res');
            this.setState({
                topics: res.data.data,
            })
        })
}

    componentDidMount() {
        this.getTopics();
    }

    render() {
        return (
            <div className="cnode-body">
                {
                    this.state.topics.map( topic => {
                        return TopicItem(topic);
                    })
                }
            </div>
        )
    }
}

function TopicItem(topic) {
    return (
        <div key={topic.id} className="topic">
            <Link to={ '/:' + topic.id } style={{ textDecoration: 'none', color: 'black' }} >{ topic.title }</Link>
            <Switch>
                <Route path='/:id' children={ <TopicDetail /> }></Route>
            </Switch>
        </div>
    )
}

function TopicDetail() {
    let {id} = useParams();

    return (
        <div>
            ID: { id }
        </div>
    )
}

export default Cnode;