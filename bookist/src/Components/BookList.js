import { Component } from 'react'
import data from '../data'
import Book from './Book'

class BookList extends Component{
    constructor(props){
        super(props)
        
    }


    render(){
        return (
            <div className='books'>
                {/* <Book books={this.state.books} index={this.state.index}/> */}
                { props.books.map((element, index) => (
                    <div className='individual-book' key={index}>
                        <img src={element.img} alt={element.title}
                        onClick={e => props.addToShelf(index)}/>
                        <p className='book-title-text'>{element.title}</p>
                    </div>
                )) }
            </div>
        )
    }
}

export default BookList;