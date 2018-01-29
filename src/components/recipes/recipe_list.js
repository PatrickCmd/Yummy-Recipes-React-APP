import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchRecipes } from '../../actions/index';

class RecipesList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderRecipes() {
        const { recipes } = this.props;
        const cardStyle = {width: '18rem'};
        if (!recipes) {
            return (
                <div>Loading...</div>
            );
        }

        //using lodash map to traverse through the category object
        return _.map(recipes, recipe => {
            return (
                <div className="col-md-6" key={ recipe.id }>
                    <div className="card">
                        <img className="card-img-top" src="http://placehold.it/286x180" alt="Card image cap" />
                        <div className="card-body" style={ cardStyle }>
                            <h5 className="card-title">{ recipe.name }</h5>
                            <p className="card-text">
                                { recipe.description }
                            </p>
                            <Link to="#" className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    { this.renderRecipes() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesList);