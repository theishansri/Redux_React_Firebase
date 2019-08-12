import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../Redux/Actions/courseAction";
import PropTypes from "prop-types";
class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.course.title);
    this.props.createCourse(this.state.course);
  };
  inputHandler = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.inputHandler}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
          {this.props.courses.map(course => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseAction.createCourse(course))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
