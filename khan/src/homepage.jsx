import React from 'react';
import "./homepage.css";


class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogged:true,
            iscalled:false
      
        }
    }
    componentDidMount(){
        
        if(localStorage.getItem('user') === null)
        {
            this.setState({
                isLogged:true,
                iscalled:false
                
            })
        }
        else if (localStorage.getItem('user') != null){
            this.setState({
                isLogged:false,
                iscalled:true,
                
            })
            var x=localStorage.getItem('user');
            console.log(x);
        }


    }
   
render(){
     

    return(
        <div className="page">
            <div className="searchtab">
                <button className="course" >Courses</button>
                
            <div className="search">
            <a data-hack-search-button-label="true" aria-label="Search for courses, skills, and videos" href="/search" className="tab" data-test-id="navbar-search-button">
                <div className="boxex">
                <span className="text">Search</span>
                <div className="sbutton">
                    <svg role="img" aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 10 10">
                <path fill="currentColor" d="M7.73732912,6.67985439 C7.75204857,6.69246326 7.76639529,
    6.70573509 7.7803301,6.7196699 L9.65165045,8.59099025 C9.94454365,
    8.8838835 9.94454365,9.3587572 9.65165045,9.65165045 C9.3587572,
    9.94454365 8.8838835,9.94454365 8.59099025,9.65165045 L6.7196699,
    7.7803301 C6.70573509,7.76639529 6.69246326,7.75204857 6.67985439,
    7.73732912 C5.99121283,8.21804812 5.15353311,8.5 4.25,8.5 C1.90278981,
    8.5 0,6.59721019 0,4.25 C0,1.90278981 1.90278981,0 4.25,0 C6.59721019,
    0 8.5,1.90278981 8.5,4.25 C8.5,5.15353311 8.21804812,5.99121283
    7.73732912,6.67985439 L7.73732912,6.67985439 Z M4.25,7.5 C6.04492544,
    7.5 7.5,6.04492544 7.5,4.25 C7.5,2.45507456 6.04492544,1 4.25,1
    C2.45507456,1 1,2.45507456 1,4.25 C1,6.04492544 2.45507456,7.5 4.25,
    7.5 L4.25,7.5 Z"></path>
    </svg>
    </div>
    </div>
    </a>
    </div>
            <h3 className="name">
                Khan Academy
            </h3>
            <div className="switch" style={{"display" : this.state.isLogged ? 'block' : 'none'}}>
            <button>Donate</button>
            <button><a href="/login" className="line">Login</a></button>
            <button><a href="/signup" className="line">Signup</a></button><br/>
            </div>
            <div className="user" style={{"display" : this.state.iscalled ? 'block': 'none'}}>
             <p> </p> 
            </div>
    </div>
        
            <div className="mainpage">
            <h1 className="_1agbrc6d">
                <span className="_1gf4zc3" >For every student,</span>
                <br/><span className="_1gf4zc3" >every classroom.</span>
                <br/>
                <span className="_1gf4zc3" >Real Results.</span>
               
             
                </h1>
                <p>
                    <span >We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
                        </span>
                </p>
                <div>
                <a role="button"  href="/signup" className="_1l0xpe7f">
                    <span className="_1alfwn7n">
                        <div className="_xu2jcg">Learners</div>
                        </span>
                    </a>
                    <a role="button" href="/signup" className="_1l0xpe7f">
                        <span className="_1alfwn7n">
                            <div className="_xu2jcg">Teachers</div>
                            </span>
                            </a>
                </div>
            </div>
    
        </div>
    );
}

}

export default Homepage;