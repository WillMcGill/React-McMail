import React from 'react'

class PopulateTable extends React.Component{
    render(){ 
        let data = JSON.parse(localStorage.getItem(this.props.ListItem))

        return data.map(item => <tr><td id = "itemTitle">{item.title[0]}</td>
        <td id ="itemDesc">With {item.description[1]} </td><td>${item.price}</td></tr>)
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