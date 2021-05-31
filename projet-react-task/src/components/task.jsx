import React from 'react';

import PriorityScale from './priorityScale.jsx';
import DoneButton from './doneButton.jsx';

import '../assets/style/task.css';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task">
        <div className="info">{this.props.description} ({this.props.duration} mn)</div>
        <PriorityScale
          priority={this.props.priority}
          taskId={this.props.id}
          changePriority={this.props.changePriority}
        />
        <DoneButton
          taskId={this.props.id}
          makeTaskDone={this.props.makeTaskDone}
        />
      </div>
    );
  }
}