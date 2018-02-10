import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import recipeListImg from '../../img/recipe_img.jpg'

import { fetchCategoryRecipes } from '../../actions/recipes';

class CategoryRecipes extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCategoryRecipes(id);
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
            const imgSrc = recipeListImg;
            return (
                <div className="col-md-6" key={ recipe.id }>
                    <div className="card">
                        <img className="card-img-top" src={ imgSrc } alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{ recipe.name }</h5>
                            <p className="card-text">
                                { recipe.description }
                            </p>
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
    return { recipes: state.category.category_recipes }
}

export default withRouter(connect(mapStateToProps, { fetchCategoryRecipes })(CategoryRecipes));