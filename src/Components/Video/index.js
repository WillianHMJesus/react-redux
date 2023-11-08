import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => {
    <div>
        <strong>Módulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
    </div>
}

const mapStateToProps = state => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson
});

export default connect(mapStateToProps, null)(Video);