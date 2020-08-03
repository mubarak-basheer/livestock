import React, { Component } from 'react'
import Hero from '../components/Hero';
import { FaRupeeSign } from 'react-icons/fa';
import img from '../images/home/Agriculture-chart.png';
import Navbartmp from '../components/Navbartmp';

class Agriculture extends Component {
    render() {
        return (
            <>
            <Navbartmp/>
            <Hero>
                
                <div className="table-bg">
                    <div className="waste-tbl-sz">
                        <h3>Agriculture Details</h3>
                        <img src={img} className="chart" />
                        <br /><br /><br />
                        <table class="table table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Month/Year</th>
                                    <th scope="col">Food</th>
                                    <th scope="col">Money</th>
                                    <th scope="col">Bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Jan /2020</th>
                                    <td>40kg</td>
                                    <td><FaRupeeSign />&nbsp;10,000</td>
                                    <td>Click here</td>
                                </tr>
                                <tr>
                                    <th scope="row">Feb/2020</th>
                                    <td>43Kg</td>
                                    <td><FaRupeeSign />&nbsp;12,568</td>
                                    <td>Click here</td>
                                </tr>
                                <tr>
                                    <th scope="row">March/2020</th>
                                    <td>41kg</td>
                                    <td><FaRupeeSign />&nbsp;11,785</td>
                                    <td>Click here</td>
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
export default Agriculture;