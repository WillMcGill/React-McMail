import React from 'react';
import Axios from 'axios';

class Login extends React.Component {


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
        }
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]:value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        Axios.post('http://127.0.0.1:8000/api/login', this.state)
            .then(res => {
                const tokenData = res.data;
                localStorage.setItem('token' , tokenData.token)
                this.props.isLogin(tokenData.token);
            })

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address
                        <input type="email" name = 'email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="form-group">
                            <label for="exampleInputPassword1">Password
                            <input type="password" name = 'password' className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                            </label>
                    </div>
                            <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
                        )
                    }
}

export default Login;