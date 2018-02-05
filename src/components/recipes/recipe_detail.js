import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchRecipe } from '../../actions';
import RecipeEditModal from './recipe_edit_modal';

class RecipeDetail extends Component {
    componentDidMount() {
        console.log(this.props);
        const { cat_id, recipe_id } = this.props.match.params;
        this.props.fetchRecipe(cat_id, recipe_id);
    }

    renderItems(items) {
        return _.map(_.split(items, '\n'), item => {
            return (
                <li>
                    <i className="fa fa-plus-circle"></i> { item }
                </li>
            );
        });
    }

    render() {
        const { recipe } = this.props;
        const cardStyle = {width: '18rem'};
        if (!recipe){
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <img className="card-img-top" src="http://placehold.it/1000x300" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{ recipe.name }</h5>
                                <p className="card-text">
                                    { recipe.description }
                                </p>
                            </div>
                        </div><br />

                        <button className="btn btn-danger pull-right" title="Delete Recipe">
                            <i className="fa fa-trash-o fa-fw"></i> 
                        </button>                        
                        <button className="btn btn-info" data-toggle="modal" data-target="#recipeModal">
                            <i className="fa fa-edit fa-fw"></i> Edit Recipe</button>
                        <br />
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h5>Ingredients</h5>
                        <hr />
                        <ul class="list-unstyled">
                            { this.renderItems(recipe.ingredients) }
                        </ul>
                    </div>

                    <div className="col-6">
                        <h5>Directions/Steps</h5>
                        <hr />
                        <ul class="list-unstyled">
                            { this.renderItems(recipe.directions) }
                        </ul>
                    </div>
                </div>
                <div>
                    <RecipeEditModal />
                </div>

                <hr className="featurette-divider" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { recipe: state.recipe.recipe_item };
}

export default connect(mapStateToProps, { fetchRecipe })(RecipeDetail);
