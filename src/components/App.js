import React from 'react'
import SearchField from './SearchField'
import Result from './Result'

class App extends React.Component {

    state = {
        searchResult : []
    }

    changeValue = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    onSearchSubmit = async(term) => {
            const APP_kEY = '30b680a61787c4eb4f211382ef68e0c9'
            const APP_ID ='6d7ac30d'
            const SearchTerm = term
            const apiURL = `https://api.edamam.com/search?q=${SearchTerm}&app_id=${APP_ID}&app_key=${APP_kEY}`
            const searchResult = await fetch(`${apiURL}`)
            const data = await searchResult.json();
            const dataHits = data.hits
            this.setState({
                searchResult : dataHits
            })

    }

    render() {
        return ( 
            <div>
               <SearchField onSubmit={this.onSearchSubmit} />
               <Result  images={this.state.searchResult}/>
            </div>
        )
    };
}
export default App