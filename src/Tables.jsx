import React from 'react'

const Tables = ({data}) => {
  return (
    <div>
        <table>
            <tbody>
                <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                </tr>

            {data.map((item)=>(
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>


                <td></td>

            </tr>
            ))}
                
               

            </tbody>
        </table>
    </div>
  )
}

export default Tables