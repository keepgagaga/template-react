import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link, } from "react-router-dom";
import '../style/cnode.css';
import axios from "axios";

let baseUrl = 'https://cnodejs.org/api/v1/';

class Cnode extends Component {
    render() {
        return (
            <Router>
            <div className="cnode">
                
                <Switch>
                    <Route path="/cnode">
                        <CnodeHeader></CnodeHeader>
                        <CnodeBody></CnodeBody>
                    </Route>
                    <Route path="/topic/:id" component={ TopicDetail }></Route>
                </Switch>
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
            <Link to={ 'topic/' + topic.id } style={{ textDecoration: 'none', color: 'black' }} >{ topic.title }</Link>
        </div>
    )
}

class TopicDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: {}
        }
        this.getTopic = this.getTopic.bind(this);
    }

    componentDidMount() {
        this.getTopic();
    }

    getTopic() {
        axios.get(baseUrl + 'topic/' + this.props.match.params.id)
        .then(res => {
            console.log(res, 'get topic res');
            this.setState({
                topic: res.data.data.content,
            })
        })
    }

    render() {
      
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.topic }}></div>
            </div>
        )
    }
}

export default Cnode;