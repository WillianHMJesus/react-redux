import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions'

const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {
                        module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>
                                    Selecionar
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        ))}
    </aside>
)

const mapStateToProps = state => ({
    modules: state.modules
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(Actions.toggleLesson(module, lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);