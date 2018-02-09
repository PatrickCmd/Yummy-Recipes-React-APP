import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import { fetchCategories } from '../../actions/categories';

class CategoriesList extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    renderCategories() {
        const { categories } = this.props;
        if (!categories) {
            return (
                <div>Loading...</div>
            );
        }
        
        //using lodash map to traverse through the category object
        return _.map(categories, category => {
            return (
                <li className="list-group-item" key={ category.id }>
                   <Link to={`/categories/${category.id}`}>{  category.name }</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    { this.renderCategories() }
                </ul>
                <Notifications />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { categories: state.categories }
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesList);