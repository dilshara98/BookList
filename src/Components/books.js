import React from 'react';
import axios from 'axios';


export default class Books extends React.Component{
    state={
        books:[],

    };
 
    componentDidMount(){
        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=T1cHAy86uf1YG584FytW3VY1oAxn9ArW')
        .then(res=>{
            console.log(res.data.results);
            this.setState({books: res.data.results});
        });
    }
    render(){
        return(
            
            
            <ul>
                {this.state.books.map(book => <li>{book.list_name}<button  style={{color: 'blue', textAlign:'center', margin:'0.5cm 0.5cm 0.5cm 0.5cm'}} >
                    View Details
                </button></li>)}
                
             </ul>
                
          
        )
    }

}