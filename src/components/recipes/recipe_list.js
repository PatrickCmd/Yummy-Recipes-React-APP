import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import recipeListImg from '../../img/recipe_list_image.jpg'

import { fetchRecipes } from '../../actions/recipes';

class RecipesList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    renderRecipes() {
        const { recipes } = this.props;
        const cardStyle = {width: '180rem'};
        if (!recipes) {
            return (
                <div>Loading...</div>
            );
        }

        //using lodash map to traverse through the category object
        return _.map(recipes, recipe => {
            const imgSrc = recipeListImg;
            return (
                <div className="col-md-6" key={ recipe.id }>
                    <div className="card">
                        <img className="card-img-top" src={ imgSrc } alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{ recipe.name }</h5>
                            <p className="card-text">{ recipe.description }</p>
                            <Link to={`/categories/${recipe.cat_id}/recipes/${recipe.id}`} className="btn btn-primary">View More</Link>
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