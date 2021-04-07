import React, { Component } from 'react';

export default class Skills extends Component {
  state = {
    showMore: false,
    skills: ['Computer Science', 'Programming', 'Frontend Development'],
  };

  // componentDidMount() {
  //   const skills = localStorage.getItem('skills');
  //   if (skills) {
  //     this.setState({ skills: JSON.parse(skills) });
  //   } else {
  //     localStorage.setItem('skills', JSON.stringify(this.state.skills));
  //   }
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({skill: [...this.state.skills, newSkill]})
  // }

  // componentDidUpdate = (prevProp, prevState) => {

  //   localStorage.setItem(
  //     'skills',
  //     JSON.stringify(this.state.skills)
  //   );
  // };

  render() {
    return <h1>SKILLS!</h1>;
  }
}
