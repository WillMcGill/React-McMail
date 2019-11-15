import React from 'react'
import axios from 'axios'

class PopulateTable extends React.Component{

    constructor(props){
        super(props)
    }

    
    render(){
        console.log(this.props.dataTable)
        // const displayData = this.props.dataTable.map((email) =>{
        //     return(
        //         <tr>
        //             <td>{email.data.sender_id}</td>
        //             <td>{email.data.subject}</td>
        //             <td>{email.data.message}</td>
        //         </tr>
        //     )
        // }

        // )

        return(
            <div>
            Hello World!
            </div>
                
            
        )
    }
}

// class DynamicTable extends React.Component{
//     render(){ 
//         return(
//             <div>
//                 <table id = "menu" className = "table table-striped table-bordered table-dark mx-auto">
//                     <PopulateTable ListItem={this.props.MealName} />
//                 </table>  
//             </div>
            
//         )
//     }
// }

export default PopulateTable;