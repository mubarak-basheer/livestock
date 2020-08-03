import React, { Component } from 'react'
import Hero from '../components/Hero';
import {FaRupeeSign} from 'react-icons/fa';
import img from '../images/home/Wastemanagement-chart.png';
import Navbartmp from '../components/Navbartmp';
class WasteManagement extends Component{


    render(){

        
        return(
            <>
            <Navbartmp/>
          <Hero>
            <div className="table-bg">
                <div className = "waste-tbl-sz">
                <h3>Waste Management Details</h3>
            <img src={img} className = "chart"/>
<br/><br/><br/>
            <table class="table table-sm">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Month/Year</th>
      <th scope="col">Waste(Kg)</th>
      <th scope="col">Money</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jan /2020</th>
      <td>50</td>
      <td><FaRupeeSign/>&nbsp;7,000</td>
      
    </tr>
    <tr>
      <th scope="row">Feb/2020</th>
      <td>48</td>
      <td><FaRupeeSign/>&nbsp;6,800</td>
      
    </tr>
    <tr>
      <th scope="row">March/2020</th>
      <td>53</td>
      <td><FaRupeeSign/>&nbsp;8,200</td>
      
    </tr>
   
    <tr>

    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
   
     
    </tr>
  </tbody>
</table>
                </div>

</div>


          </Hero>
            </>
        );
    }
}
export default WasteManagement;