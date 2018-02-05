import React, { Component } from 'react';
import CarouselComponent from '../components/universal/carousel';

class Homepage extends Component {

    render() {
        return (
            <div>
                <CarouselComponent />
                <div className="container mid-section">
                    <div className="row">
                        <div className="col-md-8">
                            <h3>YUMMY RECIPES</h3>
                            <hr />
                            <p>
                                Whether you love to cook or you just love to eat, odds are you have a collection 
                                of dishes and recipes you'd like to try. Maybe you have a bunch handed down from a 
                                loved one. In either case, you probably need a better method to keep them organized 
                                for the long haul than a bunch of index cards in a file folder.
                            </p>
                                Here is Yummy Recipe App for you, depending on the kind of recipe collection you have.
                            <p>
                            </p>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                </div> 
            {/* <!-- Container --> */}
            </div>
        );
    }
}

export default Homepage;