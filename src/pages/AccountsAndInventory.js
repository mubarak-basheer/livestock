import React, { Component } from 'react';
import Hero from '../components/Hero';
import Navbartmp from '../components/Navbartmp';

class AccountsAndInventory extends Component {

    render() {
        return (
            <>
            <Navbartmp/>
            <Hero>
                <div className="table-bg">
                    <div className = "acc-inv-sz">
                        <h2>Accounts  and Inventory Details</h2>
                        <table class="table table-sm">
                            <thead class="thead-dark accinv-head-align">
                                <tr>
                                    <th colspan="2" scope="col">Live stock (market price)</th>
                                </tr>
                            </thead>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Total Count (No's)</th>
                                    <th scope="col">Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>120</td>
                                    <td>1,55,000</td>
                                </tr>
                            </tbody>
                            <tr>
                                    <th colspan="2" scope="col">&nbsp;</th>
                                </tr>
                            <thead class="thead-dark accinv-head-align">
                                <tr>
                                    <th colspan="2" scope="col">Agriculture (Food)</th>
                                </tr>
                            </thead>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Total Month</th>
                                    <th scope="col">Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>34,435</td>
                                </tr>
                            </tbody>
                            <tr>
                                    <th colspan="2" scope="col">&nbsp;</th>
                                </tr>

                            <thead class="thead-dark accinv-head-align">
                                <tr>
                                    <th colspan="2" scope="col">Waste Management</th>
                                </tr>
                            </thead>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Total Month</th>
                                    <th scope="col">Total Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>22,000</td>
                                </tr>
                            </tbody>
                            <tr>
                                    <th colspan="2" scope="col">&nbsp;</th>
                                </tr>
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Total Income</th>
                                    <th scope="col">Amount Spent</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>22,000</td>
                                    <td>34,435</td>
                                </tr>
                            </tbody>
                        </table>
                        &nbsp; &nbsp;
                    <div class="alert alert-info" role="alert">
                            <strong>Note : </strong> 30% income automatically detected for Zaakat purpose at the year end
                    </div>
                    </div>

                </div>
            </Hero>
            </>
        );
    }
}

export default AccountsAndInventory;