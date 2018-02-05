import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import CategoryRecipes from '../recipes/category_recipes';
import RecipeModal from '../recipes/recipe_modal';
import { fetchCategory } from '../../actions';

class CategoryDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchCategory(id);
    }

    render() {
        const { category } = this.props;
        const cardStyle = {width: '18rem'};
        if (!category){
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
                                <h5 className="card-title">{ category.name }</h5>
                                <p className="card-text">
                                    { category.description }
                                </p>
                            </div>
                        </div><br />

                        <div className="input-group mb-3 col-md-6 pull-left">
                            <input type="text" className="form-control" placeholder="Search Recipe" aria-label="Recipe" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i> Search</span>
                            </div>
                        </div>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#recipeModal"><i className="fa fa-plus fa-fw"></i> Add Recipe</button><br />
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <CategoryRecipes /> 
                </div>
                <div>
                    <RecipeModal />
                </div>

                <hr className="featurette-divider" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { category: state.category.category_item };
}

export default connect(mapStateToProps, { fetchCategory })(CategoryDetail);
