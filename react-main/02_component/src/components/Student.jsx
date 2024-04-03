import React from 'react';
import PropTypes from 'prop-types';

const Student = ({no, name, age}) => {
    // const {no, name, age} = props;

    return (
        <p>
            {/* 학번: {props.no}, 이름: {props.name}, 나이: {props.age} */}
            학번: {no}, 이름: {name}, 나이: {age}
        </p>
    );
};

Student.defaultProps = {
    // no: 0,
    // name: '아무개',
    age: 0
};

Student.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

export default Student;