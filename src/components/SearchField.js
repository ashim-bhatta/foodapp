import React from 'react'

class SearchField extends React.Component {

    state = {
        searchValue: '' 
    }

    changeValue = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    onFormSubmit = async(e) => {
        e.preventDefault()
        if(this.state.searchValue===''){
            alert('Invalid Input')
        }
        else{
            this.props.onSubmit(this.state.searchValue)
        }
    }

    render() {
        return ( 
            <div className = 'form'>

                <label> Search Your Recipe </label> 

                <form onSubmit={this.onFormSubmit} autoComplete='off'>

                        <input type = 'text' id = 'a'

                        onChange = { this.changeValue }

                        value = { this.state.searchValue }
                        placeholder="Enter name of food..."

                        /> 
                        < button> Search </button>     
                </form>  
               
            </div>
        )
    };
}
export default SearchField