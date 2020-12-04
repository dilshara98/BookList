import React from 'react';
import axios from 'axios';


export default class View extends React.Component{
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
                {this.state.books.map(book => <li>{book.display_name}</li>)}
                
             </ul>
                
          
        )
    }

}