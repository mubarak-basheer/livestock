import React, { Component } from 'react';
import Hero from '../components/Hero';
import Navbartmp from '../components/Navbartmp';
class SellMyFarm extends Component {
    render() {
        return (
            <>
            <Navbartmp/>
            <Hero hero="defaultHero">
                <div className="table-bg-smf">
                <h3>Sell My Farm</h3>
                    <div className = "acc-inv-sz">
                        
                        <h5>Total Farm Cost</h5>
                        <h5>2,00,000</h5>
                        <br/>
                        <div class="alert alert-primary alert-sellmyfarm" role="alert">
                            <div className="alert-pad">
                            <ul>
                                <li><p>If you wish to sell your farm you will get the money back what mentioned above .</p></li>
                                <li><p>Money will be deposited after 30 days from the confirmation of farm sold </p></li>
                                <li><p>Once you sold out our customer care will contact you , after the phone verification done you are farm will considered as you sold it out otherwise not. </p></li>
                                <li><p>By selecting the agree button you can make your farm to sold it out </p></li>
                            </ul>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                I Agree to the above terms and conditions.
                        </label>
                        </div>
                            
                        </div>
                        <br />
                       

                        
  <a class="btn btn-danger btn-sm" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Sell it Out
  </a> &nbsp;&nbsp;
  <button class="btn btn-success btn-sm" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Cancel
  </button>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <div class="alert alert-success alert-sellmyfarm" role="alert">
                        <div className="alert-pad">
                            <h2>Thank you for being as our investor !!!</h2>
                            <br /><br /><br />
                            <strong>
                            <p>our customer care will contact you to your mobile number +91.xxxxxxxxxx</p>
                            <p>or through your mail id shaajxxxx@gmail.com within two days time</p>
                            </strong>
                            
                            <br /><br /><br />
                            
                            <strong><p className="alert-p">if you feel any queries please write to carexxx@gmail.com or if you don't get any call also please sent mail</p></strong>
                            </div>
                        </div>
  </div>
</div>





                        
                       
                    </div>

                </div>





                
            </Hero>
            </>
        );
    }
}

export default SellMyFarm;