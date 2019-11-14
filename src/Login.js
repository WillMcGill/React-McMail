import React from 'react';
import Axios from 'axios';

class Login extends React.Component {


    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            // email: '',
            // password: ''
        }
    }
    



    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]:value
        });
        console.log(this.state);
    }

    handleSubmit(event){
        event.preventDefault();

        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        Axios.post('http://127.0.0.1:8000/api/login', this.state)
            .then(res => {

                const tokenData = res.data;
                //this.props.tokenReturn(res.data.token);
                console.log(tokenData);
            })

            // var data = "email=" + this.state['email'] + "&password=" + this.state['password'];

            // var xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;

            
            // xhr.addEventListener("readystatechange", function () {
            //   if (this.readyState === 4) {
            //     console.log(this.responseText);
            //   }
            // });
            
            // xhr.open("POST", "http://127.0.0.1:8000/api/login");
            // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // //xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWUwZWJhNDJlMWQzODlhNTBkYWMxMTNkODM1YTVhNzdkN2I1NGFhZTE5MTFiM2ExYzAwZjI5ZmNhNjE1YjU5MzY4ZDg0ZjkxNWI0ZDk1YjkiLCJpYXQiOjE1NzM2NzkxNzAsIm5iZiI6MTU3MzY3OTE3MCwiZXhwIjoxNjA1MzAxNTcwLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.mWHIpbSd-tI2DnF2Zk3qealw_PtPfvIYvmx1cgwO7x7vjjanoWZJRFgDRi9gZ-gf6DfhhDiNcmW_u2vWJOgQMUw7YU0WluaJVpAXYnRDVtcUfvzkkI_KEOYabGE57-YJOsSDTg8CXae3T3g9sW8a0Nd0tZagOxMwIP0JHGkQDjSLoXPSCGF-h-kODGh_ypZwycUKZGxkOfZqAXOXteLXwffJNE1xcXWfpm38L-QErfZbMXRtQmIkxb0wOkqUNOMiqk3eHidEz1s4EImvhgP9zU2j2wlueR0GrYkbvopy030_jf75ZU3NmjwWdpEX-IqoUX_sUpQUeRAHzJkhMgUun0i_ZBwQKsfiPtk_GPW95PRL79202lz-3LpSunISsmcpne9zi3XpKbyYA9Ri6zgIqV9nqqhAAEKEwhxRhXzi8f-7RR_TKMDXzkc1CupJM3fZZW0TI8oNWqyx4hy8av6VNp2bXoMZqbAxOhI6z4mY4hlYJCFNk6HvF0qXVBs-v5qapk3AKd16ZKMus7uwREUF_SNplasDBYHWt9SGZKbTEvowk15Q66BI7ycsphOdD9bq_9QD93Rs0PnqC3OWKbCQDfIm205HdpKi2gtLRsoo7ZGx0t0feAvQA8OFQy6IG_G2x3nYmkpPncDpcgPXXtop08V97D8CrfbvhT4hCVaUBhM\"");
            // xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
            // xhr.setRequestHeader("Accept", "*/*");
            // xhr.setRequestHeader("Cache-Control", "no-cache");
            // //xhr.setRequestHeader("Postman-Token", "5eb199ed-8758-4c85-953c-25443e89c43c,ec5ba0c3-8707-4805-8118-0c9dd1b3f5b6");
            // xhr.setRequestHeader("Host", "127.0.0.1:8000");
            // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
            // xhr.setRequestHeader("Content-Length", "50");
            // xhr.setRequestHeader("Connection", "keep-alive");
            // xhr.setRequestHeader("cache-control", "no-cache");
            // xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization");
            // xhr.setRequestHeader("Access-Control-Allow-Origin", "Origin");
            
            // xhr.send(data);
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