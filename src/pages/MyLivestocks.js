import React, { Component } from 'react'
import Hero from '../components/Hero';
import Navbartmp from '../components/Navbartmp';
class Mylivestocks extends Component{


    render(){
        return(
          <>
          <Navbartmp/>
          <Hero>
            <div className="table-bg">
            <h3>My Livestock Details</h3>
            <table class="table table-sm">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">E.ID</th>
      <th scope="col">MAC Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Weight(Kg.)</th>
      <th scope="col">Breeding</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>#001</td>
      <td>1800:00CDE1</td>
      <td>M</td>
      <td>2</td>
      <td>25</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>#002</td>
      <td>1800:00CDE2</td>
      <td>M</td>
      <td>1</td>
      <td>16</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>#003</td>
      <td>1800:00CDE3</td>
      <td>F</td>
      <td>2</td>
      <td>23</td>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>#004</td>
      <td>1800:00CDE4</td>
      <td>F</td>
      <td>2</td>
      <td>25</td>
      <td>Yes</td>
    </tr>

    <tr>
      <th scope="row">5</th>
      <td>#005</td>
      <td>1800:00CDE5</td>
      <td>F</td>
      <td>2</td>
      <td>26</td>
      <td>Yes</td>
    </tr>

    <tr>
      <th scope="row">6</th>
      <td>#006</td>
      <td>1800:00CDE6</td>
      <td>F</td>
      <td>2</td>
      <td>20</td>
      <td>No</td>
    </tr>

    <tr>
      <th scope="row">7</th>
      <td>#007</td>
      <td>1800:00CDE7</td>
      <td>M</td>
      <td>2</td>
      <td>25</td>
      <td>No</td>
    </tr>
    <tr>

    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
     
    </tr>
  </tbody>
</table>


            <h3>Doctor consulting details</h3>
            <table class="table table-sm">
  <thead class="thead-dark">
    <tr>
     
      <th scope="col">E.ID</th>
      <th scope="col">MAC Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Medication</th>
      <th scope="col">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#001</th>
      <td>1800:00CDE1</td>
      <td>M</td>
      <td>1</td>
      <td>Tab xxx. Cap xxx. Syrup xxxx.</td>
      <td>Leg Broken</td>
    </tr>
    <tr>
    <th scope="row">#004</th>
      <td>1800:00CDE4</td>
      <td>F</td>
      <td>2</td>
      <td>Tab xxx. Cap xxx. Syrup xxxx.</td>
      <td>Breeding Stage</td>
    </tr>
    <tr>
    <th scope="row">#005</th>
      <td>1800:00CDE5</td>
      <td>F</td>
      <td>2</td>
      <td>Tab xxx. Cap xxx. Syrup xxxx.</td>
      <td>Breeding Stage</td>
    </tr>
    <tr>
    <th scope="row">#007</th>
      <td>1800:00CDE7</td>
      <td>M</td>
      <td>1</td>
      <td>Tab xxx. Cap xxx. Syrup xxxx.</td>
      <td>Vision problem</td>
    </tr>

    
  </tbody>
</table>

</div>


          </Hero>
            </>
        );
    }
}
export default Mylivestocks;