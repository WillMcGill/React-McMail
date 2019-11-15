import React from 'react'
import axios from 'axios'

class PopulateTable extends React.Component{
    render(){ 
        
    }
}

class DynamicTable extends React.Component{
    render(){ 
        return(
            <div>
                <table id = "menu" className = "table table-striped table-bordered table-dark mx-auto">
                    <PopulateTable ListItem={this.props.MealName} />
                </table>  
            </div>
            
        )
    }
}

export default DynamicTable;