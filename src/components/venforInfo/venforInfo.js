import React, { Component } from 'react';
import './venforInfo.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as venforInfoActions from "../../store/venforInfo/actions";
export default class venforInfo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        return <div className = "component-venfor-info" > Hello!component venforInfo < /div>;
    }
}
// export default connect(
//     ({ venforInfo }) => ({ ...venforInfo }),
//     dispatch => bindActionCreators({ ...venforInfoActions }, dispatch)
//   )( venforInfo );